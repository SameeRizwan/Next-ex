import connectDb from "../../utils/connectDb";
import Userauth from "../../models/Userauth";
import Userinfo from  '../../models/Userinfo';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";

connectDb();

export default async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    // 1) Validate name / email / password
    if (!isLength(name, { min: 3, max: 20 })) {
      return res.status(422).send("Name must be 3-20 characters long");
    } else if (!isLength(password, { min: 6 })) {
      return res.status(422).send("Password must be at least 6 characters");
    } else if (!isEmail(email)) {
      return res.status(422).send("Email must be valid");
    }
    // 2) Check to see if the user already exists in the db
    const user = await Userauth.findOne({ email });
    if (user) {   
      return res.status(422).send(`User already exists with email ${email}`);
    }
    // 3) --if not, hash their password
    const hash = await bcrypt.hash(password, 10);
    
    // 4) create user
    const createdUser = await new Userinfo({
        name,
        phone,
        tour_id:[]
      }).save();

    const newUser = await new Userauth({
      
      email,
      password: hash,
      info_id:createdUser._id,
      
    }).save();

    console.log({ newUser });
  
    // 5) create token for the new user
    const token = jwt.sign({ userId: newUser._id, username:newUser.username }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });
    // 6) send back token
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up user. Please try again later");
  }
};

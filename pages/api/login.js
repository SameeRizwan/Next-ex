import connectDb from "../../utils/connectDb";
import Userauth from "../../models/Userauth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Login from "../login";

connectDb();

export default async (req, res) => {

  const { email, password } = req.body;
  console.log(email);
  console.log(password);
 
  try {
    // 1) check to see if a user exists with the provided email
    const user = await Userauth.findOne({ email }).select("+password");
    
    // 2) --if not, return error
    if (!user) {
      return res.status(404).send("No user exists with that email");
    
    }
    // 3) check to see if users' password matches the one in db
    const passwordsMatch = await bcrypt.compare(password, user.password);
    // 4) --if so, generate a token
    if (passwordsMatch) {
      const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });
      // 5) send that token to the client
      res.status(200).json(token);
    } else {
      res.status(401).send("Passwords do not match");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in user");
  }
};

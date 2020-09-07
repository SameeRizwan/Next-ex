import SocialUser from "../models/SocialUserSchema";

export async function saveinfo(userid, username, useremail) {
  const user = await SocialUser.findOne({ useremail });
  if (!user) {
    const savedUser = await new SocialUser({
      _id: userid,
      name: username,
      email: useremail
    }).save();
  }
  console.log(savedUser);
}


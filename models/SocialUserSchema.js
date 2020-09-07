import mongoose from "mongoose";

const { String, ObjectId } = mongoose.Schema.Types;

const SocialUserSchema = new mongoose.Schema(
  {
    _id: {
      type: ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  }
);

export default mongoose.models.User || mongoose.model("SocialUser", SocialUserSchema);

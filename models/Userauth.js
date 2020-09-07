import mongoose from "mongoose";

const { String, ObjectId } = mongoose.Schema.Types;

const UserAuthSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String, 
            required: true,
            select: false
        },
        info_id: { 
            type: ObjectId,
            ref: 'Userinfo'
        }
    }
);

export default mongoose.models.Userauth || mongoose.model("Userauth", UserAuthSchema);

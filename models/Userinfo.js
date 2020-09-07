import mongoose from "mongoose";

const { String, ObjectId } = mongoose.Schema.Types;

const UserInfoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        tour_id: [{
            type: ObjectId,
            ref: 'Tourinfo'
        }]
    }
);

export default mongoose.models.Userinfo || mongoose.model("Userinfo", UserInfoSchema);

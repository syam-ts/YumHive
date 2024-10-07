import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
         userName: {
            type: String,
            required: true,
            unique: true,
         },
         password: {
            type: String,
            required: true,
         },
         profilePicture: {
            type: String,
         },
         address: {
            type: String,
         },
   });

const User = mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://syamnandhu3:syam%40yumhive@yumhive.42uda.mongodb.net/YumHIve";

export const connectDB = async () => {
  await mongoose.connect(mongoURI);
};

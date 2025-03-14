import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("connected to mongodb 🚀");
    })
    .catch((err) => {
      console.log("Error connecting to database");
    });
};

export default connectDb;

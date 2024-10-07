import express from "express";
import userRouter from "./route/userRouter";
import productRouter from './route/productRouter'
import bodyParser from "body-parser";
import { connectDB } from "./config/db";


import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

dotenv.config();
const PORT: number = 3000;

app.use(bodyParser.json());
app.use("/", userRouter);
app.use("/", productRouter);




connectDB()
  .then(() => {
    console.log("Database connection established");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.log("Database cannot be connected");
  });

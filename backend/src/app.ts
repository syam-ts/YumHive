import express from "express";
import userRouter from "./route/userRouter";
import cartRouter from "./route/cartRouter";
import bodyParser from "body-parser";
import { connectDB } from "./config/db";
import cors from "cors";

import dotenv from "dotenv";

const app = express();

dotenv.config();
const PORT: number = 3000;
app.use(
  cors({
    origin: "http://localhost:1234",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies and other credentials if needed
  })
);

app.use(bodyParser.json());
app.use("/", userRouter);
app.use("/", cartRouter);

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

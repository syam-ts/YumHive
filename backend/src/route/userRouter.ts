import express from "express";
import { signUp } from "../controllers/userCtrl";

const router = express.Router();

router.post("/signup", signUp);

export default router;

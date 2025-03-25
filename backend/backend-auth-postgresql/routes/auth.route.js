import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

export default userRoute;

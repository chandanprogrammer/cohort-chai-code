import express from "express";
import { loginUser, registerUser, verifyUser, logOutUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify-user/:token", verifyUser);
router.post("/login", loginUser);
router.post("/logout", logOutUser);

export default router;

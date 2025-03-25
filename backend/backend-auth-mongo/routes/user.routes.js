import express from "express";
import {
  loginUser,
  registerUser,
  verifyUser,
  logoutUser,
  getUserProfile,
} from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify-user/:token", verifyUser);
router.post("/login", loginUser);
router.get("/logout", isLoggedIn, logoutUser);
router.get("/profile", isLoggedIn, getUserProfile);

export default router;

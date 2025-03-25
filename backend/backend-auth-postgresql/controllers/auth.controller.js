import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import emailSender from "../utils/emailSender.js";

const prisma = new PrismaClient(); // this is responsible for talk to database

const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password || !phone) {
    // console.log("data is missing");
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        verificationToken,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    // send token as email to user
    const subject = "Verify your email";
    const message = `Please click on the following link: ${process.env.BASE_URL}:${process.env.PORT}/api/v1/users/verify-user/${verificationToken}`;

    const info = await emailSender(user.email, subject, message);

    // send succuss status to user
    if (info.messageId) {
      return res.status(200).json({
        success: true,
        message: "User registered succussfully",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
      message: "Registration failed",
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.user;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    const isMatched = bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      process.env.JWT_EXPIRE
    );

    const cookieOption = {
      httpOnly: true,
    };

    res.cookie("token", token, cookieOption);

    res.status(200).json({
      success: true,
      message: "Loged In successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
      message: "Login failed",
    });
  }
};
const verifyUser = async (req, res) => {};
const logoutUser = async (req, res) => {};

export { registerUser, loginUser, verifyUser, logoutUser };

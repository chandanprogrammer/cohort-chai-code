import User from "../models/User.models.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import emailSender from "../utils/emailSender.js";

const registerUser = async (req, res) => {
  // console.log(req, res);
  // res.send("registered");

  // get data from body
  const { name, email, password } = req.body;

  // validate data
  if (!name || !email || !password) {
    return res.status(404).json({
      message: "Name, email, password fields are required!",
    });
  }

  // check if user alreay exists
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // if user not exists then create user in database
    const user = await User.create({
      name,
      email,
      password,
    });
    // console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    // create a token for verification
    const token = crypto.randomBytes(24).toString("hex");
    // console.log(token);
    user.verificationToken = token;

    // token save in database
    await user.save();

    // send token as email to user
    const subject = "Verify your email";
    const message = `Please click on the following link: ${process.env.BASE_URL}/api/v1/users/verify-user/${token}`;
    const info = await emailSender(user.email, subject, message);

    // send succuss status to user
    if (info.messageId) {
      return res.status(200).json({
        message: "User registered succussfully",
        success: true,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "User not registered",
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  // get token from url
  const { token } = req.params;

  // validate
  if (!token) {
    return res.status(400).json({
      message: "Please provied a token",
    });
  }

  // find user based on token
  const user = await User.findOne({ verificationToken: token });

  // if not matched
  if (!user) {
    return res.status(400).json({
      message: "Invalid token! Please provide a valid token",
    });
  }

  // if matched then set isVerified field true
  user.isVerified = true;

  // remove token then use undefined
  // user.verificationToken = null; // null use krne se key database me rhta hai
  user.verificationToken = undefined; // undefined use krne se database se key delete ho jata hai

  // user save
  const savedUser = await user.save();
  console.log(savedUser);

  if (!savedUser) {
    return res.status(400).json({
      message: "Something went wrong when saved user",
    });
  }

  // return response
  res.status(200).json({
    message: "User verified",
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fileds are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const isValidUser = await bcrypt.compare(password, user.password);
    if (!isValidUser) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        message: "Please verified your email",
      });
    }

    // generate seesion cookies token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      succuss: true,
      message: "Login succussfull",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {}
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "");
    // res.cookie("token", "", {
    //   expires: new Date(0),
    // });
    res.status(200).json({
      success: true,
      message: "User logout succussfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }

  // const sessionToken = req.cookies;
  // console.log(sessionToken);

  // res.clearCookie("token");
};
const forgotPassword = async (req, res) => {
  // get email
  // find user based on email
  // set reset token + reset expary => Date.now() + 10 * 60*  1000 => user.save()
  // send email => design url
};
const resetPassword = async (req, res) => {
  // collect token from parmas
  // password from request body
  // find user basic of tokens
  const {token} = req.parms;
  const {password} = req.body;
  
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpries: {$gt: Date.now()}
    })

    // set password in user
    // resetToken, resetExpiry = null
    // save
  } catch (error) {
    
  }

};
const getUserProfile = async (req, res) => {
  try {
    // console.log(req.user);
    const user = await User.findById(req.user.id).select(
      "-password -createdAt -updatedAt -__v"
    );
    // console.log(user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }
    res.status(200).json({
      success: true,
      message: "User found",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export { registerUser, verifyUser, loginUser, logoutUser, getUserProfile };

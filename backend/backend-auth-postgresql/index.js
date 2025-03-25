import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 7001;

app.use(cookieParser());
app.use(
  cors({
    origin: `${process.env.BASE_URL}:${port}`,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome page",
  });
});

// custom routes
import userRoute from "./routes/auth.route.js";

app.use("/api/v1/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on url ${process.env.BASE_URL}:${port}`);
});

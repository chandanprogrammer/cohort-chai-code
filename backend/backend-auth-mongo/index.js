import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./utils/connectDb.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: [process.env.BASE_URL, "http://localhost:8000"],
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (request, response) => {
  response.send("Hi, I am live");
});

// import routes
import userRoutes from "./routes/user.routes.js";

// middleware or to set routes
app.use("/api/v1/users", userRoutes);

// database connection and server run
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is running at url http://127.0.0.1:${port}`);
    });
  })
  .catch((err) => console.log("Database connection Failed"));

// http://127.0.0.1:8000/api/v1/users/register


// cors error video ---> https://www.youtube.com/watch?v=ZQXKp-ha89c&ab_channel=Coder%27sGyan
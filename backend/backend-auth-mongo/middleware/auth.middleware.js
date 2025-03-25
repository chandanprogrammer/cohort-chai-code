import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    // console.log(req.cookies);
    // let token = req.cookies.token || "";
    let token = req.cookies?.token;

    // console.log(token ? "YES" : "NO");

    if (!token) {
      //   console.log("No token found");

      return res.status(401).json({
        success: false,
        message: "Authentication failed! No token found",
      });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedData;

    next();
  } catch (error) {
    console.log("Auth middleware failure");
    return res.status(500).json({
      success: false,
      message: "Enternal server error",
    });
  }
};

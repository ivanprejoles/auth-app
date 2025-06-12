import { getToken } from "../utils/tokenHandler.js";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("Cookies received:", req.cookies.token);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const decoded = getToken(token);
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);

    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res
        .status(401)
        .json({ message: "Access denied. Invalid or expired token." });
    }

    res.status(500).json({ message: "Server error in authentication" });
  }
};

export default authMiddleware;

import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
};

const getToken = (token) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};

export { generateToken, getToken };

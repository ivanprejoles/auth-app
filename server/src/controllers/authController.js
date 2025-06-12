import {
  validateLogin,
  validateRegistration,
} from "../utils/validationUtils.js";
import { User } from "../database/models/index.js";
import { generateToken } from "../utils/tokenHandler.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const validation = validateRegistration(name, email, password);
    if (!validation.isValid) {
      return res.status(400).json({
        message: validation.message,
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email",
      });
    }

    const newUser = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    await newUser.save();

    const token = generateToken(newUser._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser.toJSON(),
    });
  } catch (error) {
    console.error("Registration error:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: messages.join(". ") });
    }

    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Server error during registration" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const validation = validateLogin(email, password);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message });
    }

    const user = await User.findByEmailWithPassword(email.toLowerCase().trim());
    if (!user || !user.isActive || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Login successful",
      user: user.toJSON(),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user: user.toJSON() });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};

export { register, login, getProfile };

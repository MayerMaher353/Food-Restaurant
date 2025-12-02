const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const generateToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

// Register new user (always as a normal user - role cannot be chosen from client)
// Validation is handled by middleware before this function
const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: "fail",
        message: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user (role defaults to "user" in schema)
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user", // Explicitly set to "user" for security
    });

    const token = generateToken(user._id, user.role);

    return res.status(201).json({
      status: "success",
      data: {
        token,
      },
    });
  } catch (error) {
    // Handle duplicate email error from MongoDB
    if (error.code === 11000) {
      return res.status(409).json({
        status: "fail",
        message: "Email already registered",
      });
    }
    return next(error);
  }
};

// Login user
// Validation is handled by middleware before this function
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user and include password field (since it's select: false by default)
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id, user.role);

    return res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

// Get current logged in user
const getMe = async (req, res) => {
  return res.status(200).json({
    status: "success",
    data: {
      user: req.user,
    },
  });
};

module.exports = {
  register,
  login,
  getMe,
};

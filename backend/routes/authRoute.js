const express = require("express");
const { register, login, getMe } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const validateBody = require("../middleware/validateBody");
const { registerSchema, loginSchema } = require("../validation/userValidation");

const router = express.Router();

// POST /api/v1/auth/register
router.post("/register", validateBody(registerSchema), register);

// POST /api/v1/auth/login
router.post("/login", validateBody(loginSchema), login);

// GET /api/v1/auth/me
router.get("/me", protect, getMe);

module.exports = router;

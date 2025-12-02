const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);

// Create contact validation
const createContactSchema = Joi.object({
  firstname: Joi.string().trim().min(2).max(50).required().messages({
    "string.empty": "First name is required",
    "string.min": "First name must be at least 2 characters long",
    "string.max": "First name must not exceed 50 characters",
  }),
  lastname: Joi.string().trim().min(2).max(50).required().messages({
    "string.empty": "Last name is required",
    "string.min": "Last name must be at least 2 characters long",
    "string.max": "Last name must not exceed 50 characters",
  }),
  phone: Joi.string()
    .trim()
    .pattern(/^(010|011|012|015)[0-9]{8}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base":
        "Phone number must be a valid Egyptian number (e.g., 010xxxxxxxx)",
    }),
  email: Joi.string().trim().email().optional().messages({
    "string.email": "Please provide a valid email address",
  }),
  message: Joi.string().trim().max(2000).required().messages({
    "string.empty": "Message is required",
    "string.max": "Message must not exceed 2000 characters",
  }),
});

// Update contact validation
const updateContactSchema = Joi.object({
  firstname: Joi.string().trim().min(2).max(50).messages({
    "string.min": "First name must be at least 2 characters long",
    "string.max": "First name must not exceed 50 characters",
  }),
  lastname: Joi.string().trim().min(2).max(50).messages({
    "string.min": "Last name must be at least 2 characters long",
    "string.max": "Last name must not exceed 50 characters",
  }),
  phone: Joi.string()
    .trim()
    .pattern(/^(010|011|012|015)[0-9]{8}$/)
    .messages({
      "string.pattern.base":
        "Phone number must be a valid Egyptian number (e.g., 010xxxxxxxx)",
    }),
  email: Joi.string().trim().email().messages({
    "string.email": "Please provide a valid email address",
  }),
  message: Joi.string().trim().max(2000).messages({
    "string.max": "Message must not exceed 2000 characters",
  }),
}).min(1);

// ID validation
const idParamSchema = Joi.object({
  id: JoiObjectId().required(),
});

module.exports = {
  createContactSchema,
  updateContactSchema,
  idParamSchema,
};

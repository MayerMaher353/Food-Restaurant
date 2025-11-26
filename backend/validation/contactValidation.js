const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);

// Create contact validation
const createContactSchema = Joi.object({
  firstname: Joi.string().trim().min(2).max(50).required(),
  lastname: Joi.string().trim().min(2).max(50).required(),
  phone: Joi.string()
    .trim()
    .pattern(/^(010|011|012|015)[0-9]{8}$/)
    .optional()
    .messages({
      "string.pattern.base":
        "Phone number must be a valid Egyptian number (e.g., 010xxxxxxxx)",
    }),
  email: Joi.string().trim().email().required(),
  message: Joi.string().trim().max(2000).optional(),
});

// Update contact validation
const updateContactSchema = Joi.object({
  firstname: Joi.string().trim().min(2).max(50),
  lastname: Joi.string().trim().min(2).max(50),
  phone: Joi.string()
    .trim()
    .pattern(/^(010|011|012|015)[0-9]{8}$/)
    .messages({
      "string.pattern.base":
        "Phone number must be a valid Egyptian number (e.g., 010xxxxxxxx)",
    }),
  email: Joi.string().trim().email(),
  message: Joi.string().trim().max(2000).required(),
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

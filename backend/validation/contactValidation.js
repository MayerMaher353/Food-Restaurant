const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);

// Create contact validation
const createReservationSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  phone: Joi.string()
    .trim()
    .pattern(/^(010|011|012|015)[0-9]{8}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be a valid Egyptian number (e.g., 010xxxxxxxx)",
    }),
  email: Joi.string().trim().email().optional(),
  date: Joi.date().iso().required(),
  time: Joi.string()
    .trim()
    .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .required()
    .messages({
      "string.pattern.base": "Time must be in HH:mm format (24-hour)",
    }),
  persons: Joi.number().min(1).max(20).required(), 
  message: Joi.string().trim().max(500).optional(), // الاسم نفس الـ model
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

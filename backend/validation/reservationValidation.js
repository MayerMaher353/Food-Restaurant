const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);

// Create reservation validation
const createReservationSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  phone: Joi.string()
    .trim()
    .pattern(/^(010|011|012|015)[0-9]{8}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Phone number must be a valid Egyptian number (e.g., 010xxxxxxxx)",
    }),
  email: Joi.string().trim().email().optional(),
  date: Joi.date().iso().required(),
  time: Joi.string()
    .trim()
    .pattern(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .messages({
      "string.pattern.base": "Time must be in HH:mm format (24-hour)",
    })
    .required(),
  persons: Joi.number().min(1).max(20).required(),
  message: Joi.string().trim().max(500).optional(),
});


// Update reservation validation
const updateReservationSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50),
  email: Joi.string().trim().email(),
  phone: Joi.string().trim().pattern(/^(010|011|012|015)[0-9]{8}$/),
  persons: Joi.number(),
  date: Joi.string(),
  time: Joi.string(),
  message: Joi.string().trim().max(2000),
}).min(1); 

// ID validation
const idParamSchema = Joi.object({
  id: JoiObjectId().required(),
});

module.exports = {
  createReservationSchema,
  updateReservationSchema,
  idParamSchema,
};

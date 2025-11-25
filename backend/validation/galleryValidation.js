const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);


// Create gallery validation
const createGallerySchema = Joi.object({
  category: Joi.string().trim().min(2).max(100).required(),
  title: Joi.string().trim().min(2).max(150).required(),
  description: Joi.string().trim().max(1000).allow("", null),
  image: Joi.string().trim().uri().optional().messages({
    "string.uri": "Image must be a valid URL",
  }),
});

// Update gallery validation
const updateGallerySchema = Joi.object({
  category: Joi.string().trim().min(2).max(100),
  title: Joi.string().trim().min(2).max(150),
  description: Joi.string().trim().max(1000).allow("", null),
  image: Joi.string().trim().uri().messages({
    "string.uri": "Image must be a valid URL",
  }),
}).min(1);

// ID validation
const idParamSchema = Joi.object({
  id: JoiObjectId().required(),
});

module.exports = {
  createGallerySchema,
  updateGallerySchema,
  idParamSchema,
};

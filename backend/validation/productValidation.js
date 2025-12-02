// validation/productValidation.js
const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);

// create product validation
const createProductSchema = Joi.object({
  name: Joi.string().trim().required(),
  price: Joi.number().positive().required(),
  originalPrice: Joi.number().positive().required(),
  tags: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string())
    .required(),
  category: Joi.string().trim().required(),
  image: Joi.string().optional(),
});

// update product validation
const updateProductSchema = Joi.object({
  name: Joi.string().trim(),
  price: Joi.number().positive(),
  originalPrice: Joi.number().positive(),
  tags: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.string()),
  category: Joi.string().trim(),
  image: Joi.string().optional(),
}).min(1);

// ID validation
const idParamSchema = Joi.object({
  id: JoiObjectId().required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  idParamSchema,
};

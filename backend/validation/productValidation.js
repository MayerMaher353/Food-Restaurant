// validation/productValidation.js
const Joi = require("joi");

// Schema لإضافة منتج جديد
const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  originalPrice: Joi.number().required(),
  tags: Joi.array().items(Joi.string()).required(),
  category: Joi.string().required(),
  image: Joi.string().required(),
});

// Schema لتعديل المنتج
const updateProductSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  originalPrice: Joi.number(),
  tags: Joi.array().items(Joi.string()),
  category: Joi.string(),
  image: Joi.string(),
});

module.exports = { createProductSchema, updateProductSchema };


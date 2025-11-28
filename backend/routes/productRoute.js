const express = require("express");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productControllers");
const upload = require("../config/cloudinary");
const { validateProduct } = require("../validation/productValidation");
const { uploadProductImage } = require("../middleware/uploadProductMiddleware");
const validateBody = require("../middleware/validateBody");
const { createProductSchema, updateProductSchema } = require("../validation/productValidation");


// Get all products
router.get("/", getProducts);

// Get single product
router.get("/:id", getProduct);

// Create product with image upload
router.post("/", uploadProductImage, validateBody(createProductSchema), createProduct);

// Update product with optional new image
router.patch("/:id", uploadProductImage, validateBody(updateProductSchema), updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

module.exports = router;

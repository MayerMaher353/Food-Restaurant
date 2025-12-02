const express = require("express");
const router = express.Router();

// controller functions
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

// image upload middleware
const { uploadProductImage } = require("../middleware/uploadProductMiddleware");

// validation middleware
const validateBody = require("../middleware/validateBody");
const validateParams = require("../middleware/validateParams");

// validation schemas
const {
  createProductSchema,
  updateProductSchema,
  idParamSchema,
} = require("../validation/productValidation");

const { protect, restrictTo } = require("../middleware/authMiddleware");

// Routes
router
  .route("/")
  .get(getProducts)
  .post(
    protect,
    restrictTo("admin"),
    uploadProductImage,
    validateBody(createProductSchema),
    createProduct
  );

router
  .route("/:id")
  .get(validateParams(idParamSchema), getProduct)
  .patch(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    uploadProductImage,
    validateBody(updateProductSchema),
    updateProduct
  )
  .delete(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    deleteProduct
  );

module.exports = router;

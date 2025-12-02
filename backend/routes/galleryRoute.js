const express = require("express");
const router = express.Router();

// controller functions
const {
  getGallery,
  getGalleryItem,
  createGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/galleryController");

// image upload middleware
const { uploadSingleImage } = require("../middleware/uploadMiddleware");

// validation middleware
const validateBody = require("../middleware/validateBody");
const validateParams = require("../middleware/validateParams");

// validation schemas
const {
  createGallerySchema,
  updateGallerySchema,
  idParamSchema,
} = require("../validation/galleryValidation");

const { protect, restrictTo } = require("../middleware/authMiddleware");

// Routes
router
  .route("/")
  .get(getGallery)
  .post(
    protect,
    restrictTo("admin"),
    uploadSingleImage,
    validateBody(createGallerySchema),
    createGallery
  );

router
  .route("/:id")
  .get(validateParams(idParamSchema), getGalleryItem)
  .patch(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    uploadSingleImage,
    validateBody(updateGallerySchema),
    updateGallery
  )
  .delete(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    deleteGallery
  );

module.exports = router;

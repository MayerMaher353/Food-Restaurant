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

// Routes
router
  .route("/")
  .get(getGallery)
  .post(uploadSingleImage, validateBody(createGallerySchema), createGallery);

router
  .route("/:id")
  .get(validateParams(idParamSchema), getGalleryItem)
  .patch(
    validateParams(idParamSchema),
    uploadSingleImage,
    validateBody(updateGallerySchema),
    updateGallery
  )
  .delete(validateParams(idParamSchema), deleteGallery);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getGallery,
  getGalleryItem,
  createGallery,
  updateGallery,
  deleteGallery,
} = require("../controllers/galleryController");


// Routes
router
  .route("/")
  .get(getGallery)
  .post(createGallery);

router
  .route("/:id")
  .get(getGalleryItem)
  .patch(updateGallery)
  .delete(deleteGallery);

  
module.exports = router;

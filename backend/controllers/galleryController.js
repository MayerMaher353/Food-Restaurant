const Gallery = require("../models/galleryModel");
const asyncHandler = require("express-async-handler");

// get all gallery items
exports.getGallery = asyncHandler(async (req, res) => {
  const items = await Gallery.find();
  res.status(200).json({
    status: "success",
    results: items.length,
    data: items,
  });
});

// create new gallery item
exports.createGallery = asyncHandler(async (req, res) => {
  const item = await Gallery.create(req.body);
  res.status(201).json({
    status: "success",
    data: item,
  });
});

// get specific gallery item
exports.getGalleryItem = asyncHandler(async (req, res) => {
  const item = await Gallery.findById(req.params.id);
  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Gallery item not found" });
  }
  res.status(200).json({
    status: "success",
    data: item,
  });
});

// Update gallery item
exports.updateGallery = asyncHandler(async (req, res) => {
  const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Gallery item not found" });
  }

  res.status(200).json({
    status: "success",
    data: item,
  });
});

// Delete gallery item
exports.deleteGallery = asyncHandler(async (req, res) => {
  const item = await Gallery.findByIdAndDelete(req.params.id);

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Gallery item not found" });
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});


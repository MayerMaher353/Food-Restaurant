const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// get all products
exports.getProducts = asyncHandler(async (req, res) => {
  const items = await Product.find();
  res.status(200).json({
    status: "success",
    results: items.length,
    data: items,
  });
});

const assignImagePath = (req) => {
  if (req.file && req.file.path) {
    req.body.image = req.file.path;
  }
};

// create new product
exports.createProduct = asyncHandler(async (req, res) => {
  assignImagePath(req);

  // Handle tags: convert string to array
  if (req.body.tags && typeof req.body.tags === "string") {
    try {
      req.body.tags = JSON.parse(req.body.tags);
    } catch {
      req.body.tags = req.body.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
  }
  const item = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: item,
  });
});

// get specific product
exports.getProduct = asyncHandler(async (req, res) => {
  const item = await Product.findById(req.params.id);
  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Product not found" });
  }
  res.status(200).json({
    status: "success",
    data: item,
  });
});

// Update product
exports.updateProduct = asyncHandler(async (req, res) => {
  assignImagePath(req);

  // Handle tags: convert string to array
  if (req.body.tags && typeof req.body.tags === "string") {
    req.body.tags = JSON.parse(req.body.tags);
  }

  const item = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Product not found" });
  }

  res.status(200).json({
    status: "success",
    data: item,
  });
});

// Delete product
exports.deleteProduct = asyncHandler(async (req, res) => {
  const item = await Product.findByIdAndDelete(req.params.id);

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Product not found" });
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});

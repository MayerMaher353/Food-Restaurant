const Product = require("../models/productModel");

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const { id, name, price, originalPrice, tags, category } = req.body;

    const product = await Product.create({
      id,
      name,
      price,
      originalPrice,
      tags: JSON.parse(tags),
      category,
      img: req.file.path
    });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { id, name, price, originalPrice, tags, category } = req.body;

    const updateData = {
      id,
      name,
      price,
      originalPrice,
      tags: JSON.parse(tags),
      category
    };

    if (req.file) updateData.img = req.file.path;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!product) return res.status(404).json({ message: "Not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

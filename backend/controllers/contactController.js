const Contact = require("../models/contactModel");
const asyncHandler = require("express-async-handler");

// Get all contact messages
exports.getContacts = asyncHandler(async (req, res) => {
  const items = await Contact.find();

  res.status(200).json({
    status: "success",
    results: items.length,
    data: items,
  });
});

// Create new contact message
exports.createContact = asyncHandler(async (req, res) => {
  const item = await Contact.create(req.body);

  res.status(201).json({
    status: "success",
    data: item,
  });
});

// Get specific contact message
exports.getContactItem = asyncHandler(async (req, res) => {
  const item = await Contact.findById(req.params.id);

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Contact message not found" });
  }

  res.status(200).json({
    status: "success",
    data: item,
  });
});

// Update contact message
exports.updateContact = asyncHandler(async (req, res) => {
  const item = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Contact message not found" });
  }

  res.status(200).json({
    status: "success",
    data: item,
  });
});

// Delete contact message
exports.deleteContact = asyncHandler(async (req, res) => {
  const item = await Contact.findByIdAndDelete(req.params.id);

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Contact message not found" });
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});
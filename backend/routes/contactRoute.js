const express = require("express");
const router = express.Router();

// Controller functions
const {
  getContacts,
  getContactItem,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// Validation middleware
const validateBody = require("../middleware/validateBody");
const validateParams = require("../middleware/validateParams");
const { protect, restrictTo } = require("../middleware/authMiddleware");

// Validation schemas
const {
  createContactSchema,
  updateContactSchema,
  idParamSchema,
} = require("../validation/contactValidation");

// Routes
// Public: Create contact message
router
  .route("/")
  .post(validateBody(createContactSchema), createContact)
  // Admin-only: Get all contact messages
  .get(protect, restrictTo("admin"), getContacts);

router
  .route("/:id")
  // Admin-only: Get specific contact message
  .get(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    getContactItem
  )
  // Admin-only: Update contact message
  .patch(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    validateBody(updateContactSchema),
    updateContact
  )
  // Admin-only: Delete contact message
  .delete(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    deleteContact
  );

module.exports = router;

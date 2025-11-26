const express = require("express");
const router = express.Router();

// controller functions
const {
  getContacts,
  getContactItem,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// validation middleware
const validateBody = require("../middleware/validateBody");
const validateParams = require("../middleware/validateParams");

// validation schemas
const {
  createContactSchema,
  updateContactSchema,
  idParamSchema,
} = require("../validation/contactValidation");

// Routes
router
  .route("/")
  .get(getContacts)
  .post(validateBody(createContactSchema), createContact);

router
  .route("/:id")
  .get(validateParams(idParamSchema), getContactItem)
  .patch(
    validateParams(idParamSchema),
    validateBody(updateContactSchema),
    updateContact
  )
  .delete(validateParams(idParamSchema), deleteContact);

module.exports = router;

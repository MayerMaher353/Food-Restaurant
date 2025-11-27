const express = require("express");
const router = express.Router();

// Controller functions
const {
  getReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationController");

// Validation middleware
const validateBody = require("../middleware/validateBody");
const validateParams = require("../middleware/validateParams");

// Validation schemas
const {
  createReservationSchema,
  updateReservationSchema,
  idParamSchema,
} = require("../validation/reservationValidation");

// Routes

router
  .route("/")
  .get(getReservations)
  .post(validateBody(createReservationSchema), createReservation);

router
  .route("/:id")
  .get(validateParams(idParamSchema), getReservationById)
  .patch(
    validateParams(idParamSchema),
    validateBody(updateReservationSchema),
    updateReservation
  )
  .delete(validateParams(idParamSchema), deleteReservation);

module.exports = router;

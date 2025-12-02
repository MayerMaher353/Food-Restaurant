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
const { protect, restrictTo } = require("../middleware/authMiddleware");

// Validation schemas
const {
  createReservationSchema,
  updateReservationSchema,
  idParamSchema,
} = require("../validation/reservationValidation");

// Routes
router
  .route("/")
  // Admin-only: Get all reservations
  .get(protect, restrictTo("admin"), getReservations)
  // Public: Create reservation (customers can book tables)
  .post(validateBody(createReservationSchema), createReservation);

router
  .route("/:id")
  // Admin-only: Get specific reservation
  .get(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    getReservationById
  )
  // Admin-only: Update reservation
  .patch(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    validateBody(updateReservationSchema),
    updateReservation
  )
  // Admin-only: Delete reservation
  .delete(
    protect,
    restrictTo("admin"),
    validateParams(idParamSchema),
    deleteReservation
  );

module.exports = router;

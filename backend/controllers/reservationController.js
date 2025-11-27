const Reservation = require("../models/reservationModel");
const asyncHandler = require("express-async-handler");

// ========== Get all reservations ==========
exports.getReservations = asyncHandler(async (req, res) => {
  const items = await Reservation.find();

  res.status(200).json({
    status: "success",
    results: items.length,
    data: items,
  });
});

// ========== Create a new reservation ==========
exports.createReservation = asyncHandler(async (req, res) => {
  const item = await Reservation.create(req.body);

  res.status(201).json({
    status: "success",
    data: item,
  });
});

// ========== Get reservation by ID ==========
exports.getReservationById = asyncHandler(async (req, res) => {
  const item = await Reservation.findById(req.params.id);

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Reservation not found" });
  }

  res.status(200).json({
    status: "success",
    data: item,
  });
});

// ========== Update reservation ==========
exports.updateReservation = asyncHandler(async (req, res) => {
  const item = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Reservation not found" });
  }

  res.status(200).json({
    status: "success",
    data: item,
  });
});

// ========== Delete reservation ==========
exports.deleteReservation = asyncHandler(async (req, res) => {
  const item = await Reservation.findByIdAndDelete(req.params.id);

  if (!item) {
    return res
      .status(404)
      .json({ status: "fail", message: "Reservation not found" });
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});

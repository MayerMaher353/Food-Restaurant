const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {
  console.log("Received data:", req.body); 
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json({
      success: true,
      reservation,
    });
  } catch (err) {
    console.error("Error creating reservation:", err.message);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

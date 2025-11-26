const express = require("express");
const router = express.Router();
const { createReservation } = require("../controllers/reservationController");

router.post("/", createReservation); 
router.get("/", async (req, res) => {
  res.json({ message: "Reservations route works" });
});

module.exports = router;

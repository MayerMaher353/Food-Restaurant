const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const errorHandler = require("./middleware/errorHandler");

// Routes
const galleryRoutes = require("./routes/galleryRoute");
const contactRoutes = require("./routes/contactRoute");
const reservationRoutes = require("./routes/reservationRoute");
const productRoutes = require("./routes/productRoute");
const authRoutes = require("./routes/authRoute");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/reservations", reservationRoutes);
app.use("/api/v1/gallery", galleryRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/products", productRoutes);

// Handle 404
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Global error handler
app.use(errorHandler);

// Listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});

const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const errorHandler = require("./middleware/errorHandler");

// routes
const galleryRoutes = require("./routes/galleryRoute");

const app = express();

// connect to database
connectDB();

// middleware to parse json
app.use(express.json());

// static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/api/v1/gallery", galleryRoutes);

// Handle 404 - must be after all routes
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Global error handler middleware - must be last
app.use(errorHandler);

// listen to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});

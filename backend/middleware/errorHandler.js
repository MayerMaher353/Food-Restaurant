const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Server Error";

  // Development: Show full error
  if (process.env.NODE_ENV === "development") {
    return res.status(statusCode).json({
      status: "error",
      message,
      error: err,
      stack: err.stack,
    });
  }

  // Mongoose CastError (wrong ObjectId)
  if (err.name === "CastError") {
    statusCode = 404;
    message = `Invalid ID: ${err.value}`;
  }

  // Duplicate key
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    message = `Duplicate ${field}, please use another value`;
  }

  // Validation errors
  if (err.name === "ValidationError") {
    statusCode = 400;
    const errors = Object.values(err.errors).map((e) => e.message);
    message = `Validation error: ${errors.join(", ")}`;
    return res.status(statusCode).json({
      status: "fail",
      message,
      errors,
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired";
  }

  // Multer errors
  if (err.name === "MulterError") {
    statusCode = 400;
    message =
      err.code === "LIMIT_FILE_SIZE"
        ? "File too large"
        : err.code === "LIMIT_FILE_COUNT"
        ? "Too many files"
        : "File upload error";
  }

  res.status(statusCode).json({
    status: statusCode >= 400 && statusCode < 500 ? "fail" : "error",
    message,
  });
};

module.exports = errorHandler;

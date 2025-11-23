const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const config = require('config');
const mongoose = require("mongoose");



const express = require("express");
const app = express();
app.use(express.json());


/****************************************************/
// Fix strictQuery deprecation warning

// mongoose.set("strictQuery", false);
// mongoose
//   .connect(
//     "",
//     {
//       serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
//     }
//   )
//   .then(() => {
//     console.log("Connected to MongoDB...");
//   })
//   .catch((err) => console.error("Could not connect to MongoDB...", err));
/*****************************************************/
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
/**************************************************************************************************/



// Environment Variables:
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});



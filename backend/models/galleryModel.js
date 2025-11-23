const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
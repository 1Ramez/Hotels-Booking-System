const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        starRating: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
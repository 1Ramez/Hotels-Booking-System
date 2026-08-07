const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        hotelId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required: true,
        },
        roomNumber: {
            type: Number,
            required: true,
        },
        roomType: {
            type: String,
            required: true,
        },
        pricePerNight: {
            type: Number,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        isAvailable: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
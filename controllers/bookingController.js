const Booking = require("../models/Booking");

async function createBooking(req, res) {
    try {
        let booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function getBookings(req, res) {
    try {
        let bookings = await Booking.find().populate("userId").populate("roomId");
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function getBookingById(req, res) {
    try {
        let booking = await Booking.findById(req.params.id).populate("userId").populate("roomId");
        if (!booking) {
            res.status(404).json({
                message: "Booking not found",
            });
            return;
        }
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function updateBooking(req, res) {
    try {
        let booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!booking) {
            res.status(404).json({
                message: "Booking not found",
            });
            return;
        }
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function deleteBooking(req, res) {
    try {
        let booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            res.status(404).json({
                message: "Booking not found",
            });
            return;
        }
        res.status(200).json({
            message: "Booking deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
};

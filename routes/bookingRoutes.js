const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authMiddleware");

const { createBooking, getBookings, getBookingById, updateBooking, deleteBooking } = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/", authenticate, getBookings);
router.get("/:id", getBookingById);
router.patch("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;

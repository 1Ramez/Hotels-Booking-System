const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authMiddleware")
const isAdmin = require("../middlewares/adminMiddleware")

const { createHotel, getHotels, getHotelById, updateHotel, deleteHotel } = require("../controllers/hotelController");

router.post("/", authenticate, isAdmin, createHotel);
router.get("/", getHotels);
router.get("/:id", getHotelById);
router.patch("/:id", authenticate, isAdmin, updateHotel);
router.delete("/:id", authenticate, isAdmin, deleteHotel);

module.exports = router;

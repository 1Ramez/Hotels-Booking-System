const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authMiddleware")
const isAdmin = require("../middlewares/adminMiddleware")

const { createRoom, getRooms, getRoomById, updateRoom, deleteRoom } = require("../controllers/roomController");

router.post("/", authenticate, isAdmin, createRoom);
router.get("/", getRooms);
router.get("/:id", getRoomById);
router.patch("/:id", authenticate, isAdmin, updateRoom);
router.delete("/:id", authenticate, isAdmin, deleteRoom);

module.exports = router;
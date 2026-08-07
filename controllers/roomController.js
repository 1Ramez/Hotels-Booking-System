const Room = require("../models/Room");

async function createRoom(req, res) {
    try {
        let room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
async function getRooms(req, res) {
    try {
        let rooms = await Room.find().populate("hotelId");
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function getRoomById(req, res) {
    try {
        let room = await Room.findById(req.params.id).populate("hotelId");
        if (!room) {
            res.status(404).json({
                message: "Room not found",
            });
            return;
        }
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function updateRoom(req, res) {
    try {
        let room = await Room.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!room) {
            res.status(404).json({
                message: "Room not found",
            });
            return;
        }
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function deleteRoom(req, res) {
    try {
        let room = await Room.findByIdAndDelete(req.params.id);
        if (!room) {
            res.status(404).json({
                message: "Room not found",
            });
            return;
        }
        res.status(200).json({
            message: "Room deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = {
    createRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
};

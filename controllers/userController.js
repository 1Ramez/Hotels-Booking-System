const User = require("../models/User");

async function createUser(req, res) {
    try {
        let user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
async function getUsers(req, res) {
    try {
        let users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function getUserById(req, res) {
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function updateUser(req, res) {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function deleteUser(req, res) {
    try {
        let user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }
        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};

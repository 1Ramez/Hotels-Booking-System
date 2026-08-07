const Hotel = require("../models/Hotel.js");

async function createHotel(req, res) {
    try {
        let hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function getHotels(req, res) {
    try {
        let { search, city, starRating, sort, page, limit } = req.query;

        let query = {};

        if (search)
            query.name = {
                $regex: search,
                $options: "i",
            };

        if (city) query.city = city;
        if (starRating) query.starRating = +starRating;

        let currPage = 1;
        let currLimit = 10;
        if (page) currPage = +page;
        if (limit) currLimit = +limit;
        if (currPage < 1) currPage = 1;
        if (currLimit < 1) currLimit = 10;

        let hotels = await Hotel.find(query)
            .sort(sort || "")
            .skip((currPage - 1) * currLimit)
            .limit(currLimit);

        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function getHotelById(req, res) {
    try {
        let hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            res.status(404).json({
                message: "Hotel not found",
            });
            return;
        }
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function updateHotel(req, res) {
    try {
        let hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!hotel) {
            res.status(404).json({
                message: "Hotel not found",
            });
            return;
        }

        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

async function deleteHotel(req, res) {
    try {
        let hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            res.status(404).json({
                message: "Hotel not found",
            });
            return;
        }
        res.status(200).json({
            message: "Hotel deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = {
    createHotel,
    getHotels,
    getHotelById,
    updateHotel,
    deleteHotel,
};

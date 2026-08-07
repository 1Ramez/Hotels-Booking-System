const express = require("express");
const app = express();

const hotelRoutes = require("./routes/hotelRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const roomRoutes = require("./routes/roomRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes.js");

app.use(express.json());
app.use(express.urlencoded());

app.use("/hotels", hotelRoutes);
app.use("/users", userRoutes);
app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);

module.exports = app;

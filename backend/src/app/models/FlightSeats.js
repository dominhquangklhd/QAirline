// models/flightSeat.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSeatSchema = new Schema({
  flight: {
    type: Schema.Types.ObjectId,
    ref: "Flight",
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  seatClass: {
    type: String,
    enum: ["economy", "business", "first"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ["available", "reserved", "occupied"],
    default: "available",
  },
});

// Compound index for unique seat numbers per flight
flightSeatSchema.index({ flight: 1, seatNumber: 1 }, { unique: true });

module.exports = mongoose.model("FlightSeat", flightSeatSchema, "FlightSeats");

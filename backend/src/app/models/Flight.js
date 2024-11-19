// models/flight.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  aircraft: {
    type: Schema.Types.ObjectId,
    ref: "Aircraft",
    required: true,
  },
  originAirport: {
    type: Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  destinationAirport: {
    type: Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  scheduledDeparture: {
    type: Date,
    required: true,
  },
  scheduledArrival: {
    type: Date,
    required: true,
  },
  actualDeparture: Date,
  actualArrival: Date,
  status: {
    type: String,
    enum: [
      "scheduled",
      "delayed",
      "boarding",
      "departed",
      "arrived",
      "cancelled",
    ],
    default: "scheduled",
  },
  basePrice: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Indexes for flight search
flightSchema.index({ flightNumber: 1 });
flightSchema.index({
  originAirport: 1,
  destinationAirport: 1,
  scheduledDeparture: 1,
});

module.exports = mongoose.model("Flights", flightSchema, "Flights");

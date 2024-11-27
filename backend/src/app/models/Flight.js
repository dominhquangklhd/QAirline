// models/flight.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flight_number: {
    type: String,
    required: true,
  },
  origin_airport_id: {
    type: Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  destination_airport_id: {
    type: Schema.Types.ObjectId,
    ref: "Airport",
    required: true,
  },
  scheduled_departure: {
    type: Date,
    required: true,
  },
  scheduled_arrival: {
    type: Date,
    required: true,
  },
  actual_departure: Date,
  actual_arrival: Date,
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
  base_price: {
    type: Number,
    required: true,
    min: 0,
  },
});
// Indexes for flight search
// flightSchema.index({ flightNumber: 1 });
// flightSchema.index({
//   originAirportId: 1,
//   destinationAirportId: 1,
//   scheduledDeparture: 1,
// });

module.exports = mongoose.model("Flights", flightSchema, "Flights");

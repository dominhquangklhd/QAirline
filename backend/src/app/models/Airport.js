// models/airport.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const airportSchema = new Schema({
  airportCode: {
    type: String,
    required: true,
    unique: true,
  },
  airportName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Airport", airportSchema, "AirPorts");

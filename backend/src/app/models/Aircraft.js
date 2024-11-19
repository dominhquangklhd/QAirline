// models/aircraft.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aircraftSchema = new Schema({
  aircraftCode: {
    type: String,
    required: true,
    unique: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
    min: 1,
  },
  manufactureDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Aircraft", aircraftSchema, "Aircrafts");

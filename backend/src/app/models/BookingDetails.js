// models/bookingDetail.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingDetailSchema = new Schema({
  booking: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },
  flightSeat: {
    type: Schema.Types.ObjectId,
    ref: "FlightSeat",
    required: true,
  },
  passengerName: {
    type: String,
    required: true,
  },
  passengerIdNumber: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model(
  "BookingDetail",
  bookingDetailSchema,
  "BookingDetails"
);

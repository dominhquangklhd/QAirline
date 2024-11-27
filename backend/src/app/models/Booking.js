// models/booking.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    flight_id: {
      type: Schema.Types.ObjectId,
      ref: "Flights",
      required: true,
    },
    booking_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed",
    },
    total_amount: {
      type: Number,
      required: true,
    },
    cancellation_deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// Index for user's bookings
bookingSchema.index({ user: 1, flight: 1 });

module.exports = mongoose.model("Booking", bookingSchema, "Bookings");

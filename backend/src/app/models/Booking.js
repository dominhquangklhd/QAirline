// models/booking.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    flight: {
      type: Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    cancellationDeadline: {
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

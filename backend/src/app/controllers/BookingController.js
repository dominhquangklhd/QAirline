// controllers/BookingController.js
const Booking = require("../models/Booking");
const Flight = require("../models/Flight");

class BookingController {
  // Customer: Create booking
  async createBooking(req, res) {
    const { flightId, passengers } = req.body;
    try {
      const flight = await Flight.findById(flightId);
      if (!flight) {
        return res.status(404).json({ message: "Flight not found" });
      }

      const booking = new Booking({
        user: req.user.id,
        flight: flightId,
        passengers,
        status: "CONFIRMED",
        bookingDate: new Date(),
        cancellationDeadline: new Date(
          flight.scheduledDeparture.getTime() - 24 * 60 * 60 * 1000
        ),
      });

      await booking.save();
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Customer: Cancel booking
  async cancelBooking(req, res) {
    const { bookingId } = req.params;
    try {
      const booking = await Booking.findById(bookingId);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      if (booking.user.toString() !== req.user.id) {
        return res.status(403).json({ message: "Not authorized" });
      }

      if (new Date() > booking.cancellationDeadline) {
        return res
          .status(400)
          .json({ message: "Cancellation deadline passed" });
      }

      booking.status = "CANCELLED";
      await booking.save();
      res.json({ message: "Booking cancelled successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Customer: View my bookings
  async getMyBookings(req, res) {
    try {
      const bookings = await Booking.find({ user: req.user.id }).populate({
        path: "flight",
        populate: ["aircraft", "originAirport", "destinationAirport"],
      });
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new BookingController();

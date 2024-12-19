// controllers/AdminController.js
const Post = require("../models/Post");
const Aircraft = require("../models/Aircraft");
// const Flight = require("../models/Flight");
const Booking = require("../models/Booking");

class AdminController {
  // Admin: Create airline information post
  async createPost(req, res) {
    try {
      const { title, subtitle, content, imageBase64 } = req.body;

      if (!imageBase64.startsWith("data:image")) {
        return res.status(400).json({
          success: false,
          error: "Invalid image format",
        });
      }
      const post = new Post({
        title,
        subtitle,
        content,
        imageBase64,
      });
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message + "cant create post" });
    }
  }

  // Admin: Create aircraft
  async createAircraft(req, res) {
    const { aircraftCode, manufacturer, model, totalSeats, seatMap } = req.body;
    try {
      const aircraft = new Aircraft({
        aircraftCode,
        manufacturer,
        model,
        totalSeats,
        seatMap,
      });
      await aircraft.save();
      res.status(201).json(aircraft);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Admin: Create flight
  async createFlight(req, res) {
    const {
      flightNumber,
      aircraftId,
      originId,
      destinationId,
      scheduledDeparture,
      scheduledArrival,
      basePrice,
    } = req.body;
    try {
      const flight = new Flight({
        flightNumber,
        aircraft: aircraftId,
        originAirport: originId,
        destinationAirport: destinationId,
        scheduledDeparture,
        scheduledArrival,
        basePrice,
      });
      await flight.save();
      res.status(201).json(flight);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Admin: Update flight time (delay)
  async updateFlightTime(req, res) {
    const { flightId } = req.params;
    const { newDepartureTime } = req.body;
    try {
      const flight = await Flight.findById(flightId);
      if (!flight) {
        return res.status(404).json({ message: "Flight not found" });
      }

      flight.scheduledDeparture = newDepartureTime;
      await flight.save();
      res.json(flight);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Admin: View booking statistics
  async getBookingStatistics(req, res) {
    try {
      const stats = await Booking.aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
          },
        },
      ]);
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AdminController();

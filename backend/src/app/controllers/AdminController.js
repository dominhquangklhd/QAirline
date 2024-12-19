// controllers/AdminController.js
const Post = require("../models/Post");
const Aircraft = require("../models/Aircraft");
// const Flight = require("../models/Flight");
const Booking = require("../models/Booking");

class AdminController {
  async getPosts(req, res) {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  // Admin: Create airline information post
  async createPost(req, res) {
    try {
      const { title, subtitle, content, cover_url } = req.body;

      if (!cover_url.startsWith("data:image")) {
        return res.status(400).json({
          success: false,
          error: "Invalid image format",
        });
      }
      const post = new Post({
        title,
        subtitle,
        content,
        cover_url,
      });
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message + "cant create post" });
    }
  }

  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const { title, subtitle, content, cover_url } = req.body;

      if (cover_url && !cover_url.startsWith("data:image")) {
        return res.status(400).json({
          success: false,
          error: "Invalid image format",
        });
      }

      const post = await Post.findByIdAndUpdate(
        id,
        { title, subtitle, content, cover_url },
        { new: true }
      );

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Delete post
  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Admin: Create aircraft
  async createAircraft(req, res) {
    const {
      aircraft_code,
      manufacturer,
      model,
      total_seats,
      manufacture_date,
    } = req.body;
    try {
      const aircraft = new Aircraft({
        aircraft_code,
        manufacturer,
        model,
        total_seats,
        manufacture_date,
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

  async getAllAircraft(req, res) {
    try {
      const aircraft = await Aircraft.find().sort({ aircraftCode: 1 });
      res.json(aircraft);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Admin: Update aircraft
  async updateAircraft(req, res) {
    try {
      const { id } = req.params;
      const {
        aircraft_code,
        manufacturer,
        model,
        total_seats,
        manufacture_date,
      } = req.body;

      const aircraft = await Aircraft.findByIdAndUpdate(
        id,
        {
          aircraft_code,
          manufacturer,
          model,
          total_seats,
          manufacture_date,
        },
        { new: true }
      );

      if (!aircraft) {
        return res.status(404).json({ message: "Aircraft not found" });
      }

      res.json(aircraft);
    } catch (error) {
      res.status(500).json({
        message: error.message,
        error: "Error updating aircraft information",
      });
    }
  }

  // Admin: Delete aircraft
  async deleteAircraft(req, res) {
    try {
      const { id } = req.params;

      console.log(req.params);
      // Kiểm tra xem tàu bay có đang được sử dụng trong chuyến bay nào không
      // const hasFlights = await Aircraft.exists({ aircraft: _id });
      // if (hasFlights) {
      //   return res.status(400).json({
      //     message: "Cannot delete aircraft that is associated with flights",
      //   });
      // }

      const aircraft = await Aircraft.findByIdAndDelete(id);

      if (!aircraft) {
        return res.status(404).json({ message: "Aircraft not found" });
      }

      res.json({
        message: "Aircraft deleted successfully",
        deleted_aircraft: aircraft,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        error: "Error deleting aircraft",
      });
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

// controllers/FlightController.js
const Flight = require("../models/Flight");

class FlightController {
  async getAllFlights(req, res) {
    try {
      console.log("Fetching flights from database...");

      const flights = await Flight.find()
        .populate("aircraft", "aircraftCode manufacturer model")
        .populate("originAirport", "airportCode airportName city")
        .populate("destinationAirport", "airportCode airportName city")
        .lean();

      console.log("Found flights:", flights.length);
      console.log("Data flights:", JSON.stringify(flights, null, 2));
      if (!flights.length) {
        return res.status(404).json({
          message: "Không tìm thấy chuyến bay nào trong database",
        });
      }

      res.json(flights);
    } catch (error) {
      console.error("Error fetching flights:", error);
      res.status(500).json({ message: error.message });
    }
  }

  async searchFlights(req, res) {
    try {
      const { origin, destination, date } = req.query;

      const query = {};
      if (origin) query.originAirport = origin;
      if (destination) query.destinationAirport = destination;
      if (date) {
        const searchDate = new Date(date);
        query.scheduledDeparture = {
          $gte: searchDate,
          $lt: new Date(searchDate.setDate(searchDate.getDate() + 1)),
        };
      }

      const flights = await Flight.find(query)
        .populate("aircraft")
        .populate("originAirport")
        .populate("destinationAirport")
        .lean();

      res.json(flights);
    } catch (error) {
      console.error("Error searching flights:", error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new FlightController();

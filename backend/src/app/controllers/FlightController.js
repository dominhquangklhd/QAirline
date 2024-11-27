const Flight = require("../models/flight");
const Airport = require("../models/airport");

class FlightController {
  async getAllFlights(req, res) {
    try {
      console.log("Fetching flights from database...");

      const flights = await Flight.find()
        .populate({
          path: "origin_airport_id",
          select: "airport_code airport_name city", // Lấy các trường cần thiết từ Airport
        })
        .populate({
          path: "destination_airport_id",
          select: "airport_code airport_name city", // Lấy các trường cần thiết từ Airport
        })
        .lean();

      console.log("Found flights:", flights.length);
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

      // Kiểm tra nếu thiếu các tham số cần thiết
      if (!origin || !destination) {
        return res.status(400).json({
          message: "Cần cung cấp mã sân bay xuất phát và mã sân bay đến",
        });
      }

      // Tìm ObjectId của sân bay xuất phát và đến dựa trên airportCode
      const originAirport = await Airport.findOne({ airport_code: origin });
      if (!originAirport) {
        return res.status(404).json({
          message: "Không tìm thấy sân bay xuất phát " + originAirport,
        });
      }
      const originAirportId = originAirport._id;

      const destinationAirport = await Airport.findOne({
        airport_code: destination,
      });
      if (!destinationAirport) {
        return res.status(404).json({
          message: "Không tìm thấy sân bay đến",
        });
      }
      const destinationAirportId = destinationAirport._id;

      // Xây dựng query tìm kiếm
      const query = {
        origin_airport_id: originAirportId,
        destination_airport_id: destinationAirportId,
      };

      // Kiểm tra ngày đi (date) và tạo phạm vi ngày tìm kiếm
      if (date) {
        const searchDate = new Date(date);
        searchDate.setHours(0, 0, 0, 0);
        const nextDay = new Date(searchDate);
        nextDay.setDate(nextDay.getDate() + 1);

        query.scheduledDeparture = {
          $gte: searchDate, // Chuyến bay phải có giờ khởi hành lớn hơn hoặc bằng ngày tìm kiếm
          $lt: nextDay, // Và nhỏ hơn ngày tiếp theo
        };
      }

      // Tìm chuyến bay với điều kiện truy vấn
      const flights = await Flight.find(query)
        .populate({
          path: "origin_airport_id",
          select: "airport_code airport_name city", // Lấy các trường cần thiết từ Airport
        })
        .populate({
          path: "destination_airport_id",
          select: "airport_code airport_name city", // Lấy các trường cần thiết từ Airport
        })
        .lean();

      if (!flights.length) {
        return res.status(404).json({
          message:
            "Không tìm thấy chuyến bay nào phù hợp với tiêu chí tìm kiếm " +
            query.origin_airport_id +
            " -> " +
            query.destination_airport_id,
        });
      }

      res.json(flights);
    } catch (error) {
      console.error("Error searching flights:", error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new FlightController();

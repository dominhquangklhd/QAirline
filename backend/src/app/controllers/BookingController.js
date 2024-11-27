// const { default: mongoose } = require("mongoose");
const Booking = require("../models/Booking");
const Flight = require("../models/flight");

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

class BookingController {
  // Customer: Create booking
  async createBooking(req, res) {
    const { flightId, customer_info, total_amount } = req.body;

    try {
      // Tìm chuyến bay theo flightId
      const flight = await Flight.findById(flightId);
      if (!flight) {
        return res.status(404).json({ message: "Flight not found" });
      }

      // Kiểm tra giá vé và thời gian khởi hành
      const ticketPrice = flight.base_price;
      if (total_amount !== ticketPrice) {
        return res.status(400).json({ message: "Incorrect ticket price" });
      }

      // Tạo booking mới
      const booking = new Booking({
        customer_info,
        flight_id: flightId,
        total_amount,
        status: "confirmed",
        booking_date: new Date(),
        cancellation_deadline: new Date(
          flight.scheduled_departure.getTime() - 24 * 60 * 60 * 1000
        ),
      });

      // Lưu booking và trả về phản hồi
      await booking.save();
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: error.message + " Lỗi ở createBooking" });
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

      // Kiểm tra thời hạn hủy vé
      if (new Date() > booking.cancellation_deadline) {
        return res
          .status(400)
          .json({ message: "Cancellation deadline passed" });
      }

      // Cập nhật trạng thái booking thành "cancelled"
      booking.status = "cancelled";
      await booking.save();
      res.json({ message: "Booking cancelled successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Customer: View booking details
  async getBookingDetails(req, res) {
    const { bookingId } = req.params;
    try {
      const booking = await Booking.findById(bookingId).populate("flight_id");
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      res
        .status(500)
        .json({ message: error.message + " Lỗi ở getBookingDetails" });
    }
  }

  async getAllBookings(req, res) {
    try {
      const bookings = await Booking.find(); //.populate("flight_id");
      if (!bookings || bookings.length === 0) {
        return res.status(404).json({ message: "No bookings found" });
      }
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new BookingController();

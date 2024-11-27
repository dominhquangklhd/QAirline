const router = require("express").Router();
const BookingController = require("../app/controllers/BookingController");
const {
  validateBooking,
  checkCancellationDeadline,
} = require("../app/middleware/authMiddleware");

// Customer: Create booking
router
  .route("/")
  .post(BookingController.createBooking)
  .get(BookingController.getAllBookings);

// Customer: Get booking details
router
  .route("/:bookingId")
  .get(validateBooking, BookingController.getBookingDetails);

// Customer: Cancel booking
router
  .route("/:bookingId/cancel")
  .patch(
    validateBooking,
    checkCancellationDeadline,
    BookingController.cancelBooking
  );

module.exports = router;

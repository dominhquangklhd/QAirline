// routes/bookingRoutes.js
const router = require("express").Router();
const BookingController = require("../app/controllers/BookingController");
const {
  verifyToken,
  isCustomer,
  validateBooking,
  checkCancellationDeadline,
} = require("../app/middleware/authMiddleware");

router.use(verifyToken); // Áp dụng cho tất cả routes

router
  .route("/")
  .get(isCustomer, BookingController.getMyBookings)
  .post(isCustomer, BookingController.createBooking);

router
  .route("/:bookingId")
  .get(validateBooking, BookingController.getMyBookings)
  .put(
    validateBooking,
    checkCancellationDeadline,
    BookingController.cancelBooking
  );

module.exports = router;

const express = require("express");
const router = express.Router();
const bookingController = require("../app/controllers/BookingController");
const {
  verifyToken,
  isAdmin,
  isCustomer,
  validateBooking,
  checkCancellationDeadline,
  apiLimiter,
} = require("../app/middleware/authMiddleware");

// Public routes (không cần đăng nhập)
router.post("/createBooking", apiLimiter, bookingController.createBooking); // Đặt vé cho khách vãng lai
router.get(
  "/searchBooking",
  apiLimiter,
  bookingController.getBookingByReference
); // Tra cứu booking bằng ID và email

router.patch("/:bookingId/cancel", apiLimiter, bookingController.cancelBooking); // Hủy vé cho khách vãng lai

// Routes cho user đã đăng nhập
router.use("/user", verifyToken, isCustomer); // Middleware cho tất cả routes /user
router.get("/user/getBooking", bookingController.getUserBookings); // Xem lịch sử đặt vé
router.post("/user/createBooking", bookingController.createBooking); // Đặt vé với tài khoản
// router.get(
//   "/user/bookings/:bookingId",
//   validateBooking,
//   bookingController.getBookingDetails
// ); // Xem chi tiết booking
router.post(
  "/user/:bookingId/cancel",
  validateBooking,
  checkCancellationDeadline,
  bookingController.cancelBooking
); // Hủy vé

// Routes cho admin
router.use("/admin", verifyToken, isAdmin); // Middleware cho tất cả routes /admin
// router.get("/admin/bookings", bookingController.getAllBookings); // Xem tất cả bookings
// router.get(
//   "/admin/bookings/:bookingId",
//   validateBooking,
//   bookingController.getBookingDetails
// ); // Xem chi tiết booking
router.put(
  "/admin/:bookingId",
  validateBooking,
  bookingController.updateBooking
); // Cập nhật booking
// router.delete(
//   "/admin/bookings/:bookingId",
//   validateBooking,
//   bookingController.deleteBooking
// ); // Xóa booking

module.exports = router;

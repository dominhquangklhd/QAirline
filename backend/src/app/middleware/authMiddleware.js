// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

// Xác thực token
const verifyToken = (req, res, next) => {
  // const token = req.headers.authorization?.split(" ")[1];
  // if (!token) {
  //   return res.status(401).json({ message: "Không có token xác thực" });
  // }
  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = decoded;
  next();
  // } catch (err) {
  //   return res.status(401).json({ message: "Token không hợp lệ" });
  // }
};

// Kiểm tra quyền admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Yêu cầu quyền admin" });
  }
};

// Kiểm tra quyền customer
const isCustomer = (req, res, next) => {
  // if (req.user && req.user.role === "customer") {
  next();
  // } else {
  //   res.status(403).json({ message: "Yêu cầu quyền customer" });
  // }
};

// Kiểm tra booking hợp lệ
const validateBooking = async (req, res, next) => {
  // try {
  //   const booking = await Booking.findById(req.params.bookingId);
  //   if (!booking) {
  //     return res.status(404).json({ message: "Không tìm thấy booking" });
  //   }
  //   if (booking.user.toString() !== req.user.id && req.user.role !== "admin") {
  //     return res
  //       .status(403)
  //       .json({ message: "Không có quyền truy cập booking này" });
  //   }
  //   req.booking = booking;
  next();
  // } catch (err) {
  //   res.status(500).json({ message: err.message });
  // }
};

// Kiểm tra thời hạn hủy vé
const checkCancellationDeadline = async (req, res, next) => {
  // try {
  //   const booking = req.booking;
  //   const flight = await Flight.findById(booking.flight);

  //   // Kiểm tra thời hạn hủy (24h trước giờ khởi hành)
  //   const cancellationDeadline = new Date(flight.scheduledDeparture);
  //   cancellationDeadline.setHours(cancellationDeadline.getHours() - 24);

  //   if (new Date() > cancellationDeadline) {
  //     return res
  //       .status(400)
  //       .json({ message: "Đã quá thời hạn hủy vé (24h trước giờ khởi hành)" });
  //   }
  next();
  // } catch (err) {
  //   res.status(500).json({ message: err.message });
  // }
};

// Giới hạn request
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 100, // Giới hạn mỗi IP
  message: "Quá nhiều request, vui lòng thử lại sau",
});

// Xử lý lỗi
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Có lỗi xảy ra",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
};

module.exports = {
  verifyToken,
  isAdmin,
  isCustomer,
  validateBooking,
  checkCancellationDeadline,
  apiLimiter,
  errorHandler,
};

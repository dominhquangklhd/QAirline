// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const {
  apiLimiter,
  errorHandler,
} = require("./src/app/middleware/authMiddleware");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const authRoutes = require("./src/routes/authRoutes");
const flightRoutes = require("./src/routes/flightRoutes");
const bookingRoutes = require("./src/routes/bookingRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const connectDB = require("./src/config/db");

// Global Middleware
app.use(helmet()); // Bảo mật HTTP headers
app.use(morgan("dev")); // Logging

app.use(express.json({ limit: "10kb" })); // Giới hạn kích thước body
app.use(apiLimiter); // Rate limiting

// Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

// Error Handlers
app.use(errorHandler);
app.use((req, res) => {
  res.status(404).json({ message: "Route không tồn tại" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Đang tắt server...");
  console.log(err.name, err.message);
  process.exit(1);
});

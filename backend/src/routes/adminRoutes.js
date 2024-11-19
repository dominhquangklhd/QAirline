// routes/adminRoutes.js
const router = require("express").Router();
const AdminController = require("../app/controllers/AdminController");
const { verifyToken, isAdmin } = require("../app/middleware/authMiddleware");

router.use(verifyToken);
router.use(isAdmin);

router.post("/posts", AdminController.createPost);
router.post("/aircraft", AdminController.createAircraft);
router.post("/flights", AdminController.createFlight);
router.put("/flights/:flightId/delay", AdminController.updateFlightTime);
router.get("/bookings/statistics", AdminController.getBookingStatistics);

module.exports = router;

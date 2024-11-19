// routes/flightRoutes.js
const router = require("express").Router();
const FlightController = require("../app/controllers/FlightController");

router.get("/", FlightController.getAllFlights);
router.get("/search", FlightController.searchFlights);

module.exports = router;

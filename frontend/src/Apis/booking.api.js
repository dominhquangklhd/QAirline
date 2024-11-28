import http from "../utils/http";

export const createBooking = (body) => http.post("/bookings", body);

export const getBookings = () => http.get("/bookings");

export const getBookingDetails = (bookingId) =>
  http.get(`/bookings/${bookingId}`);

export const cancelBooking = (bookingId) =>
  http.patch(`/bookings/${bookingId}/cancel`);

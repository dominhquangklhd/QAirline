import http from "../utils/http";

export const getFlights = () => http.get("/flights");

export const searchFlights = (params) =>
  http.post("/flights/search", { params });



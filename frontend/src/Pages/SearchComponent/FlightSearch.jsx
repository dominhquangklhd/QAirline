import React, { useState, useRef, forwardRef } from "react";
import "./FlightSearch.scss";
import { FaPlane } from 'react-icons/fa';

const FlightSearch = forwardRef((props, ref) => {
  const [tripType, setTripType] = useState("round-trip");
  const [from, setFrom] = useState("Hà Nội");
  const [to, setTo] = useState("HAN");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [discountCode, setDiscountCode] = useState("");

  const flightSearchRef = useRef(null);

  const handleSwapLocations = () => {
    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log({
      tripType,
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      discountCode,
    });
  };

  return (
    <div ref={ref} className="container-flight-search">
      <div className="header">
        <FaPlane />
        Đặt vé
      </div>
      <div className="content">
        <div className="row1">
          <div className="input-r1">
            <input
              type="radio"
              id="one-way"
              name="trip-type"
              value="one-way"
              checked={tripType === "one-way"}
              onChange={(e) => setTripType(e.target.value)}
            />
            <label htmlFor="one-way">Một chiều</label>
          </div>
          <div className="input-r1">
            <input
              type="radio"
              id="round-trip"
              name="trip-type"
              value="round-trip"
              checked={tripType === "round-trip"}
              onChange={(e) => setTripType(e.target.value)}
            />
            <label htmlFor="round-trip">Khứ hồi</label>
          </div>
        </div>

        <div className="row2">
          <div className="row2-1">
            <div className="input-r2">
              <label htmlFor="from">TỪ</label>
              <input type="text" id="from" value={from} />
            </div>
            <div className="input-r2">
              <label htmlFor="to">TỚI</label>
              <input type="text" id="to" value={to} />
            </div>
            <div className="input-r2">
              <label htmlFor="departure-date">NGÀY ĐI</label>
              <input
                type="date"
                id="departure-date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>
            <div className={`input-r2 ${tripType === "one-way" ? "hidden" : ""}`}>
              <label htmlFor="return-date">NGÀY VỀ</label>
              <input
                type="date"
                id="return-date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                disabled={tripType === "one-way"}
              />
            </div>
            <div className="input-r2">
              <label htmlFor="passengers">HÀNH KHÁCH</label>
              <input
                type="number"
                id="passengers"
                value={passengers}
                min="1"
                onChange={(e) => setPassengers(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="row3">
          <div className="row3-1">
            <label htmlFor="discount-code"></label>
            <input
              type="text"
              id="discount-code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="MÃ GIẢM GIÁ"
            />
          </div>
          <div className="row3-2">
            <div className="input-r3-btn">
              <button type="submit">
                Tìm chuyến bay
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

FlightSearch.displayName = 'FlightSearch';  // Ensure the component has a display name

export default FlightSearch;

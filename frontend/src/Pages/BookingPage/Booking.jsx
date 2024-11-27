import React, { useState } from "react";
import "./Booking.scss";

const Booking = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adultCount, setAdultCount] = useState("0");
  const [childrenCount, setChildrenCount] = useState("0");
  const [flightclassName, setFlightclassName] = useState("Any");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({
      origin,
      destination,
      departureDate,
      returnDate,
      adultCount,
      childrenCount,
      flightclassName,
    });
    // Theem logic submit o day
  };

  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="booking-form">
              <form onSubmit={handleFormSubmit}>
                <div className="row">
                  {/* Flying From */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Flying from</span>
                      <div
                        id="from"
                        name="from"
                        className="form-control departsfrom-select select animated zoomIn"
                        // className="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                      >
                        <input type="radio" name="option" />
                        <i className="toggle icon icon-arrow-down"></i>
                        <i className="toggle icon icon-arrow-up"></i>
                        <span className="placeholder">Select city</span>
                        <label className="option" value="Mumbai">
                          <input type="radio" name="option" />
                          <span className="title">Mumbai</span>
                        </label>
                        <label className="option" value="Tokyo">
                          <input type="radio" name="option" />
                          <span className="title">Tokyo</span>
                        </label>
                        <label className="option" value="Hanoi">
                          <input type="radio" name="option" />
                          <span className="title">Hanoi</span>
                        </label>
                        <label className="option" value="Delhi">
                          <input type="radio" name="option" />
                          <span className="title">Delhi</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Flying To */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <span className="form-label">Flying to</span>
                      <div
                        id="from"
                        name="from"
                        className="form-control departsfrom-select select animated zoomIn"
                        // className="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                      >
                        <input type="radio" name="option" />
                        <i className="toggle icon icon-arrow-down"></i>
                        <i className="toggle icon icon-arrow-up"></i>
                        <span className="placeholder">Select city</span>
                        <label className="option" value="Mumbai">
                          <input type="radio" name="option" />
                          <span className="title">Mumbai</span>
                        </label>
                        <label className="option" value="Tokyo">
                          <input type="radio" name="option" />
                          <span className="title">Tokyo</span>
                        </label>
                        <label className="option" value="Hanoi">
                          <input type="radio" name="option" />
                          <span className="title">Hanoi</span>
                        </label>
                        <label className="option" value="Delhi">
                          <input type="radio" name="option" />
                          <span className="title">Delhi</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Departing */}
                  <div className="col-md-5">
                    <div className="form-group">
                      <span className="form-label">Departing</span>
                      <input
                        className="form-control"
                        type="date"
                        name="departureDate"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* Returning */}
                  <div className="col-md-5">
                    <div className="form-group">
                      <span className="form-label">Returning</span>
                      <input
                        className="form-control"
                        type="date"
                        name="returnDate"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/* Adults */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Adults (18+)</span>
                      <div
                        id="from"
                        name="from"
                        className="form-control departsfrom-select select animated zoomIn"
                        // className="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                      >
                        <input type="radio" name="option" />
                        <i className="toggle icon icon-arrow-down"></i>
                        <i className="toggle icon icon-arrow-up"></i>
                        <span className="placeholder">0</span>
                        <label className="option" value="Mumbai">
                          <input type="radio" name="option" />
                          <span className="title">0</span>
                        </label>
                        <label className="option" value="Tokyo">
                          <input type="radio" name="option" />
                          <span className="title">1</span>
                        </label>
                        <label className="option" value="Hanoi">
                          <input type="radio" name="option" />
                          <span className="title">2</span>
                        </label>
                        <label className="option" value="Delhi">
                          <input type="radio" name="option" />
                          <span className="title">3</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Children */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <span className="form-label">Children (0 - 17)</span>
                      <div
                        id="from"
                        name="from"
                        className="form-control departsfrom-select select animated zoomIn"
                        // className="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                      >
                        <input type="radio" name="option" />
                        <i className="toggle icon icon-arrow-down"></i>
                        <i className="toggle icon icon-arrow-up"></i>
                        <span className="placeholder">0</span>
                        <label className="option" value="Mumbai">
                          <input type="radio" name="option" />
                          <span className="title">0</span>
                        </label>
                        <label className="option" value="Tokyo">
                          <input type="radio" name="option" />
                          <span className="title">1</span>
                        </label>
                        <label className="option" value="Hanoi">
                          <input type="radio" name="option" />
                          <span className="title">2</span>
                        </label>
                        <label className="option" value="Delhi">
                          <input type="radio" name="option" />
                          <span className="title">3</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Travel className */}
                  <div className="col-md-5">
                    <div className="form-group">
                      <span className="form-label">Travel className</span>
                      <div
                        id="from"
                        name="from"
                        className="form-control departsfrom-select select animated zoomIn"
                        // className="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                      >
                        <input type="radio" name="option" />
                        <i className="toggle icon icon-arrow-down"></i>
                        <i className="toggle icon icon-arrow-up"></i>
                        <span className="placeholder">Any</span>
                        <label className="option" value="Mumbai">
                          <input type="radio" name="option" />
                          <span className="title">Economy className</span>
                        </label>
                        <label className="option" value="Tokyo">
                          <input type="radio" name="option" />
                          <span className="title">Business className</span>
                        </label>
                        <label className="option" value="Hanoi">
                          <input type="radio" name="option" />
                          <span className="title">First className</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="col-md-5">
                    <div className="form-btn">
                      <button className="submit-btn" type="submit">
                        Show flights
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

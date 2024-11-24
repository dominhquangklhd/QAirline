import React, { useState } from "react";
import "./Booking.scss"

const Booking = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adultCount, setAdultCount] = useState("0");
  const [childrenCount, setChildrenCount] = useState("0");
  const [flightClass, setFlightClass] = useState("Any");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({
      origin,
      destination,
      departureDate,
      returnDate,
      adultCount,
      childrenCount,
      flightClass,
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
                        className="form-control departsfrom-select"
                        class="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required>
                        <input type="radio" name="option"/>
                        <i class="toggle icon icon-arrow-down"></i>
                        <i class="toggle icon icon-arrow-up"></i>
                        <span class="placeholder">Select city</span>
                        <label class="option" value="Mumbai">
                            <input type="radio" name="option"/>
                            <span class="title">Mumbai</span>
                        </label>
                        <label class="option" value="Tokyo">
                            <input type="radio" name="option"/>
                            <span class="title">Tokyo</span>
                        </label>
                        <label class="option" value="Hanoi">
                            <input type="radio" name="option"/>
                            <span class="title">Hanoi</span>
                        </label>
                        <label class="option" value="Delhi">
                            <input type="radio" name="option"/>
                            <span class="title">Delhi</span>
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
                        className="form-control departsfrom-select"
                        class="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required>
                        <input type="radio" name="option"/>
                        <i class="toggle icon icon-arrow-down"></i>
                        <i class="toggle icon icon-arrow-up"></i>
                        <span class="placeholder">Select city</span>
                        <label class="option" value="Mumbai">
                            <input type="radio" name="option"/>
                            <span class="title">Mumbai</span>
                        </label>
                        <label class="option" value="Tokyo">
                            <input type="radio" name="option"/>
                            <span class="title">Tokyo</span>
                        </label>
                        <label class="option" value="Hanoi">
                            <input type="radio" name="option"/>
                            <span class="title">Hanoi</span>
                        </label>
                        <label class="option" value="Delhi">
                            <input type="radio" name="option"/>
                            <span class="title">Delhi</span>
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
                        className="form-control departsfrom-select"
                        class="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required>
                        <input type="radio" name="option"/>
                        <i class="toggle icon icon-arrow-down"></i>
                        <i class="toggle icon icon-arrow-up"></i>
                        <span class="placeholder">0</span>
                        <label class="option" value="Mumbai">
                            <input type="radio" name="option"/>
                            <span class="title">0</span>
                        </label>
                        <label class="option" value="Tokyo">
                            <input type="radio" name="option"/>
                            <span class="title">1</span>
                        </label>
                        <label class="option" value="Hanoi">
                            <input type="radio" name="option"/>
                            <span class="title">2</span>
                        </label>
                        <label class="option" value="Delhi">
                            <input type="radio" name="option"/>
                            <span class="title">3</span>
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
                        className="form-control departsfrom-select"
                        class="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required>
                        <input type="radio" name="option"/>
                        <i class="toggle icon icon-arrow-down"></i>
                        <i class="toggle icon icon-arrow-up"></i>
                        <span class="placeholder">0</span>
                        <label class="option" value="Mumbai">
                            <input type="radio" name="option"/>
                            <span class="title">0</span>
                        </label>
                        <label class="option" value="Tokyo">
                            <input type="radio" name="option"/>
                            <span class="title">1</span>
                        </label>
                        <label class="option" value="Hanoi">
                            <input type="radio" name="option"/>
                            <span class="title">2</span>
                        </label>
                        <label class="option" value="Delhi">
                            <input type="radio" name="option"/>
                            <span class="title">3</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Travel Class */}
                  <div className="col-md-5">
                    <div className="form-group">
                      <span className="form-label">Travel class</span>
                      <div 
                        id="from"
                        name="from"
                        className="form-control departsfrom-select"
                        class="select animated zoomIn"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required>
                        <input type="radio" name="option"/>
                        <i class="toggle icon icon-arrow-down"></i>
                        <i class="toggle icon icon-arrow-up"></i>
                        <span class="placeholder">Any</span>
                        <label class="option" value="Mumbai">
                            <input type="radio" name="option"/>
                            <span class="title">Economy Class</span>
                        </label>
                        <label class="option" value="Tokyo">
                            <input type="radio" name="option"/>
                            <span class="title">Business Class</span>
                        </label>
                        <label class="option" value="Hanoi">
                            <input type="radio" name="option"/>
                            <span class="title">First Class</span>
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

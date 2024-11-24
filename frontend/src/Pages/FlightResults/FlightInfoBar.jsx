// import React from "react";

const FlightInfoBar = () => {
  return (
    <div className="flight-info-bar">
      <div className="info-group">
        <div>
          <span className="airport-code">HAN</span>
          <span className="city-name">Hanoi</span>
        </div>
        <span className="divider">to</span>
        <div>
          <span className="airport-code">SGN</span>
          <span className="city-name">Ho Chi Minh City</span>
        </div>
        <span className="divider">|</span>
        <div className="travel-date">
          <span>25/11/2024</span>
        </div>
        <span className="divider">|</span>
        <div className="passengers">
          <span>2 Passengers</span>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoBar;

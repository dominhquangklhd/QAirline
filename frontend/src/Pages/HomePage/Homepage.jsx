import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import FlightSearch from "../SearchComponent/FlightSearch";
import Support from "./Support";
import Info from "./Info";
import Lounge from "./Lounge";
import Travelers from "./Travelers";
import Subscribers from "./Subscribers";

function HomePage() {
  const flightSearchRef = useRef(null);

  const handleScrollToFlightSearch = () => {
    if (flightSearchRef.current) {
      smoothScrollTo(flightSearchRef);
    }
  };

  return (
    <div>
      <Navbar onSearchClick={handleScrollToFlightSearch} />
      <Home />
      <FlightSearch ref={flightSearchRef} />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
    </div>
  );
}

const smoothScrollTo = (targetRef) => {
  const targetElement = targetRef.current;
  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; // thời gian cuộn (1 giây)
  let startTime = null;

  const scrollAnimation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOut(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  };

  const easeInOut = (t, b, c, d) => {
    let time = t / (d / 2);
    if (time < 1) return (c / 2) * time * time + b;
    time--;
    return (-c / 2) * (time * (time - 2) - 1) + b;
  };

  requestAnimationFrame(scrollAnimation);
};


export default HomePage;

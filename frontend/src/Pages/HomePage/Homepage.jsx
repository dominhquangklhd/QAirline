import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Home";
import FlightSearch from "../SearchComponent/FlightSearch";
import Support from "./Support";
import Info from "./Info";
import Lounge from "./Lounge";
import Travelers from "./Travelers";
import Subscribers from "./Subscribers";
import Post from "./Post";
import { smoothScrollTo } from "../../CommonFunctions/SmoothScroll";

function HomePage({ flightSearchRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToFlightSearch && flightSearchRef.current) {
      smoothScrollTo(flightSearchRef);
    }
  }, [location.state, flightSearchRef]);

  return (
    <div>
      <Home />
      <FlightSearch ref={flightSearchRef} />
      <Post />
      <Support />
      {/* <Info />
      <Lounge /> */}
      <Travelers />
      <Subscribers />
    </div>
  );
}

HomePage.propTypes = {
  flightSearchRef: PropTypes.shape({
    current: PropTypes.any, // `current` thường là DOM element hoặc null
  }),
};

export default HomePage;

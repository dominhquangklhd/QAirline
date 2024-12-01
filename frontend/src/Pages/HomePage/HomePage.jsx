import React, { useRef } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import FlightSearch from '../SearchComponent/FlightSearch';
import Support from './Support';
import Info from './Info';
import Lounge from './Lounge';
import Travelers from './Travelers';
import Subscribers from './Subscribers';

function HomePage() {
  const flightSearchRef = useRef(null);

  const handleScrollToFlightSearch = () => {
    if (flightSearchRef.current) {
      flightSearchRef.current.scrollIntoView({ behavior: 'smooth' });
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

export default HomePage;

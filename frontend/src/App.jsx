import "./App.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRouteElement from "./useRouteElement";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";
import HomePage from "./Pages/HomePage/HomePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { smoothScrollTo } from "./CommonFunctions/SmoothScroll";

// import NavbarAdmin from "./AdminPages/CommonComponents/NavbarAdmin";

function App() {
  const routeElement = useRouteElement();
  const navigate = useNavigate();
  const isHomePage = routeElement?.props?.children.type === HomePage;
  const flightSearchRef = useRef(null);
  const handleScrollToFlightSearch = () => {
    if (flightSearchRef.current) {
      smoothScrollTo(flightSearchRef);
    }
  };

  const handleNavbarSearchClick = () => {
    if (isHomePage) {
      handleScrollToFlightSearch();
    } else {
      // Điều hướng đến HomePage và cuộn xuống
      navigate("/", { state: { scrollToFlightSearch: true } });
    }
  };

  const handleHotFlightClick = (flightData) => {
    handleScrollToFlightSearch();
    setFlightData(flightData);
  };

  return (
    <div>
      <Navbar onSearchClick={handleNavbarSearchClick} />
      {isHomePage ? (
        <HomePage flightSearchRef={flightSearchRef} />
      ) : (
        routeElement
      )}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;

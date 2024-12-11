import "./App.css";
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useRouteElement from "./useRouteElement";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import { smoothScrollTo } from "./CommonFunctions/SmoothScroll";
import LoginPage from "./Pages/LoginPage/LoginPage";

import NavbarAdmin from "./AdminPages/CommonComponents/NavbarAdmin";
import useRouteAdmin from "./useRouteAdmin"

function App() {
  const routeElement = useRouteElement();
  const routeAdmin = useRouteAdmin();
  const navigate = useNavigate();
  const isHomePage = routeElement?.props?.children.type === HomePage;
  const [isAdminPage, setIsAdminPage] = useState(false);
  const [flightData, setFlightData] = useState(null);

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
  }

  return (
    <div>
      {isAdminPage
        ? <>
          <NavbarAdmin />
          {routeAdmin}
        </>
        :
        <>
          <Navbar onSearchClick={handleNavbarSearchClick} />
          {isHomePage ? <HomePage flightSearchRef={flightSearchRef} hotFlightClick={handleHotFlightClick} flightData={flightData}/> : routeElement}
          <Footer />
        </>
      }
    </div>
  );
}

export default App;

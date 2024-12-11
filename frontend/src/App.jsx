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
  var isAdminPage = useState(true);

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
          {isHomePage ? <HomePage flightSearchRef={flightSearchRef} /> : routeElement}
          <Footer />
        </>
      }
    </div>
  );
}

export default App;

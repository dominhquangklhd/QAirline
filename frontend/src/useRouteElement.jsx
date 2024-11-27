import { useRoutes } from "react-router-dom";

//import Booking from "./Pages/BookingPage/Booking";
import FlightResults from "./Pages/FlightResults/FlightResults";
import Homepage from "./Pages/HomePage/Homepage";
// import FlightResults from "./Pages/FlightResults/FlightResults";
export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/FlightResults",
      element: <FlightResults />,
    },
    // {
    //   path: "/Booking",
    //   element: <Booking />,
    // },
  ]);
  return routeElement;
}

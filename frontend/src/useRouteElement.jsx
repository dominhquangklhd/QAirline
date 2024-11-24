import { useRoutes } from "react-router-dom";

import Information from "./Pages/BookingPage/Information";
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
    {
      path: "/Information",
      element: <Information />,
    },
  ]);
  return routeElement;
}

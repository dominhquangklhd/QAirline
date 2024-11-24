import { useRoutes } from "react-router-dom";

import Information from "./Pages/Information/Information";
import FlightResults from "./Pages/FlightResults/FlightResults";
import Homepage from "./Pages/HomePage/Homepage";
import BookingUserInfo from "./Pages/BookingUserInfo/BookingUserInfo";

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
    {
      path: "/BookingUserInfo",
      element: <BookingUserInfo />,
    },
  ]);
  return routeElement;
}

import { useRoutes } from "react-router-dom";

import Information from "./Pages/BookingPage/Information";
import SelectFlight from "./Pages/BookingPage/SelectFlight";
import Homepage from "./Pages/HomePage/Homepage";
export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/selectFlight",
      element: <SelectFlight />,
    },
    {
      path: "/Information",
      element: <Information />,
    },
  ]);
  return routeElement;
}

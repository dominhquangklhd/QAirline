import { useRoutes } from "react-router-dom";
import HomeAdmin from "./AdminPages/HomeAdmin/HomeAdmin"
import AircraftInfo from "./AdminPages/AircraftInfo/AircraftInfo";

export default function useRouteElement() {
    const routeAdmin = useRoutes([
        {
            path: "/",
            element: <HomeAdmin />,
        },
        {
            path: "/AircraftInfo",
            element: <AircraftInfo />,
        },
    ]);
    return routeAdmin;
}

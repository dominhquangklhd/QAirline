import Home from "./Home";
import Info from "./Info";
import Lounge from "./Lounge";
import FlightSearch from "../SearchComponent/FlightSearch";
import Subscribers from "./Subscribers";
import Support from "./Support";
import Travelers from "./Travelers";
import Navbar from "./Navbar"

function HomePage() {
  return (
    <div>
        <Navbar/>    
        <Home></Home>
        <Search></Search>
        <Support></Support>
        <Info></Info>
        <Lounge></Lounge>
        <Travelers></Travelers>
        <Subscribers></Subscribers>
    </div>
  )
}

export default HomePage
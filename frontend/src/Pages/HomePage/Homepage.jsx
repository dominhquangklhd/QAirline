import Home from "./Home";
import Info from "./Info";
import Lounge from "./Lounge";
// import Search from "./Search";
import Subscribers from "./Subscribers";
import Support from "./Support";
import Travelers from "./Travelers";
import Navbar from "./Navbar";
import FlightSearch from "../SearchComponent/FlightSearch";
function HomePage() {
  return (
    <div>
      <Navbar />
      <Home></Home>
      {/* <Search></Search> */}
      <FlightSearch></FlightSearch>
      <Support></Support>
      <Info></Info>
      <Lounge></Lounge>
      <Travelers></Travelers>
      <Subscribers></Subscribers>
    </div>
  );
}

export default HomePage;

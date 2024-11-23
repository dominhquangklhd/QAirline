import Navbar from "../../Component/Header";
import Home from "./Home";
import Search from "./Search";
import Support from "./Support";
import Info from "./Info";
import Lounge from "./Lounge";
import Travelers from "./Travelers";
import Subscribers from "./Subscribers";
import Footer from "../../Component/Footer";

export default function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Search></Search>
      <Support></Support>
      <Info></Info>
      <Lounge></Lounge>
      <Travelers></Travelers>
      <Subscribers></Subscribers>
      <Footer></Footer>
    </div>
  );
}

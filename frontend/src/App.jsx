import "./App.css";
import Footer from "./Component/Footer";
import Home from "./Pages/HomePage/Home";
import Info from "./Pages/HomePage/Info";
import Lounge from "./Pages/HomePage/Lounge";
import Navbar from "./Component/Header";
import Search from "./Pages/HomePage/Search";
import Subscribers from "./Pages/HomePage/Subscribers";
import Support from "./Pages/HomePage/Support";
import Travelers from "./Pages/HomePage/Travelers";
function App() {
  return (
    <div>
      <Header/>
      {/* <Navbar/> 
      <HomePage/> */}
      <FlightResults/>
      <Footer/>
    </div>
  );
}

export default App;

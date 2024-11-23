import { useState } from "react";
import "./App.css";
import Footer from "./CommonComponents/Footer";
import Header from "./CommonComponents/Header";
import FlightResults from "./Pages/FlightResults/FlightResults";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const [onHomePage, setOnHomePage] = useState(true);

  return (
    // Header dung chung cho tat ca trang khac tru HomePage
    <div>
      {!onHomePage ? <Header/> : null} 
      <HomePage/>
      {/* <FlightResults/> */}
      <Footer/>
    </div>
  );
}

export default App;

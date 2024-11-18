import React from 'react';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Lounge from './Components/Lounge/Lounge';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Subscribers from "./Components/Subscribers/Subscribers";
import Support from "./Components/Support/Support";
import Travelers from "./Components/Travelers/Travelers";

function App() {
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

export default App;

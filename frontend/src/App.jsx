import './App.css'
import Footer from './HomePage/Footer';
import Home from './HomePage/Home';
import Info from './HomePage/Info';
import Lounge from './HomePage/Lounge';
import Navbar from './HomePage/Navbar';
import Search from './HomePage/Search';
import Subscribers from "./HomePage/Subscribers";
import Support from "./HomePage/Support";
import Travelers from "./HomePage/Travelers";
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
  )
}

export default App

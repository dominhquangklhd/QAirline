import './App.css'
import HomePage from './HomePage/HomePage'
import Navbar from './HomePage/Navbar';
import Header from './CommonComponents/Header';
import Footer from './HomePage/Footer';
import FlightResults from './FlightResults/FlightResults'

function App() {

  return (
    <div>
      <Header/>
      {/* <Navbar/> 
      <HomePage/> */}
      <FlightResults/>
      <Footer/>
    </div>
  )
}

export default App

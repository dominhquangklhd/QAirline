import FlightCard from "./FlightCard";
import FlightInfoBar from "./FlightInfoBar";
import "./FlightResults.scss"

const flightsData = [
  {
    departure: { time: "08:00", location: "Hanoi (HAN)" },
    arrival: { time: "10:00", location: "Ho Chi Minh City (SGN)" },
    prices: {
      economy: "1,200,000",
      business: "3,500,000",
    },
    duration: "2h",
    stops: "Non-stop",
  },
  {
    departure: { time: "09:00", location: "Hanoi (HAN)" },
    arrival: { time: "11:15", location: "Da Nang (DAD)" },
    prices: {
      economy: "800,000",
      business: "1,900,000",
    },
    duration: "2h 15m",
    stops: "Non-stop",
  },
];

const FlightResults = () => {
  return (
    <div className="flight-results">
     
      <FlightInfoBar/>
      <h1>Available Flights</h1>
      {flightsData.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;

import { useLocation, Link } from "react-router-dom";
// import FlightCard from "./FlightCard";
import FlightCardV2 from "./FlightCardV2";
import FlightInfoBar from "./FlightInfoBar";
import "./FlightResults.scss";

const FlightResults = () => {
  const location = useLocation();
  const { searchResults, searchParams } = location.state || {};

  if (!searchResults) {
    return (
      <div className="no-results">
        <h2>Không tìm thấy kết quả</h2>
        <Link to="/" className="back-button">
          Quay lại trang tìm kiếm
        </Link>
      </div>
    );
  }

  return (
    <div className="flight-results">
      <FlightInfoBar searchParams={searchParams} />
      <h1>Available Flights</h1>
      {searchResults.map((flight, index) => (
        <FlightCardV2 key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightResults;

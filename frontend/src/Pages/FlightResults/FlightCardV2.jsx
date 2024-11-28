import PropTypes from "prop-types";
import { FaPlaneDeparture } from 'react-icons/fa';
import { HiOutlineLocationMarker } from "react-icons/hi";

function FlightCardV2({ flight }) {
    const { departure, arrival, prices, duration, stops } = flight;

  return (
    <div className="flight-card2">
        <div className="flight-info2">
            <div className="details2">
                <img src="./assets/logo.png" alt="" className="logoCard"/>
                <div className="text">
                    <p className="name"><strong>QAirline - </strong><a href="">Chi tiết</a></p>
                    <p>[Mã máy bay] - [Thời gian bay] - Bay thẳng</p>
                </div>
            </div>

            <div className="timeline2">
                <h2 className="timeCard">{departure.time}</h2>
                <FaPlaneDeparture className="iconCard"/>
                <div className="line">
                    <div className="solid-line2"></div>
                </div>
                <HiOutlineLocationMarker className="iconCard"/>
                <h2 className="timeCard">{arrival.time}</h2>
            </div>
        </div>
        <div className="flight-classes2">
            <div className="box-eco2">
                <h2>Economy</h2>
                <h4>{prices.economy} VND</h4>
                <button>Chọn</button>
            </div>
            <div className="box-busi2">
                <h2>Business</h2>
                <h4>{prices.business} VND</h4>
                <button>Chọn</button>
            </div>
        </div>
    </div>
  )
}

FlightCardV2.propTypes = {
    flight: PropTypes.shape({
      airline: PropTypes.string.isRequired,
      departure: PropTypes.shape({
        time: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
      }).isRequired,
      arrival: PropTypes.shape({
        time: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
      }).isRequired,
      prices: PropTypes.shape({
        economy: PropTypes.string.isRequired,
        business: PropTypes.string.isRequired,
      }).isRequired,
      duration: PropTypes.string.isRequired,
      stops: PropTypes.string.isRequired,
    }).isRequired,
  };

export default FlightCardV2
import { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import "./FlightSearch.scss";
import { FaPlane } from "react-icons/fa";
import axios from "../../Apis/axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FlightSearch = forwardRef((flightData, ref) => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("one-way");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [cities, setCities] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (flightData.flightData) {
      console.log(flightData.flightData.city_from);
      
      setTripType("one-way");
      handleCitySelect(
        "from",
        `${flightData.flightData.city_from} (${flightData.flightData.airport_from_code})`
      );
      handleCitySelect(
        "to",
        `${flightData.flightData.city_to} (${flightData.flightData.airport_to_code})`
      )
      
      setDepartureDate(flightData.flightData.date_departure);
    }
  }, [flightData.flightData]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        console.log('atFetchCities');
        
        const response = await axios.get("/flights/airports"); // Endpoint API
        // console.log(response);
        const formattedData = response.map((airport) => ({
          city: airport.city,
          airportCode: airport.airport_code,
          airportName: airport.airport_name,
        }));

        setCities(formattedData);
      } catch (error) {
        console.error("Error fetching airport data:", error);
      }
    };

    fetchCities();
  }, []);

  const handleCitySelect = (type, city) => {
    if (type === "from") {
      setFrom(city);
      setShowFromDropdown(false);
    } else if (type === "to") {
      setTo(city);
      setShowToDropdown(false);
    }
  };

  // const flightSearchRef = useRef(null);

  const handleSwapLocations = () => {
    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);
  };

  const extractAirportCode = (cityString) => {
    const match = cityString.match(/\(([^)]+)\)/);
    return match ? match[1] : null;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const originCode = extractAirportCode(from);
    const destinationCode = extractAirportCode(to);

    if (!originCode || !destinationCode) {
      setError("Vui lòng chọn sân bay đi và đến");
      setLoading(false);
      return;
    }

    try {
      let outboundFlight = null;
      let returnFlight = null;

      // Tìm chuyến bay đi
      const outboundParams = {
        origin: originCode,
        destination: destinationCode,
        date: departureDate,
        passengers,
        discountCode: discountCode || undefined,
      };

      const outboundResponse = await axios.get("/flights/search", {
        params: outboundParams,
      });
      console.log("outboundResponse", outboundResponse);
      outboundFlight = outboundResponse;

      // Nếu là khứ hồi, tìm thêm chuyến bay về
      if (tripType === "round-trip") {
        const returnParams = {
          origin: destinationCode, // Đảo ngược điểm đi/đến
          destination: originCode,
          date: returnDate,
          passengers,
          discountCode: discountCode || undefined,
        };

        const returnResponse = await axios.get("/flights/search", {
          params: returnParams,
        });
        returnFlight = returnResponse;
      }

      // Điều hướng với kết quả tìm kiếm
      navigate("/FlightResults", {
        state: {
          searchResults: {
            outbound: outboundFlight,
            return: returnFlight,
          },
          searchParams: {
            ...outboundParams,
            returnDate: tripType === "round-trip" ? returnDate : null,
            isRoundTrip: tripType === "round-trip",
          },
          error: null,
        },
      });
    } catch (error) {
      console.error("Error searching flights:", error);
      navigate("/FlightResults", {
        state: {
          searchResults: null,
          searchParams: {
            origin: originCode,
            destination: destinationCode,
            date: departureDate,
            returnDate: tripType === "round-trip" ? returnDate : null,
            passengers,
            isRoundTrip: tripType === "round-trip",
            discountCode: discountCode || undefined,
          },
          error:
            error.response?.status === 404
              ? "Không tìm thấy chuyến bay phù hợp."
              : "Đã xảy ra lỗi, vui lòng thử lại sau.",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref} className="container-flight-search">
      <div className="header">
        <FaPlane />
        Đặt vé
      </div>
      <form onSubmit={handleSearch} className="content">
        <div className="row1">
          <div className="input-r1">
            <input
              type="radio"
              id="one-way"
              name="trip-type"
              value="one-way"
              checked={tripType === "one-way"}
              onChange={(e) => setTripType(e.target.value)}
            />
            <label htmlFor="one-way">Một chiều</label>
          </div>
          <div className="input-r1">
            <input
              type="radio"
              id="round-trip"
              name="trip-type"
              value="round-trip"
              checked={tripType === "round-trip"}
              onChange={(e) => setTripType(e.target.value)}
            />
            <label htmlFor="round-trip">Khứ hồi</label>
          </div>
        </div>

        <div className="row2">
          <div className="row2-1">
            <div className="input-r2">
              <label htmlFor="from">TỪ</label>
              <input
                type="text"
                id="from"
                value={from}
                placeholder="Chọn địa điểm"
                onFocus={() => setShowFromDropdown(true)}
                onChange={(e) => setFrom(e.target.value)}
                autoComplete="off"
              />
              <button
                id="swap-button"
                type="button"
                onClick={handleSwapLocations}
                className="swap-button"
              >
                ⇄
              </button>
              {showFromDropdown && (
                <div className="dropdown">
                  {cities.map((city) => (
                    <div
                      key={city.airportCode}
                      className="dropdown-item"
                      onClick={() =>
                        handleCitySelect(
                          "from",
                          `${city.city} (${city.airportCode})`
                        )
                      }
                    >
                      <strong>{city.city}</strong> - {city.airportName}
                      <div className="airport-code">{city.airportCode}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="input-r2">
              <label htmlFor="to">TỚI</label>
              <input
                type="text"
                id="to"
                value={to}
                placeholder="Chọn địa điểm"
                onFocus={() => setShowToDropdown(true)}
                onChange={(e) => setTo(e.target.value)}
                autoComplete="off"
              />
              {showToDropdown && (
                <div className="dropdown">
                  {cities.map((city) => (
                    <div
                      key={city.airportCode}
                      className="dropdown-item"
                      onClick={() =>
                        handleCitySelect(
                          "to",
                          `${city.city} (${city.airportCode})`
                        )
                      }
                    >
                      <strong>{city.city}</strong> - {city.airportName}
                      <div className="airport-code">{city.airportCode}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="input-r2">
              <label htmlFor="departure-date">NGÀY ĐI</label>
              <input
                type="date"
                id="departure-date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>
            <div
              className={`input-r2 ${tripType === "one-way" ? "hidden" : ""}`}
            >
              <label htmlFor="return-date">NGÀY VỀ</label>
              <input
                type="date"
                id="return-date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                disabled={tripType === "one-way"}
                min={departureDate || new Date().toISOString().split("T")[0]}
                required={tripType === "round-trip"}
              />
            </div>
            <div className="input-r2 passengers">
              <label htmlFor="passengers">HÀNH KHÁCH</label>
              <input
                type="number"
                id="passengers"
                value={passengers}
                min="1"
                max="9"
                onChange={(e) =>
                  setPassengers(Math.max(1, parseInt(e.target.value) || 1))
                }
                required
              />
            </div>
          </div>
          <div className="row2-2">
            <label htmlFor="discount-code">MÃ GIẢM GIÁ</label>
            <input
              type="text"
              id="discount-code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Nhập mã giảm giá (nếu có)"
            />
          </div>
        </div>

        <div className="row3">
          <div className="row3-1"></div>
          <div className="row3-2">
            <div className="input-r3-btn">
              <button type="submit">Tìm chuyến bay</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
});

FlightSearch.displayName = "FlightSearch";

FlightSearch.propTypes = {
  scrollSource: PropTypes.func.isRequired,
}

export default FlightSearch;

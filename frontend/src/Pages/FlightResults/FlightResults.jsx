import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FlightCardV2 from "./FlightCardV2";
import FlightInfoBar from "./FlightInfoBar";
import "./FlightResults.scss";

const FlightResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchResults, searchParams } = location.state || {};

  // State để lưu chuyến bay được chọn
  const [selectedOutbound, setSelectedOutbound] = useState(null);
  const [selectedReturn, setSelectedReturn] = useState(null);

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

  const handleFlightSelection = (flight, type) => {
    if (type === "outbound") {
      setSelectedOutbound(flight);
    } else {
      setSelectedReturn(flight);
    }
  };

  const handleConfirmBooking = () => {
    if (!selectedOutbound) {
      alert("Vui lòng chọn chuyến bay đi");
      return;
    }
    if (searchParams.isRoundTrip && !selectedReturn) {
      alert("Vui lòng chọn chuyến bay về");
      return;
    }
    // Xử lý logic xác nhận đặt vé ở đây
    navigate("/BookingUserInfo", {
      state: {
        outbound: selectedOutbound,
        return: selectedReturn,
        totalAmount:
          (selectedOutbound?.price || 0) + (selectedReturn?.price || 0),
      },
    });
    console.log("Confirmed booking:", {
      outbound: selectedOutbound,
      return: selectedReturn,
    });
  };

  return (
    <div className="flight-results">
      <FlightInfoBar searchParams={searchParams} />

      {/* Chuyến bay đi */}
      <div className="flight-section">
        <h2 className="section-title">Chuyến bay đi - {searchParams.date}</h2>

        <div className="flights-list">
          {searchResults.outbound &&
            searchResults.outbound.map((flight, index) => (
              <div key={index}>
                <FlightCardV2
                  flight={flight}
                  isSelected={selectedOutbound?.id === flight.id}
                  onSelect={(selectedFlight) =>
                    handleFlightSelection(selectedFlight, "outbound")
                  }
                />
              </div>
            ))}
        </div>
      </div>

      {/* Chuyến bay về (chỉ hiển thị nếu là vé khứ hồi) */}
      {searchParams.isRoundTrip && (
        <div className="flight-section">
          <h2 className="section-title">
            Chuyến bay về - {searchParams.returnDate}
          </h2>
          <div className="flights-list">
            {searchResults.outbound &&
              searchResults.outbound.map((flight, index) => (
                <div key={index}>
                  <FlightCardV2
                    flight={flight}
                    onSelect={(selectedFlight) =>
                      handleFlightSelection(selectedFlight, "outbound")
                    }
                    isSelected={selectedOutbound?.id === flight.id}
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Nút xác nhận */}
      <div className="booking-confirmation">
        <div className="selected-flights-summary">
          <div className="selected-flight">
            <strong>Chuyến đi:</strong>
            {selectedOutbound
              ? `${selectedOutbound?.price.toLocaleString()}đ`
              : "Chưa chọn"}
          </div>
          {searchParams.isRoundTrip && (
            <div className="selected-flight">
              <strong>Chuyến về:</strong>
              {selectedReturn
                ? `${selectedReturn?.price.toLocaleString()}đ`
                : "Chưa chọn"}
            </div>
          )}
          <div className="total-price">
            <strong>Tổng tiền:</strong>
            {(
              (selectedOutbound?.price || 0) + (selectedReturn?.price || 0)
            ).toLocaleString()}
            đ
          </div>
        </div>
        <button
          className="confirm-button"
          onClick={handleConfirmBooking}
          disabled={
            !selectedOutbound || (searchParams.isRoundTrip && !selectedReturn)
          }
        >
          Xác nhận đặt vé
        </button>
      </div>
    </div>
  );
};

export default FlightResults;

// BookingUserInfo.jsx
import { useState } from "react";
import "./BookingUserInfo.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../Apis/axios";
import { ClipLoader } from "react-spinners";

export default function BookingUserInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedGender, setSelectedGender] = useState("Nam");
  const {
    outbound,
    return: returnFlight,
    totalAmount,
    passengers,
  } = location.state || {};

  const [formDataList, setFormDataList] = useState(
    Array.from({ length: passengers || 1 }, () => ({
      gender: "Nam",
      firstName: "",
      lastName: "",
      birthDate: "",
      country: "Việt Nam",
      phone: "",
      email: "",
      idNumber: "",
      address: "",
    }))
  );

  const formatFlightDateTime = (departureTime, arrivalTime) => {
    const formatDateTime = (date) =>
      date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);

    return `${formatDateTime(departure)} - ${formatDateTime(arrival)}`;
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (index, field, value) => {
    setFormDataList((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    let bookingCodelist = [];
    try {
      for (const formData of formDataList) {
        const bookingData = {
          flight_id: outbound._id,
          total_amount: totalAmount / passengers,
          guest_info: {
            full_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            id_number: formData.idNumber,
            address: formData.address,
          },
          status: "pending",
        };

        if (returnFlight) {
          bookingData.return_flight_id = returnFlight._id;
        }
        let response;
        if (localStorage.getItem("role") != null) {
          response = await axios.post(
            "/bookings/user/createBooking",
            bookingData
          );
        } else {
          response = await axios.post("/bookings/createBooking", bookingData);
        }

        console.log("Booking created:", response);
        bookingCodelist.push(response._id);
      }

      setError(null);
      navigate("/TicketSuccess", { state: bookingCodelist });
    } catch (err) {
      console.error("Booking failed:", err);
      setError("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [selectedOption, setSelectedOption] = useState("VNPay");

  const qrImages = {
    VNPay: "assets/payments/qr-vnpay.png",
    MoMo: "assets/payments/qr-momo.png",
    Banking: "assets/payments/qr-banking.png",
  };

  return (
    <div className="booking-container">
      <div className="booking-user-info">
        <header className="quick-pick-banner">
          <div className="quick-pick-left">
            {/* <div className="icon-circle">
              <img src="assets/dufen_img.png" alt="User" />
            </div> */}
            <div className="quick-pick-text">
              <h3>Hoàn thành thông tin đặt vé</h3>
              <p>Chúc quý khách tận hưởng khi chọn QAirline</p>
            </div>
          </div>
        </header>

        <section className="form-container">
          {formDataList.map((formData, index) => (
            <div key={index} className="form-grid">
              Hành khách {index + 1}
              <br />
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Họ*"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange(index, "firstName", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Tên đệm & tên*"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange(index, "lastName", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) =>
                    handleInputChange(index, "birthDate", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Số điện thoại*"
                  value={formData.phone}
                  onChange={(e) =>
                    handleInputChange(index, "phone", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) =>
                    handleInputChange(index, "email", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="CCCD/CMND/Hộ chiếu*"
                  value={formData.idNumber}
                  onChange={(e) =>
                    handleInputChange(index, "idNumber", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Nơi ở hiện tại"
                  value={formData.address}
                  onChange={(e) =>
                    handleInputChange(index, "address", e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <div className="payment-section">
            <div className="payment-header">Chọn phương thức thanh toán</div>
            <div className="payment-options">
              {Object.keys(qrImages).map((option) => (
                <label key={option} className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                  />
                  <img src={qrImages[option]} alt={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? <ClipLoader size={20} /> : "Hoàn tất"}
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </section>
      </div>

      <aside className="booking-summary">
        <h3>Thông tin đặt chỗ</h3>
        <div className="flight-info">
          <h4>Chuyến đi</h4>
          <p>
            {outbound?.origin_airport_id.city} →{" "}
            {outbound?.destination_airport_id.city}
          </p>
          <p>
            {formatFlightDateTime(
              outbound?.scheduled_departure,
              outbound?.scheduled_arrival
            )}
          </p>
        </div>
        {returnFlight && (
          <div className="flight-info">
            <h4>Chuyến về</h4>
            <p>
              {returnFlight?.origin_airport_id.city} →{" "}
              {returnFlight?.destination_airport_id.city}
            </p>
            <p>
              {formatFlightDateTime(
                returnFlight?.scheduled_departure,
                returnFlight?.scheduled_arrival
              )}
            </p>
          </div>
        )}
        <div className="total">
          <h4>Tổng tiền</h4>
          <p>{totalAmount.toLocaleString()} VND</p>
        </div>
      </aside>
    </div>
  );
}

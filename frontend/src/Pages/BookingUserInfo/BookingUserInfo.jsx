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
  const { outbound, return: returnFlight, totalAmount } = location.state || {};
  const [formData, setFormData] = useState({
    gender: "Nam",
    firstName: "",
    lastName: "",
    birthDate: "",
    country: "Việt Nam",
    phone: "",
    email: "",
    idNumber: "",
    address: "",
  });

  const formatFlightDateTime = (departureTime, arrivalTime) => {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);

    const formatDate = (date) => {
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    const formatTime = (date) => {
      return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    };

    return `${formatDate(departure)} | ${formatTime(departure)} - ${formatTime(
      arrival
    )}`;
  };

  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [error, setError] = useState(null);
  const handleSubmit = async () => {
    const bookingData = {
      flight_id: outbound._id,
      total_amount: totalAmount,
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
    console.log("Booking data:", bookingData);

    if (returnFlight) {
      bookingData.return_flight_id = returnFlight.id;
    }

    setLoading(true); // Bắt đầu loading

    try {
      const response = await axios.post("/bookings/createBooking", bookingData);
      setError(null); // Reset lỗi nếu có
      console.log("Booking successful:", response);

      // Đợi 2 giây trước khi chuyển hướng để người dùng thấy hiệu ứng loading
      setTimeout(() => {
        navigate("/TicketSuccess", { state: response });
      }, 2000);
    } catch (error) {
      console.error("Booking failed:", error);
      setError("Booking failed. Please try again.");
      setLoading(false); // Kết thúc loading khi có lỗi
    }
  };

  const [selectedOption, setSelectedOption] = useState("VNPay"); // VNPay mặc định được chọn

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const qrImages = {
    VNPay: "assets/payments/qr-vnpay.png",
    MoMo: "assets/payments/qr-momo.png",
    Banking: "assets/payments/qr-banking.png",
  };

  return (
    <div className="booking-container">
      <div className="booking-user-info">
        <div className="quick-pick-banner">
          <div className="quick-pick-left">
            <div className="icon-circle">
              <img src="assets/dufen_img.png" alt="User" />
              {/* add src logo */}
            </div>
            <div className="quick-pick-text">
              <h3>Hoàn thành thông tin đặt vé</h3>
              <p>Chúc quý khách tận hưởng khi chọn QAirline</p>
            </div>
          </div>
        </div>

        {/* <div className="passenger-type">
          <div className="type-selector">
            <img src="/adult-icon.png" alt="Adult" />
            <span>Người lớn</span>
          </div>
        </div> */}

        <div className="form-container">
          <div className="gender-group">
            <div className="radio-group">
              <label className="radio-item">
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === "Nam"}
                  onChange={() => setSelectedGender("Nam")}
                />
                <span>Nam</span>
              </label>
              <label className="radio-item">
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === "Nữ"}
                  onChange={() => setSelectedGender("Nữ")}
                />
                <span>Nữ</span>
              </label>
              <label className="radio-item">
                <input
                  type="radio"
                  name="gender"
                  checked={selectedGender === "Khác"}
                  onChange={() => setSelectedGender("Khác")}
                />
                <span>Khác</span>
              </label>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                placeholder="Họ*"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Tên đệm & tên*"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                placeholder="Ngày sinh*"
                value={formData.birthDate}
                onChange={(e) =>
                  setFormData({ ...formData, birthDate: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Quốc gia*"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone number*"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group full-width">
              <input
                type="text"
                placeholder="CCCD/CMND/Hộ chiếu*"
                value={formData.idNumber}
                onChange={(e) =>
                  setFormData({ ...formData, idNumber: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group full-width">
            <input type="text" placeholder="Nơi ở hiện tại" />
          </div>

          <div className="payment">
            <div className="payment-header">Chọn phương thức thanh toán</div>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="VNPay"
                  checked={selectedOption === "VNPay"}
                  onChange={handleOptionChange}
                />
                <img src="assets/payments/vnpay.png" alt="VNPay" className="payment-image" />
                <span className="payment-title">VNPay</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="MoMo"
                  checked={selectedOption === "MoMo"}
                  onChange={handleOptionChange}
                />
                <img src="assets/payments/momo.png" alt="MoMo" className="payment-image" />
                <span className="payment-title">MoMo</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="Banking"
                  checked={selectedOption === "Banking"}
                  onChange={handleOptionChange}
                />
                <img src="assets/payments/banking.webp" alt="Banking" className="payment-image" />
                <span className="payment-title">Banking</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="Thanh toán tại quầy"
                  checked={selectedOption === "Thanh toán tại quầy"}
                  onChange={handleOptionChange}
                />
                <img src="assets/payments/counter.jpg" alt="Thanh toán tại quầy" className="payment-image" />
                <span className="payment-title">Thanh toán tại quầy</span>
              </label>
            </div>
            <div className="payment-selected">
              <p>Bạn đã chọn: {selectedOption}</p>
            </div>
            {selectedOption !== "Thanh toán tại quầy" && (
              <div className="payment-qr">
                <h3>Mã QR của bạn</h3>
                <img
                  src={qrImages[selectedOption]}
                  alt={`QR Code for ${selectedOption}`}
                  className="qr-image"
                />
              </div>
            )}
          </div>
          <div className="terms-section">
            <label className="checkbox-item">
              <button className="btn-submit" onClick={handleSubmit}>
                Hoàn tất
              </button>
              {loading && (
                <div className="loading-overlay">
                  <div className="loading-spinner">
                    <ClipLoader color="#00f" size={50} />
                  </div>
                </div>
              )}

              {error && <div className="error-message">{error}</div>}
            </label>
          </div>
        </div>
      </div>

      <div className="booking-summary">
        <div className="summary-header">THÔNG TIN ĐẶT CHỖ</div>
        <div className="summary-content">
          <h3>Thông tin hành khách</h3>

          <div className="flight-info">
            <h4>Chuyến đi</h4>
            <div className="price">
              {outbound?.price.toLocaleString() + " VND"}
            </div>
            <div className="route">
              <div className="route-info">
                <span>
                  {outbound.origin_airport_id.city +
                    " (" +
                    outbound.origin_airport_id.city +
                    ")"}
                </span>
                <span className="arrow">→</span>
                <br />
                <span>
                  {outbound.destination_airport_id.city +
                    " (" +
                    outbound.destination_airport_id.city +
                    ")"}
                </span>
              </div>
              <div className="date-time">
                {formatFlightDateTime(
                  outbound.scheduled_arrival,
                  outbound.scheduled_departure
                )}
              </div>
            </div>
            <div className="price-breakdown">
              <div className="price-item">
                <span>Giá vé</span>
                <span>{outbound?.price.toLocaleString() + " VND"}</span>
              </div>
              <div className="price-item">
                <span>Thuế, phí</span>
                <span>
                  {(outbound?.price * 0.05).toLocaleString() + " VND"}
                </span>
              </div>
              <div className="price-item">
                <span>Dịch vụ</span>
                <span>0 VND</span>
              </div>
            </div>
          </div>

          {returnFlight && (
            <div className="flight-info">
              <h4>Chuyến về</h4>
              <div className="price">{returnFlight?.price}</div>
              <div className="route">
                <div className="route-info">
                  <span>
                    {" "}
                    {returnFlight?.origin_airport_id.city +
                      " (" +
                      returnFlight?.origin_airport_id.city +
                      ")"}
                  </span>
                  <span className="arrow">→</span>
                  <span>
                    {" "}
                    {returnFlight?.destination_airport_id.city +
                      " (" +
                      returnFlight?.destination_airport_id.city +
                      ")"}
                  </span>
                </div>
                <div className="date-time">
                  {" "}
                  {formatFlightDateTime(
                    returnFlight?.scheduled_arrival,
                    returnFlight?.scheduled_departure
                  )}
                </div>
              </div>
              <div className="price-breakdown">
                <div className="price-item">
                  <span>Giá vé</span>
                  <span>{returnFlight?.price} VND</span>
                </div>
                <div className="price-item">
                  <span>Thuế, phí</span>
                  <span>
                    {console.log(returnFlight?.price)}
                    {(returnFlight?.price * 0.05).toLocaleString() + " VND "}
                  </span>
                </div>
                <div className="price-item">
                  <span>Dịch vụ</span>
                  <span>0 VND</span>
                </div>
              </div>
            </div>
          )}
          {!returnFlight && (
            <div className="total">
              <span>Tổng tiền</span>
              <span className="total-amount">
                {outbound?.price + outbound?.price * 0.05}
              </span>
            </div>
          )}
          {returnFlight && (
            <div className="total">
              <span>Tổng tiền</span>
              <span className="total-amount">
                {outbound?.price +
                  returnFlight?.price +
                  (outbound?.price + returnFlight?.price) * 0.05}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

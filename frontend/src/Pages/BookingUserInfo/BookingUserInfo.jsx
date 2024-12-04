// BookingUserInfo.jsx
import { useState } from "react";
import "./BookingUserInfo.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../Apis/axios";
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
    idType: "",
    idNumber: "",
    idCountry: "Việt Nam",
    idExpiry: "",
    address: "",
  });
  const handleSubmit = async () => {
    const bookingData = {
      flight_id: outbound.id,
      total_amount: totalAmount,
      guest_info: {
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,
        birth_date: formData.birthDate,
        id_type: formData.idType,
        id_number: formData.idNumber,
        address: formData.address,
      },
      status: "pending",
    };

    if (returnFlight) {
      bookingData.return_flight_id = returnFlight.id;
    }
    try {
      const response = await axios.post("/bookings/createBooking", bookingData);
      // navigate("/booking-confirmation");
      console.log("Booking successful:", response);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Đặt vé thất bại. Vui lòng thử lại.");
    }
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

        <div className="passenger-type">
          <div className="type-selector">
            <img src="/adult-icon.png" alt="Adult" />
            <span>Người lớn</span>
          </div>
        </div>

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
                placeholder="CCCĐ/CMND/Hộ chiếu*"
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

          <div className="terms-section">
            <label className="checkbox-item">
              <button className="btn-submit" onClick={handleSubmit}>
                Hoàn tất
              </button>
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
            <div className="price">3.812.600 VND</div>
            <div className="route">
              <div className="route-info">
                <span>Tp. Hồ Chí Minh (SGN)</span>
                <span className="arrow">→</span>
                <br />
                <span>Hà Nội (HAN)</span>
              </div>
              <div className="date-time">14/02/2024 | 05:20 - 07:30</div>
            </div>
            <div className="price-breakdown">
              <div className="price-item">
                <span>Giá vé</span>
                <span>3.229.200 VND</span>
              </div>
              <div className="price-item">
                <span>Thuế, phí</span>
                <span>583.400 VND</span>
              </div>
              <div className="price-item">
                <span>Dịch vụ</span>
                <span>0 VND</span>
              </div>
            </div>
          </div>

          <div className="flight-info">
            <h4>Chuyến về</h4>
            <div className="price">3.834.200 VND</div>
            <div className="route">
              <div className="route-info">
                <span>Hà Nội (HAN)</span>
                <span className="arrow">→</span>
                <span>Tp. Hồ Chí Minh (SGN)</span>
              </div>
              <div className="date-time">15/02/2024 | 05:30 - 07:40</div>
            </div>
            <div className="price-breakdown">
              <div className="price-item">
                <span>Giá vé</span>
                <span>3.250.800 VND</span>
              </div>
              <div className="price-item">
                <span>Thuế, phí</span>
                <span>583.400 VND</span>
              </div>
              <div className="price-item">
                <span>Dịch vụ</span>
                <span>0 VND</span>
              </div>
            </div>
          </div>

          <div className="total">
            <span>Tổng tiền</span>
            <span className="total-amount">7.646.800 VND</span>
          </div>
        </div>
      </div>
    </div>
  );
}

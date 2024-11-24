// BookingUserInfo.jsx
import { useState } from "react";
import "./BookingUserInfo.scss";

export default function BookingUserInfo() {
  const [selectedGender, setSelectedGender] = useState("Nam");

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
              <input type="text" placeholder="Họ*" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Tên đệm & tên*" />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Ngày sinh*(DD/MM/YYYY)" />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Quốc gia*"
                defaultValue="Việt Nam"
              />
            </div>
            <div className="form-group phone-group">
              <select className="country-code">
                <option value="+84">+84</option>
              </select>
              <input type="tel" placeholder="Số điện thoại*" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email*" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Loại giấy tờ tùy thân" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Số" />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Quốc gia cấp"
                defaultValue="Việt Nam"
              />
            </div>
            <div className="form-group">
              <input type="date" placeholder="Ngày hết hạn(DD/MM/YYYY)" />
            </div>
          </div>

          <div className="form-group full-width">
            <input type="text" placeholder="Nơi ở hiện tại" />
          </div>

          <div className="notification-section">
            <div className="notification-options">
              <label className="checkbox-item">
                <span>Nhận thông tin hành trình qua email</span>
              </label>
            </div>
          </div>

          <div className="terms-section">
            <label className="checkbox-item">
              <button className="btn-submit"> Hoàn tất</button>
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

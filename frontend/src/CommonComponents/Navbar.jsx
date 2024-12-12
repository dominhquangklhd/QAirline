import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthProvider";
const Navbar = ({ onSearchClick }) => {
  const { isLoggedIn, username, logout } = useAuth();

  const [showPopover, setShowPopover] = useState(false); // Hiển thị popover
  const navigate = useNavigate();

  // Điều hướng
  const navigateTo = (endpoint) => {
    navigate(endpoint);
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    logout();
    navigateTo("/");
  };

  // Toggle popover
  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div className="logoDiv">
          <img src="./assets/Qlogo.png" alt="Logo" />
        </div>

        <ul className="items flex">
          <li className="itemButton">
            <button onClick={onSearchClick}>Đặt vé ngay</button>
          </li>
          <li className="listItem" onClick={() => navigateTo("/")}>
            Trang chủ
          </li>
          <li className="listItem" onClick={() => navigateTo("/FlightInfo")}>
            Thông tin chuyến bay
          </li>
          <li className="listItem" onClick={() => navigateTo("/CancelFlight")}>
            Hủy vé
          </li>
        </ul>

        <div className="none flex">
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Ngôn ngữ
          </li>
        </div>

        <div className="atb flex">
          {!isLoggedIn ? (
            <>
              <span onClick={() => navigateTo("/LoginPage")}>Đăng nhập</span>
              <span
                className="signUp"
                onClick={() => navigateTo("/RegisterPage")}
              >
                Đăng ký
              </span>
            </>
          ) : (
            <>
              <span onClick={togglePopover} className="username">
                Xin chào, {username}
              </span>
              {showPopover && (
                <div className="popover">
                  <ul>
                    <li onClick={() => navigateTo("/profile")}>
                      Thông tin cá nhân
                    </li>
                    <li onClick={handleLogout}>Đăng xuất</li>
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onSearchClick: PropTypes.func,
};

export default Navbar;

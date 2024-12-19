import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
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
        <Link to={"/"}>
          <div className="logoDiv">
            <img src="./assets/Qlogo-nobg.png" alt="Logo" />
          </div>
        </Link>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  style={{
                    width: "14px",
                    height: "14px",
                    verticalAlign: "middle",
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                Xin chào,
                {" " + username}
              </span>
              {showPopover && (
                <div className="popover">
                  <ul>
                    <li onClick={() => navigateTo("/profile")}>
                      Thông tin cá nhân
                    </li>
                    <li onClick={() => navigateTo("/HomeAdmin")}>Quản trị viên</li>
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

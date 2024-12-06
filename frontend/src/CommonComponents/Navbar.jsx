import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import PropTypes from 'prop-types'; 
import { useNavigate } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage";


const Navbar = ({ onSearchClick }) => {
  let login = false;
  const navigate = useNavigate();

  const navigateTo = ( endpoint ) => {
    navigate(endpoint);
  }

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div className="logoDiv">
          <img src="./assets/Qlogo.png" alt="" />
        </div>

        <ul className="items flex">
          <li className="itemButton">
            <button onClick={onSearchClick}>Đặt vé ngay</button>
          </li>
          <li className="listItem" onClick={() => navigateTo("/")}>Trang chủ</li>
          <li className="listItem" onClick={() => navigateTo("/FlightInfo")}>Thông tin chuyến bay</li>
          <li className="listItem" onClick={() => navigateTo("/CancelFlight")}>Hủy vé</li>
        </ul>

        <div className="none flex">
          {/* <li className="flex"><BsPhoneVibrate className="icon" />Hỗ trợ</li> */}
          <li className="flex">
            <AiOutlineGlobal className="icon" />Ngôn ngữ
          </li>
        </div>

        <div className="atb flex">
          {!login ? <span onClick={() => navigateTo("/LoginPage")}>Đăng nhập</span> : <span>Đăng xuất</span>}
          <span className="signUp">Đăng ký</span>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onSearchClick: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Navbar;

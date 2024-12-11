import { AiOutlineGlobal } from "react-icons/ai";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import "./NavbarAdmin.scss"

const NavbarAdmin = () => {
  let login = false;
  const navigate = useNavigate();

  const navigateTo = (endpoint) => {
    navigate(endpoint);
  }

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div className="logoDiv">
          <img src="./assets/Qlogo.png" alt="" />
        </div>

        <ul className="items flex">
          <li className="listItem" onClick={() => navigateTo("/")}>Trang chủ</li>
          <li className="listItem" onClick={() => navigateTo("/")}>Đăng thông tin</li>
          <li className="listItem" onClick={() => navigateTo("/AircraftInfo")}>Tàu bay</li>
          <li className="listItem" onClick={() => navigateTo("/FlightInfo")}>Chuyến bay</li>
          <li className="listItem" onClick={() => navigateTo("/")}>Vé</li>
        </ul>

        <div className="none flex">
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

NavbarAdmin.propTypes = {
  onSearchClick: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default NavbarAdmin;

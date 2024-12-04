// import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import PropTypes from "prop-types";
import "./Header.scss"

const Header = () => {
  let login = false;

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div className="logoDiv">
          <img src="./assets/Qlogo.png" alt="" />
        </div>

        <ul className="items flex">
          <li className="listItem nohidden">Trang chủ</li>
          <li className="listItem">Thông tin chuyến bay</li>
          <li className="listItem">Hủy vé</li>
        </ul>

        <div className="none flex">
          {/* <li className="flex"><BsPhoneVibrate className="icon" />Hỗ trợ</li> */}
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Ngôn ngữ
          </li>
        </div>

        <div className="atb flex">
          {!login ? <span>Đăng nhập</span> : <span>Đăng xuất</span>}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearchClick: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default Header;

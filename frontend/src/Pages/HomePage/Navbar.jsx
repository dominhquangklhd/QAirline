import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  let login = false;

  return (
    <div className='navBar flex'>
        <div className='navBarOne flex'>
          <div className="logoDiv">
            <img src="./assets/Qlogo.png" alt="" />
          </div>


          <ul className="items flex">
            <li className="itemButton"><button>Đặt vé ngay</button></li>
            <li className="listItem">Thông tin chuyến bay</li>
            <li className="listItem">Hủy vé</li>
          </ul>

          <div className='none flex'>
            {/* <li className='flex'><BsPhoneVibrate className='icon'/>Hỗ trợ</li> */}
            <li className='flex'><AiOutlineGlobal className='icon'/>Ngôn ngữ</li>
          </div>

          <div className="atb flex">
            {!login ? <span>Đăng nhập</span> : <span>Đăng xuất</span>}
          </div>
        </div>
    </div>
  );

};

export default Navbar;

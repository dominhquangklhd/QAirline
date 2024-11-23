import React from "react";
import "./Header.scss";
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src="./assets/logo.png" alt="Logo" />
        <span>QAirline</span>
      </div>
      <div className='none flex'>
            <li className='flex'><BsPhoneVibrate className='icon'/>Hỗ trợ</li>
            <li className='flex'><AiOutlineGlobal className='icon'/>Ngôn ngữ</li>
          </div>
      <div className="auth-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-logout">Logout</button>
      </div>
    </header>
  );
};

export default Header;

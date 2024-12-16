import React, { useState } from 'react';
import './LoginPage.scss';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const navigateTo = ( endpoint ) => {
    navigate(endpoint);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login flightInfo">
      <div className="content login-content">
        <h2>Đăng nhập</h2>
        <div className="content-fill col">
          <div className="input-area">
            <input type="text" placeholder=" " />
            <label htmlFor="">Email/Số điện thoại</label>
          </div>

          <div className="input-area">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder=" "
              className="input-pw"
            />
            <label htmlFor="">Mật khẩu</label>
            <img
              src={
                showPassword
                  ? './assets/eye-open.png'
                  : './assets/eye-close.png'
              }
              alt="Toggle Password Visibility"
              className="eye"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <div className="forgot-pw">
          <span className='su' onClick={() => navigateTo("/RegisterPage")}>Đăng ký</span>
          <span onClick={() => navigateTo("/ForgotPW")}>Quên mật khẩu</span>
        </div>
        
        <div className='findingBut'>
          <button>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React from 'react'

function ConfirmOTP() {
  return (
    <div className='confirmOTP content'>
      <button className="close-btn" onClick={() => alert('Đã thoát!')}>
        ✕
      </button>
      <h2>Xác nhận OTP</h2>
      <p>Để thực hiện giao dịch, Quý khách vui lòng nhập mã xác thực đã được gửi tới email abc123@gmail.com</p>
      <div className='content-fill'>
        <div className="input-area">
          <input type="text" placeholder=' ' />
          <label htmlFor="">Mã OTP</label>
        </div>
      </div>
      <div className='buts'>
        <div className='findingBut OTPBut'>
          <button>Gửi lại</button>
        </div>
        <div className='findingBut OTPBut'>
          <button>Xác thực</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmOTP
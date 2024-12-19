import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmOTP({ email, onConfirm, onClose, onResendOTP }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!otp.trim()) {
      alert("Vui lòng nhập mã OTP");
      return;
    }
    // thêm react toast huỷ thành công vào đây
    toast.success("Huỷ đặt chỗ thành công", { position: "top-right" });
    setTimeout(() => {
      navigate("/");
    }, 1000); // Chờ 2 giây trước khi chuyển trang
  };

  return (
    <div className="confirmOTP content">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>
      <h2>Xác nhận OTP</h2>
      <p>
        Để thực hiện giao dịch, Quý khách vui lòng nhập mã xác thực đã được gửi
        tới email {email}
      </p>
      <div className="content-fill">
        <div className="input-area">
          <input
            type="text"
            placeholder=" "
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <label>Mã OTP</label>
        </div>
      </div>
      <div className="buts">
        <div className="findingBut OTPBut">
          <button onClick={onResendOTP}>Gửi lại</button>
        </div>
        <div className="findingBut OTPBut">
          <button onClick={handleSubmit}>Xác thực</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmOTP;

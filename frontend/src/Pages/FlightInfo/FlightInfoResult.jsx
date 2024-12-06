import React from 'react'
import { FaPlane } from "react-icons/fa";

function FlightInfoResult() {
  return (
    <div className='flightInfoResult'>
        <div className='cancelBut'>
            <button>Huỷ vé</button>
        </div>
        <div className="header">
            <div className='basicInfo'>
                <div className="nameCus">
                    <p>ĐÃ CHUẨN BỊ CHO</p>
                    <h2>NGUYỄN VĂN A</h2>
                </div>
                <div className="code">
                    <p>MÃ ĐẶT CHỖ <span>ABC123</span></p>
                </div>
            </div>
            <div className="logoDiv">
                <img src="/assets/Qlogo.png" alt="" className='logoImg'/>
                <h1>QAIRLINE</h1>
            </div>
        </div>
        <div className="contentRes">
            <div className="contentHeader">
                <FaPlane className='icon' />
                <div className="timeline">
                    <p className='t1'>KHỞI HÀNH:<strong>THỨ .. NGÀY .. THÁNG .. </strong> 
                        <span className="triangle-right"></span>
                        ĐẾN: <strong>THỨ .. NGÀY .. THÁNG ..</strong>
                    </p>
                    <p>Vui lòng kiểu tra thời gian bay trước khi khởi hành</p>
                </div>
            </div>
            <div className="contentBody">
                <div className="leftBody">
                    <h1>QAIRLINE</h1>
                    <div>
                        <p>Thời gian bay:</p>
                        <p>2 tiếng 10 phút</p>
                    </div>
                    <div>
                        <p>Khoang:</p>
                        <p>Phổ thông</p>
                    </div>
                    <div>
                        <p>Tình trạng chỗ:</p>
                        <p>Đã xác nhận</p>
                    </div>
                </div>
                <div className="rightBody">
                    <div className='leftDiv'>
                        <div className="goto">
                            <div className="loca">
                                <h2>SGN</h2>
                                <h4>HO CHI MINH CITY, VIETNAM</h4>
                            </div>
                            <div className="triangle-right"></div>
                            <div className="loca mr">
                                <h2>HAN</h2>
                                <h4>HA NOI, VIETNAM</h4>
                            </div>
                        </div>
                        <div className="time">
                            <div className="showTime timeGo">
                                <div className='path1'>
                                    <p>Giờ khởi hành:</p>
                                    <h2>22:00</h2>
                                    <h4>Ngày 27 tháng 6</h4>
                                </div>
                                <div className="path2">
                                    <p>Cổng:</p>
                                    <p>TERMINAL 1</p>
                                </div>
                            </div>
                            <div className='showTime timeCome'>
                                <div className='path1'>
                                    <p>Giờ đến:</p>
                                    <h2>00:10</h2>
                                    <h4>Ngày 28 tháng 6</h4>
                                </div>
                                <div className="path2">
                                    <p>Cổng:</p>
                                    <p>TERMINAL 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="infoR">
                            <p>Máy bay:</p>
                            <p>AIRBUS INDUSTRIE</p>
                            <p>A321 JET</p>
                        </div>
                        <div className="infoR">
                            <p>Quãng đường đi</p>
                            <p>(Km):</p>
                            <p>1000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contentFooter">
                <div className="f1">
                    <div className='top'>
                        <p>Tên hành khách:</p>
                    </div>
                    <div className='bot'>
                        <p>Nguyễn Văn A</p>
                    </div>
                </div>
                <div className="f2">
                    <div className='top'>
                        <p>Ghế:</p>
                    </div>
                    <div className='bot'>
                        <p>Được thông báo khi check in</p>
                    </div>
                </div>
                <div className="f3">
                    <div className='top'>
                        <p>Biên nhận ticket:</p>
                    </div>
                    <div className='bot'>
                        <p>123456789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightInfoResult
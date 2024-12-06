import React from 'react'
import "./FlightInfo.scss"
import FlightInfoResult from './FlightInfoResult'
import NotExistFlight from '../../CommonComponents/NotExistFlight'

//Find & Show ticket info
function FlightInfo() {
  return (
    <div className='flightInfo'>
      <h1 className='title'>Thông tin chuyến bay</h1>
      <div className="content">
        <button className='buttop'>Mã đặt chỗ/Số vé điện tử</button>
        <div className="content-fill">
          <div className="input-area">
            <input type="text" placeholder=' ' />
            <label htmlFor="">Mã đặt chỗ/Số vé điện tử</label>
          </div>
          <div className="input-area">
            <input type="text" placeholder=' ' />
            <label htmlFor="">Email</label>
          </div>
          <div className="input-area">
            <input type="text" placeholder=' ' />
            <label htmlFor="">Số điện thoại</label>
          </div>
        </div>
        <div className='findingBut'>
          <button>Tìm kiếm</button>
        </div>
      </div>

      <FlightInfoResult/>
      <NotExistFlight/>
    </div>
  )
}

export default FlightInfo
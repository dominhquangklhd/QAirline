import React from 'react'
import "./CancelFlight.scss"
import RequestCancel from './RequestCancel'
import ConfirmCancel from './ConfirmCancel'
import ConfirmOTP from './ConfirmOTP'
import NotExistFlight from '../../CommonComponents/NotExistFlight'

function CancelFlight() {
    return (
        <div className='flightInfo'>
            <h1 className='title'>Huỷ đặt chỗ</h1>
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
                    <button>Tiếp tục</button>
                </div>
            </div>
            <RequestCancel />
            <ConfirmCancel />
            <ConfirmOTP />
            <NotExistFlight />
        </div>
    )
}

export default CancelFlight
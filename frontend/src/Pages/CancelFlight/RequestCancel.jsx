import React from 'react'

function RequestCancel() {
  return (
    <div className='requestCancel'>
        <div className="header">
            <h2 className='blue'>YÊU CẦU HỦY ĐẶT CHỖ</h2>
        </div>
        <div className="content">
            <div className="code">
                <p className='blue'>Mã đặt chỗ: ABC123</p>
            </div>
            <div className="customer box">
                <input type="checkbox" />
                <div className="left">
                    <p>Hành khách</p>
                    <p className='blue'>NGUYỄN VĂN A</p>
                </div>
                <div className="right">
                    <p>Số vé</p>
                    <p className='blue'>123456789</p>
                </div>
            </div>
            <div className="journey box">
                <input type="checkbox" />
                <div>
                    <p className='blue'>Hành trình</p>
                    <p>Thành phố Hồ Chí Minh (SGN) - Hà Nội (HAN) - (Ngày tháng năm đi) (Giờ đi)</p>
                </div>
            </div>
            <div className="acpt box">
                <input type="checkbox" />
                <p>Chấp nhận điều khoản hủy chỗ</p>
            </div>
            <div className='findingBut'>
                <button>Tiếp tục</button>
            </div>
        </div>
    </div>
  )
}

export default RequestCancel
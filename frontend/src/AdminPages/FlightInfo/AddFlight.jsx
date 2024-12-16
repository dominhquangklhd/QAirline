import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddFlight({ onAddFlight }) {
    const [newFlight, setNewFlight] = useState({
        id: '',
        origin_airport_id: '',
        destination_airport_id: '',
        scheduled_departure: '',
        scheduled_arrival: '',
        status: '',
        base_price: '', 
        available_seats: '',
    });

    const handleAddFlight = () => {
        console.log("ran");
        if (newFlight.id && newFlight.origin_airport_id && newFlight.destination_airport_id && newFlight.scheduled_departure && newFlight.scheduled_arrival && newFlight.status && newFlight.base_price && newFlight.available_seats) {
            onAddFlight(newFlight);
            // Reset form sau khi thêm chuyến bay mới
            setNewFlight({
                id: '',
                origin_airport_id: '',
                destination_airport_id: '',
                scheduled_departure: '',
                scheduled_arrival: '',
                status: '',
                base_price: '', 
                available_seats: '',
            });
            alert("Thêm thành công chuyến bay " + newFlight.id)
        } else {
            alert('Vui lòng nhập đầy đủ thông tin!');
        }
    };

    return (
        <div className="addFlightForm">
            <div className="addContent">
                <h3>Thêm Chuyến Bay</h3>
                <input
                    type="text"
                    placeholder="Mã chuyến bay"
                    value={newFlight.id}
                    onChange={(e) => setNewFlight({ ...newFlight, id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Xuất phát từ"
                    value={newFlight.origin_airport_id}
                    onChange={(e) => setNewFlight({ ...newFlight, origin_airport_id: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Điểm đến"
                    value={newFlight.destination_airport_id}
                    onChange={(e) => setNewFlight({ ...newFlight, destination_airport_id: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Thời gian cất cánh dự kiến"
                    value={newFlight.scheduled_departure}
                    onChange={(e) => setNewFlight({ ...newFlight, scheduled_departure: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Thời gian hạ cánh dự kiến"
                    value={newFlight.scheduled_arrival}
                    onChange={(e) => setNewFlight({ ...newFlight, scheduled_arrival: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Trạng thái"
                    value={newFlight.status}
                    onChange={(e) => setNewFlight({ ...newFlight, status: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Giá vé"
                    value={newFlight.base_price}
                    onChange={(e) => setNewFlight({ ...newFlight, base_price: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Số ghế khả dụng"
                    value={newFlight.available_seats}
                    onChange={(e) => setNewFlight({ ...newFlight, available_seats: e.target.value })}
                />
                <button className="addButton" onClick={handleAddFlight}>
                    Thêm chuyến bay
                </button>
                {/* <button className='cancelButton' onClick={}>Huỷ</button> */}
            </div>
        </div>
    );
}

AddFlight.propTypes = {
    onAddFlight: PropTypes.func.isRequired,
    setAddFlight: PropTypes.func.isRequired,
};

export default AddFlight;

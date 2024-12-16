import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddAircraft({ onAddAircraft }) {
    const [newAircraft, setNewAircraft] = useState({
        id: '',
        manufacturer: '',
        model: '',
        total_seats: '',
        manufacture_date: '',
    });

    const handleAddAircraft = () => {
        if (newAircraft.id && newAircraft.manufacturer && newAircraft.model && newAircraft.total_seats && newAircraft.manufacture_date) {
            onAddAircraft(newAircraft);
            // Reset form sau khi thêm tàu bay mới
            setNewAircraft({
                id: '',
                manufacturer: '',
                model: '',
                total_seats: '',
                manufacture_date: '',
            });
            alert("Thêm thành công tàu bay " + newAircraft.id)
        } else {
            alert('Vui lòng nhập đầy đủ thông tin!');
        }
    };

    return (
        <div className="addAircraftForm">
            <div className="addContent">
                <h3>Thêm Tàu Bay</h3>
                <div className="form-columns">
                    <div className="column">
                        <input
                            type="text"
                            placeholder="Mã tàu bay"
                            value={newAircraft.id}
                            onChange={(e) => setNewAircraft({ ...newAircraft, id: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Nhà sản xuất"
                            value={newAircraft.manufacturer}
                            onChange={(e) => setNewAircraft({ ...newAircraft, manufacturer: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Mô hình"
                            value={newAircraft.model}
                            onChange={(e) => setNewAircraft({ ...newAircraft, model: e.target.value })}
                        />
                    </div>
                    <div className="column">
                        <input
                            type="number"
                            placeholder="Tổng số ghế ngồi"
                            value={newAircraft.total_seats}
                            onChange={(e) => setNewAircraft({ ...newAircraft, total_seats: e.target.value })}
                        />
                        <input
                            type="date"
                            placeholder="Ngày sản xuất"
                            value={newAircraft.manufacture_date}
                            onChange={(e) => setNewAircraft({ ...newAircraft, manufacture_date: e.target.value })}
                        />
                        <button className="addButton" onClick={handleAddAircraft}>
                            Thêm tàu bay
                        </button>
                        {/* <button className='cancelButton' onClick={}>Huỷ</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

AddAircraft.propTypes = {
    onAddAircraft: PropTypes.func.isRequired,
    setAddAircraft: PropTypes.func.isRequired,
};

export default AddAircraft;

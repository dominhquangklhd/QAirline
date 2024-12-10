import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AircraftResult({ aircraft }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableAircraft, setEditableAircraft] = useState(aircraft);

    useEffect(() => {
        setEditableAircraft(aircraft);
    }, [aircraft]);


    const handleChange = (key, value) => {
        setEditableAircraft((prev) => ({
            ...prev,
            [key]: value,
        }));
    };    

    const handleEditClick = () => {
        if (isEditing) {
            console.log("Lưu thay đổi:", editableAircraft);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="flightInfo aircraftResult">
            <div className="content">
                <button className="editButton" onClick={handleEditClick}>
                    {isEditing ? "Lưu" : "Sửa"}
                </button>
                <ul>
                    <li>
                        Mã tàu bay:{" "}
                        {isEditing ? (
                            <input
                                type="text"
                                value={editableAircraft.id}
                                onChange={(e) => handleChange("id", e.target.value)}
                            />
                        ) : (
                            <span>{editableAircraft.id}</span>
                        )}
                    </li>
                    <li>
                        Nhà sản xuất:{" "}
                        {isEditing ? (
                            <input
                                type="text"
                                value={editableAircraft.manufacturer}
                                onChange={(e) => handleChange("manufacturer", e.target.value)}
                            />
                        ) : (
                            <span>{editableAircraft.manufacturer}</span>
                        )}
                    </li>
                    <li>
                        Mô hình:{" "}
                        {isEditing ? (
                            <input
                                type="text"
                                value={editableAircraft.model}
                                onChange={(e) => handleChange("model", e.target.value)}
                            />
                        ) : (
                            <span>{editableAircraft.model}</span>
                        )}
                    </li>
                    <li>
                        Tổng số ghế ngồi:{" "}
                        {isEditing ? (
                            <input
                                type="number"
                                value={editableAircraft.total_seats}
                                onChange={(e) => handleChange("total_seats", e.target.value)}
                            />
                        ) : (
                            <span>{editableAircraft.total_seats}</span>
                        )}
                    </li>
                    <li>
                        Ngày sản xuất:{" "}
                        {isEditing ? (
                            <input
                                type="date"
                                value={editableAircraft.manufacture_date}
                                onChange={(e) => handleChange("manufacture_date", e.target.value)}
                            />
                        ) : (
                            <span>{editableAircraft.manufacture_date}</span>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

// Định nghĩa PropTypes
AircraftResult.propTypes = {
    aircraft: PropTypes.shape({
        id: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        total_seats: PropTypes.number.isRequired,
        manufacture_date: PropTypes.string.isRequired,
    }).isRequired,
};

export default AircraftResult;

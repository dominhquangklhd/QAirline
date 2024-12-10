import React, { useState } from 'react';
import './AircraftInfo.scss';
import AircraftResult from './AircraftResult';
import AddAircraft from './AddAircraft';

const Status = {
    SEARCH: 'search',
    SHOWALL: 'showall',
    ADD: 'add',
};

function AircraftInfo() {
    const [aircraftList, setAircraftList] = useState([
        { id: "A350", manufacturer: "Airbus", model: "A350", total_seats: 300, manufacture_date: "2016-05-15" },
        { id: "B787", manufacturer: "Boeing", model: "787 Dreamliner", total_seats: 250, manufacture_date: "2018-03-20" },
    ]);
    const [searchId, setSearchId] = useState('');
    const [selectedAircraft, setSelectedAircraft] = useState(null);
    const [action, setAction] = useState("");

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        const result = aircraftList.find((aircraft) => aircraft.id.toLowerCase() === searchId.toLowerCase());
        setSelectedAircraft(result || null);
        setAction(Status.SEARCH);
    };

    // Hàm xử lý sự kiện nhấn phím Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Hàm để thêm tàu bay mới
    const handleAddAircraft = (newAircraft) => {
        setAircraftList([...aircraftList, newAircraft]);
    };

    return (
        <div className="aircraftInfo">
            <div className="searchBarContainer">
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Nhập mã tàu bay để tìm kiếm"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)} // Cập nhật trạng thái khi người dùng nhập
                    onKeyDown={handleKeyDown} // Gọi handleSearch khi nhấn Enter
                />
                <button className="addButton findButton" onClick={handleSearch}>
                    Tìm kiếm & Sửa
                </button>
                <button className="addButton" onClick={() => setAction(Status.SHOWALL)}>
                    Tất cả tàu bay
                </button>
                <button className="addButton" onClick={() => setAction(Status.ADD)}>
                    Thêm tàu bay
                </button>
            </div>

            {action === Status.SHOWALL && (
                <div className="aircraftTable">
                    {aircraftList.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nhà sản xuất</th>
                                    <th>Model</th>
                                    <th>Số ghế</th>
                                    <th>Ngày sản xuất</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aircraftList.map((aircraft) => (
                                    <tr key={aircraft.id}>
                                        <td>{aircraft.id}</td>
                                        <td>{aircraft.manufacturer}</td>
                                        <td>{aircraft.model}</td>
                                        <td>{aircraft.total_seats}</td>
                                        <td>{aircraft.manufacture_date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Chưa có tàu bay nào.</p>
                    )}
                </div>
            )}

            {action === Status.ADD && (
                <AddAircraft onAddAircraft={handleAddAircraft} />
            )}

            {action === Status.SEARCH && (
                selectedAircraft ? (
                    <AircraftResult aircraft={selectedAircraft} />
                ) : (
                    <p>Không tìm thấy tàu bay.</p>
                )
            )
            }
        </div>
    );
}

export default AircraftInfo;

import React, {useState} from "react";
import './FlightInfo.scss';
import AddFlight from "./AddFlight";
import FlightResult from "./FlightResult";

const Status = {
    SEARCH: 'search',
    SHOWALL: 'showall',
    ADD: 'add',
};

function FlightInfo() {
    const [flightList, setFlightList] = useState([
        { id: "VN-A888", origin_airport_id: "HAN", destination_airport_id: "SGN", scheduled_departure: "2024-12-15", scheduled_arrival:"2024-12-15", status: "scheduled", base_price: "3,000,000 đ", available_seats: "12"},
        { id: "VN-A862", origin_airport_id: "SGN", destination_airport_id: "DAD", scheduled_departure: "2024-12-17", scheduled_arrival:"2024-12-18", status: "delayed", base_price: "3,000,000 đ", available_seats: "4"}
    ]);

    const [searchId, setSearchId] = useState('');
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [action, setAction] = useState('');

    // Hàm xử lý tìm kiếm
    const handleSearch = () => {
        const result = flightList.find((flight) => flight.id.toLowerCase() === searchId.toLowerCase());
        setSelectedFlight(result || null);
        setAction(Status.SEARCH);
    }

    // Hàm xử lý nhấn phím Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Hàm để thêm chuyến bay mới
    const handleAddFlight = (newFlight) => {
        setFlightList([...flightList, newFlight]);
    };

    return (
        <div className="flightInfo">
            <div className="searchBarContainer">
                <input
                    type="text"
                    className="searchInput"
                    placeholder="Nhập mã chuyến bay để tìm kiếm"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="addButton findButton" onClick={handleSearch}>
                    Tìm kiếm & Sửa
                </button>
                <button className="addButton" onClick={() => setAction(Status.SHOWALL)}>
                    Tất cả chuyến bay
                </button>
                <button className="addButton" onClick={() => setAction(Status.ADD)}>
                    Thêm chuyến bay
                </button>
            </div>

            {action === Status.SHOWALL && (
                <div className="flightTable">
                    {flightList.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Mã chuyến bay</th>
                                    <th>Xuất phát từ</th>
                                    <th>Điểm đến</th>
                                    <th>Thời gian cất cánh dự kiến</th>
                                    <th>Thời gian hạ cánh dự kiến</th>
                                    <th>Trạng thái</th>
                                    <th>Giá vé</th>
                                    <th>Số ghế khả dụng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flightList.map((flight) => (
                                    <tr key={flight.id}>
                                        <td>{flight.id}</td>
                                        <td>{flight.origin_airport_id}</td>
                                        <td>{flight.destination_airport_id}</td>
                                        <td>{flight.scheduled_departure}</td>
                                        <td>{flight.scheduled_arrival}</td>
                                        <td>{flight.status}</td>
                                        <td>{flight.base_price}</td>
                                        <td>{flight.available_seats}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Chưa có chuyến bay nào.</p>
                    )}
                </div>
            )}

            {action === Status.ADD && (
                <AddFlight onAddFlight={handleAddFlight} />
            )}

            {action === Status.SEARCH && (
                selectedFlight ? (
                    <FlightResult flight={selectedFlight} />
                ) : (
                    <p>Không tìm thấy chuyến bay.</p>
                )
            )
            }
        </div>
    );
}

export default FlightInfo;

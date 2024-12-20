import React, { useState, useEffect } from "react";
import "./FlightInfo.scss";
import AddFlight from "./AddFlight";
import FlightResult from "./FlightResult";
import axios from "../../Apis/axios";

const Status = {
  SEARCH: "search",
  SHOWALL: "showall",
  ADD: "add",
};

function formatDateTime(isoString) {
  const date = new Date(isoString);

  // Định dạng: DD/MM/YYYY HH:mm
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

  return formattedDate;
}

function FlightsInfo() {
  const [flightList, setFlightList] = useState([]);

  const [searchId, setSearchId] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [action, setAction] = useState("showall");

  useEffect(() => {
    const fetchAircrafts = async () => {
      try {
        const response = await axios.get("/flights/");
        setFlightList(response);
        console.log("Danh sách tàu bay:", response);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tàu bay:", error);
      }
    };

    fetchAircrafts();
  }, []);
  // Hàm xử lý tìm kiếm
  const handleSearch = () => {
    const result = flightList.find(
      (flight) => flight.id.toLowerCase() === searchId.toLowerCase()
    );
    setSelectedFlight(result || null);
    setAction(Status.SEARCH);
  };

  // Hàm xử lý nhấn phím Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
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
        {/* <button className="addButton findButton" onClick={handleSearch}>
          Tìm kiếm & Sửa
        </button> */}
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
                  <tr key={flight._id}>
                    <td>{flight._id}</td>
                    <td>{flight.origin_airport_id.airport_code}</td>
                    <td>{flight.destination_airport_id.airport_code}</td>
                    <td>{formatDateTime(flight.scheduled_departure)}</td>
                    <td>{formatDateTime(flight.scheduled_arrival)}</td>
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

      {action === Status.ADD && <AddFlight onAddFlight={handleAddFlight} />}

      {action === Status.SEARCH &&
        (selectedFlight ? (
          <FlightResult flight={selectedFlight} />
        ) : (
          <p>Không tìm thấy chuyến bay.</p>
        ))}
    </div>
  );
}

export default FlightsInfo;

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

    const handleAddFlight = (e) => {
        e.preventDefault();
    
        const requiredFields = [
            "scheduled_departure",
            "scheduled_arrival",
            "base_price",
            "airline",
            "id",
            "aircraft",
            "availableSeats",
        ];
        for (const field of requiredFields) {
            if (!newFlight[field].trim()) {
                setError("All fields must be filled!");
                return;
            }
        }
    
        setFlights([newFlight, ...Flights]);
        setIsAddingFlight(false);
    
        setNewFlight({
            scheduled_departure: "",
            scheduled_arrival: "",
            base_price: "",
            origin_airport_id: "",
            destination: "",
            airline: "",
            id: "",
            aircraft: "",
            availableSeats: "",
        });
        setError("");
    };
    

    const handleEdit = (FlightId) => {
        setEditingFlight(FlightId);
        const FlightTmp = Flights.find((FlightTmp) => FlightTmp.id === FlightId);
        setTempFlightData({ ...FlightTmp });
    };

    const handleInputChange = (e, field) => {
        setTempFlightData({
          ...tempFlightData,
          [field]: e.target.value,
        });
      };

    const handleSave = (FlightId) => {
        const updatedFlights = Flights.map((Flight) =>
            Flight.id === FlightId ? { ...tempFlightData } : Flight
          );
          setFlights(updatedFlights);
          setEditingFlight(null);
    };

    const handleCancel = () => {
        setEditingFlight(null);
        setTempFlightData({});
    };

    const handleDelete = (FlightId) => {
        const updatedFlights = Flights.filter((Flight) => Flight.id !== FlightId);
        setFlights(updatedFlights);
      };

    return (
        <div className="app-container">
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Flights Info</h1>
                </div>
                <div className="app-content-actions">
                <div className="search-container">
                    <input
                        className="search-bar"
                        placeholder="Search..."
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="search-icon"
                        onClick={handleSearch}
                        aria-label="Search"
                    ></button>
                </div>
                    <div className="app-content-actions-wrapper">
                        <button className="app-content-headerButton" onClick={() => setIsAddingFlight(true)}>Add Flights</button>
                    </div>
                </div>
                <div className="Flights-area-wrapper tableView">
                    <div className="Flights-header">
                        <div className="Flight-cell id">Id<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button>
                        </div>
                        <div className="Flight-cell departure-col-name">Departure<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="Flight-cell arrival-col-name">Arrival<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="Flight-cell status">Status<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="Flight-cell seats-col-name">Available Seats<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="Flight-cell price">Price<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="Flight-cell manage">Manage</div>
                    </div>
                    {isAddingFlight && (
                        <div className="Flights-row new-Flight">
                            <div className="Flight-cell id">
                                <input
                                    type="text"
                                    placeholder="ID"
                                    value={newFlight.id}
                                    onChange={(e) => setNewFlight({ ...newFlight, id: e.target.value })}
                                />
                            </div>
                            <div className="Flight-cell departure">
                                <div className="Flight-cell departure-airport">
                                    <input
                                        type="text"
                                        placeholder="From"
                                        value={newFlight.origin_airport_id}
                                        onChange={(e) =>
                                            setNewFlight({ ...newFlight, origin_airport_id: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="Flight-cell departure-time">
                                    <input
                                        type="date"
                                        value={newFlight.scheduled_departure}
                                        onChange={(e) =>
                                            setNewFlight({ ...newFlight, scheduled_departure: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="Flight-cell arrival">
                                <div className="Flight-cell arrival-airport">
                                    <input
                                        type="text"
                                        placeholder="To"
                                        value={newFlight.destination}
                                        onChange={(e) =>
                                            setNewFlight({ ...newFlight, destination: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="Flight-cell scheduled-arrival">
                                    <input
                                        type="date"
                                        value={newFlight.scheduled_arrival}
                                        onChange={(e) =>
                                            setNewFlight({ ...newFlight, scheduled_arrival: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="Flight-cell status">
                                <select
                                    value={newFlight.status}
                                    onChange={(e) => setNewFlight({ ...newFlight, status: e.target.value })}
                                >
                                    <option value="" disabled>
                                    Select Status
                                    </option>
                                    <option value="scheduled">Scheduled</option>
                                    <option value="delayed">Delayed</option>
                                    <option value="boarding">Boarding</option>
                                    <option value="departed">Departed</option>
                                    <option value="arrived">Arrived</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                            <div className="Flight-cell seats">
                                <input
                                    type="text"
                                    placeholder="Seats"
                                    value={newFlight.availableSeats}
                                    onChange={(e) => setNewFlight({ ...newFlight, availableSeats: e.target.value })}
                                />
                            </div>
                            <div className="Flight-cell price">
                                <input
                                    type="text"
                                    placeholder="Price"
                                    value={newFlight.base_price}
                                    onChange={(e) => setNewFlight({ ...newFlight, base_price: e.target.value })}
                                />
                            </div>
                            <div className="Flight-cell manage">
                                <button
                                    className="save-button"
                                    onClick={handleAddFlight}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22.083,24H1.917C0.86,24,0,23.14,0,22.083V1.917C0,0.86,0.86,0,1.917,0h16.914L24,5.169v16.914
                                            C24,23.14,23.14,24,22.083,24z M20,22h2V5.998l-3-3V9c0,1.103-0.897,2-2,2H7c-1.103,0-2-0.897-2-2V2H2v20h2v-7c0-1.103,0.897-2,2-2
                                            h12c1.103,0,2,0.897,2,2V22z M6,22h12v-7.001L6,15V22z M7,2v7h10V2H7z"/>
                                            <path d="M15,8h-4V3h4V8z"/>
                                        </svg>
                                </button>
                                <button
                                    className="cancel-button"
                                    onClick={() => {
                                        setIsAddingFlight(false);
                                        setNewFlight({
                                            scheduled_departure: "",
                                            scheduled_arrival: "",
                                            base_price: "",
                                            origin_airport_id: "",
                                            destination: "",
                                            airline: "",
                                            id: "",
                                            aircraft: "",
                                            availableSeats: "",
                                        });
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6L6 18"></path>
                                            <path d="M6 6l12 12"></path>
                                        </svg>
                                </button>
                            </div>
                        </div>
                    )}

                {filteredFlights.length > 0 ? (
                    filteredFlights.map((Flight) => (
                        <div key={Flight.id} className={`Flights-row ${
                            editingFlight === Flight.id ? "editing-row" : ""
                          }`}>
                            <div className="Flight-cell id"><span>
                                    {editingFlight === Flight.id ? (
                                        <input
                                        type="text"
                                        value={tempFlightData.id || ""}
                                        onChange={(e) => handleInputChange(e, "id")}
                                        />
                                    ) : (
                                        Flight.id
                                    )}
                                    </span></div>
                            <div className="Flight-cell departure">
                                <div className="Flight-cell departure-airport"><span className="cell-label">Departure:</span>
                                    {editingFlight === Flight.id ? (
                                        <input
                                        type="text"
                                        value={tempFlightData.origin_airport_id || ""}
                                        onChange={(e) => handleInputChange(e, "origin_airport_id")}
                                        />
                                    ) : (
                                        Flight.origin_airport_id
                                    )}
                                </div>
                                <div className="Flight-cell departure-time">
                                    {editingFlight === Flight.id ? (
                                        <input
                                        type="date"
                                        value={tempFlightData.scheduled_departure || ""}
                                        onChange={(e) => handleInputChange(e, "scheduled_departure")}
                                        />
                                    ) : (
                                        Flight.scheduled_departure
                                    )}
                                </div>
                            </div>
                            <div className="Flight-cell arrival">
                                <div className="Flight-cell arrival-airport">
                                    <span className="cell-label">Arrival:</span>
                                    {editingFlight === Flight.id ? (
                                        <input
                                        type="text"
                                        value={tempFlightData.destination || ""}
                                        onChange={(e) => handleInputChange(e, "destination")}
                                        />
                                    ) : (
                                        Flight.destination
                                    )}
                                </div>
                                <div className="Flight-cell arrival-time">
                                    {editingFlight === Flight.id ? (
                                        <input
                                        type="date"
                                        value={tempFlightData.scheduled_arrival || ""}
                                        onChange={(e) => handleInputChange(e, "scheduled_arrival")}
                                        />
                                    ) : (
                                        Flight.scheduled_arrival
                                    )}
                                </div>
                            </div>
                            <div className="Flight-cell status">
                                <span className="cell-label">Status:</span>
                                    {editingFlight === Flight.id ? (
                                        <select
                                        value={tempFlightData.status || ""}
                                        onChange={(e) => handleInputChange(e, "status")}
                                      >
                                        <option value="" disabled>
                                          Select Status
                                        </option>
                                        <option value="scheduled">Scheduled</option>
                                        <option value="delayed">Delayed</option>
                                        <option value="boarding">Boarding</option>
                                        <option value="departed">Departed</option>
                                        <option value="arrived">Arrived</option>
                                        <option value="cancelled">Cancelled</option>
                                      </select>
                                    ) : (
                                        Flight.status
                                    )}
                            </div>
                            <div className="Flight-cell seats">
                                <span className="cell-label">Available Seats:</span>
                                    {editingFlight === Flight.id ? (
                                        <input
                                        type="number"
                                        value={tempFlightData.availableSeats || ""}
                                        onChange={(e) => handleInputChange(e, "availableSeats")}
                                        />
                                    ) : (
                                        Flight.availableSeats
                                    )}
                            </div>
                            <div className="Flight-cell price">
                                <span className="cell-label">Price:</span>
                                    {editingFlight === Flight.id ? (
                                        <input
                                        type="text"
                                        value={tempFlightData.base_price || ""}
                                        onChange={(e) => handleInputChange(e, "base_price")}
                                        />
                                    ) : (
                                        Flight.base_price
                                    )}
                            </div>
                            <div className="Flight-cell manage">
                                {editingFlight === Flight.id ? (
                                    <>
                                    <button className="save-button" onClick={() => handleSave(Flight.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22.083,24H1.917C0.86,24,0,23.14,0,22.083V1.917C0,0.86,0.86,0,1.917,0h16.914L24,5.169v16.914
                                            C24,23.14,23.14,24,22.083,24z M20,22h2V5.998l-3-3V9c0,1.103-0.897,2-2,2H7c-1.103,0-2-0.897-2-2V2H2v20h2v-7c0-1.103,0.897-2,2-2
                                            h12c1.103,0,2,0.897,2,2V22z M6,22h12v-7.001L6,15V22z M7,2v7h10V2H7z"/>
                                            <path d="M15,8h-4V3h4V8z"/>
                                        </svg>
                                    </button>
                    
                                    <button className="cancel-button" onClick={handleCancel}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6L6 18"></path>
                                            <path d="M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                  </>
                                ) : (
                                    <>
                                        <button className="edit-button" onClick={() => handleEdit(Flight.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                                            </svg>
                                        </button>
                                        <button className="delete-button" onClick={() => handleDelete(Flight.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6l-2 14H7L5 6"></path>
                                                <path d="M10 11v6"></path>
                                                <path d="M14 11v6"></path>
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))
                    ) : (
                    <p>No Flights found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlightsInfo;
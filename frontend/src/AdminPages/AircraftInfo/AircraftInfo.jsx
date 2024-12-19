import React, {useState} from "react";
import "./AircraftInfo.scss";

function AircraftInfo() {
    const [newAircraft, setNewAircraft] = useState({
        id: "",
        manufacturer: "",
        model: "",
        total_seats: null,
        manufacture_date: "",
    });
    const [Aircrafts, setAircrafts] = useState([
        {   
            id: "A350",
            manufacturer: "Airbus",
            model: "A350",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A351",
            manufacturer: "Airbus",
            model: "A351",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A352",
            manufacturer: "Airbus",
            model: "A352",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A353",
            manufacturer: "Airbus",
            model: "A353",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A354",
            manufacturer: "Airbus",
            model: "A354",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A355",
            manufacturer: "Airbus",
            model: "A355",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A356",
            manufacturer: "Airbus",
            model: "A356",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A357",
            manufacturer: "Airbus",
            model: "A357",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A358",
            manufacturer: "Airbus",
            model: "A358",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A359",
            manufacturer: "Airbus",
            model: "A359",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A360",
            manufacturer: "Airbus",
            model: "A360",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
        {   
            id: "A361",
            manufacturer: "Airbus",
            model: "A361",
            total_seats: 300,
            manufacture_date: "2016-05-15",
        },
    ]);
    const [tempAircraftData, setTempAircraftData] = useState({});

    const [searchTerm, setSearchTerm] = useState("");
    const [editingAircraft, setEditingAircraft] = useState(null);
    const [isAddingAircraft, setIsAddingAircraft] = useState(false);
    const [error, setError] = useState("");

    const filteredAircrafts = Aircrafts.filter((Aircraft) =>
        Object.values(Aircraft).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
      
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleAddAircraft = (e) => {
        e.preventDefault();
    
        const requiredFields = [
            "id",
            "manufacturer",
            "model",
            "total_seats",
            "manufacture_date",
        ];
        for (const field of requiredFields) {
            if (!newAircraft[field].trim()) {
                setError("All fields must be filled!");
                return;
            }
        }
    
        setAircrafts([...Aircrafts, newAircraft]);
        setIsAddingAircraft(false);
    
        setNewAircraft({
            id: "",
            manufacturer: "",
            model: "",
            total_seats: null,
            manufacture_date: "",
        });
        setError("");
    };
    

    const handleEdit = (AircraftId) => {
        setEditingAircraft(AircraftId);
        const AircraftTmp = Aircrafts.find((AircraftTmp) => AircraftTmp.id === AircraftId);
        setTempAircraftData({ ...AircraftTmp });
    };

    const handleInputChange = (e, field) => {
        setTempAircraftData({
          ...tempAircraftData,
          [field]: e.target.value,
        });
      };

    const handleSave = (AircraftId) => {
        const updatedAircrafts = Aircrafts.map((Aircraft) =>
            Aircraft.id === AircraftId ? { ...tempAircraftData } : Aircraft
          );
          setAircrafts(updatedAircrafts);
          setEditingAircraft(null);
    };

    const handleCancel = () => {
        setEditingAircraft(null);
        setTempAircraftData({});
        setError("");
    };

    const handleDelete = (AircraftId) => {
        const updatedAircrafts = Aircrafts.filter((Aircraft) => Aircraft.id !== AircraftId);
        setAircrafts(updatedAircrafts);
      };

    return (
        <div class="app-container">
            <div className="app-content">
                <div class="app-content-header">
                    <h1 class="app-content-headerText">Aircrafts Info</h1>
                </div>
                <div class="app-content-actions">
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
                    <div class="app-content-actions-wrapper">
                        <button class="app-content-headerButton" onClick={() => setIsAddingAircraft(true)}>Add Aircrafts</button>
                    </div>
                </div>
                <div class="Aircrafts-area-wrapper tableView">
                    <div class="Aircrafts-header">
                        <div class="Aircraft-cell id">Id<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button>
                        </div>
                        <div class="Aircraft-cell manufacturer-col-name">Manufacturer<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div class="Aircraft-cell model">Model<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div class="Aircraft-cell seats-col-name">Total seats<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div class="Aircraft-cell manufacture-date">Manufacture date<button class="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div class="Aircraft-cell manage">Manage</div>
                    </div>
                    {isAddingAircraft && (
                        <div className="Aircrafts-row new-Aircraft">
                            <div className="Aircraft-cell id">
                                <input
                                    type="text"
                                    placeholder="ID"
                                    value={newAircraft.id}
                                    onChange={(e) => setNewAircraft({ ...newAircraft, id: e.target.value })}
                                />
                            </div>
                            <div className="Aircraft-cell manufacturer">
                                <input
                                    type="text"
                                    placeholder="Manufacturer"
                                    value={newAircraft.manufacturer}
                                    onChange={(e) => setNewAircraft({ ...newAircraft, manufacturer: e.target.value })}
                                />
                            </div>
                            <div className="Aircraft-cell model">
                                <input
                                    type="text"
                                    placeholder="Model"
                                    value={newAircraft.model}
                                    onChange={(e) => setNewAircraft({ ...newAircraft, model: e.target.value })}
                                />
                            </div>
                            <div className="Aircraft-cell seats">
                                <input
                                    type="text"
                                    placeholder="Seats"
                                    value={newAircraft.total_seats}
                                    onChange={(e) => setNewAircraft({ ...newAircraft, total_seats: e.target.value })}
                                />
                            </div>
                            <div className="Aircraft-cell manufacture-date">
                                <input
                                    type="date"
                                    placeholder="Manufacture date"
                                    value={newAircraft.manufacture_date}
                                    onChange={(e) => setNewAircraft({ ...newAircraft, manufacture_date: e.target.value })}
                                />
                            </div>
                            <div className="Aircraft-cell manage">
                                <button
                                    className="save-button"
                                    onClick={handleAddAircraft}
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
                                        setIsAddingAircraft(false);
                                        setNewAircraft({
                                            id: "",
                                            manufacturer: "",
                                            model: "",
                                            total_seats: null,
                                            manufacture_date: "",
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

                {filteredAircrafts.length > 0 ? (
                    filteredAircrafts.map((Aircraft) => (
                        <div key={Aircraft.id} className={`Aircrafts-row ${
                            editingAircraft === Aircraft.id ? "editing-row" : ""
                          }`}>
                            <button className="cell-more-button">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-vertical"
                                >
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                                </svg>
                            </button>
                            <div className="Aircraft-cell id">
                                <span>
                                    {editingAircraft === Aircraft.id ? (
                                        <input
                                        type="text"
                                        value={tempAircraftData.id || ""}
                                        onChange={(e) => handleInputChange(e, "id")}
                                        />
                                    ) : (
                                        Aircraft.id
                                    )}
                                </span>
                            </div>
                            <div className="Aircraft-cell manufacturer">
                                <span className="cell-label">Manufacturer:</span>
                                    {editingAircraft === Aircraft.id ? (
                                        <input
                                        type="text"
                                        value={tempAircraftData.manufacturer || ""}
                                        onChange={(e) => handleInputChange(e, "manufacturer")}
                                        />
                                    ) : (
                                        Aircraft.manufacturer
                                    )}
                            </div>
                            <div className="Aircraft-cell model">
                                <span className="cell-label">Model:</span>
                                    {editingAircraft === Aircraft.id ? (
                                        <input
                                        type="text"
                                        value={tempAircraftData.model || ""}
                                        onChange={(e) => handleInputChange(e, "model")}
                                        />
                                    ) : (
                                        Aircraft.model
                                    )}
                            </div>
                            <div className="Aircraft-cell seats">
                                <span className="cell-label">Total Seats:</span>
                                    {editingAircraft === Aircraft.id ? (
                                        <input
                                        type="text"
                                        value={tempAircraftData.total_seats || ""}
                                        onChange={(e) => handleInputChange(e, "total_seats")}
                                        />
                                    ) : (
                                        Aircraft.total_seats
                                    )}
                            </div>
                            <div className="Aircraft-cell price">
                                <span className="cell-label">Manufacture date:</span>
                                    {editingAircraft === Aircraft.id ? (
                                        <input
                                        type="date"
                                        value={tempAircraftData.manufacture_date || ""}
                                        onChange={(e) => handleInputChange(e, "manufacture_date")}
                                        />
                                    ) : (
                                        Aircraft.manufacture_date
                                    )}
                            </div>
                            <div class="Aircraft-cell manage">
                                {editingAircraft === Aircraft.id ? (
                                    <>
                                    <button class="save-button" onClick={() => handleSave(Aircraft.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22.083,24H1.917C0.86,24,0,23.14,0,22.083V1.917C0,0.86,0.86,0,1.917,0h16.914L24,5.169v16.914
                                            C24,23.14,23.14,24,22.083,24z M20,22h2V5.998l-3-3V9c0,1.103-0.897,2-2,2H7c-1.103,0-2-0.897-2-2V2H2v20h2v-7c0-1.103,0.897-2,2-2
                                            h12c1.103,0,2,0.897,2,2V22z M6,22h12v-7.001L6,15V22z M7,2v7h10V2H7z"/>
                                            <path d="M15,8h-4V3h4V8z"/>
                                        </svg>
                                    </button>
                    
                                    <button class="cancel-button" onClick={handleCancel}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 6L6 18"></path>
                                            <path d="M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                  </>
                                ) : (
                                    <>
                                        <button class="edit-button" onClick={() => handleEdit(Aircraft.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                                            </svg>
                                        </button>
                                        <button class="delete-button" onClick={() => handleDelete(Aircraft.id)}>
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
                    <p>No Aircrafts found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AircraftInfo;
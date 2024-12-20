import React, {useState} from "react";
import "./TicketsInfo.scss";

function TicketsInfo() {
    const [newTicket, setNewTicket] = useState({
        scheduled_departure: "",
        scheduled_arrival: "",
        base_price: "",
        origin_airport_id: "",
        destination: "",
        airline: "",
        id: "",
        aircraft: "",
        seat: "",
    });
    const [tickets, setTickets] = useState([
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554431",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554432",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554433",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554434",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554435",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554436",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554437",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554438",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554439",
            aircraft: "Boeing",
            seat: "F7",
        },
        {   
            scheduled_departure: "2024-12-15",
            scheduled_arrival: "2024-12-15",
            base_price: "3,000,000 đ",
            origin_airport_id: "HAN",
            destination: "SGN",
            airline: "QAirline",
            id: "554440",
            aircraft: "Boeing",
            seat: "F7",
        },
    ]);
    const [tempTicketData, setTempTicketData] = useState({});

    const [searchTerm, setSearchTerm] = useState("");
    const [editingTicket, setEditingTicket] = useState(null);
    const [isAddingTicket, setIsAddingTicket] = useState(false);
    const [error, setError] = useState("");

    const filteredTickets = tickets.filter((ticket) =>
        Object.values(ticket).some((value) =>
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

    const handleAddTicket = (e) => {
        e.preventDefault();
    
        const requiredFields = [
            "scheduled_departure",
            "scheduled_arrival",
            "base_price",
            "airline",
            "id",
            "aircraft",
            "seat",
        ];
        for (const field of requiredFields) {
            if (!newTicket[field].trim()) {
                setError("All fields must be filled!");
                return;
            }
        }
    
        setTickets([newTicket, ...tickets]);
        setIsAddingTicket(false);
    
        setNewTicket({
            scheduled_departure: "",
            scheduled_arrival: "",
            base_price: "",
            origin_airport_id: "",
            destination: "",
            airline: "",
            id: "",
            aircraft: "",
            seat: "",
        });
        setError("");
    };
    

    const handleEdit = (ticketId) => {
        setEditingTicket(ticketId);
        const ticketTmp = tickets.find((ticketTmp) => ticketTmp.id === ticketId);
        setTempTicketData({ ...ticketTmp });
    };

    const handleInputChange = (e, field) => {
        setTempTicketData({
          ...tempTicketData,
          [field]: e.target.value,
        });
      };

    const handleSave = (ticketId) => {
        const updatedTickets = tickets.map((ticket) =>
            ticket.id === ticketId ? { ...tempTicketData } : ticket
          );
          setTickets(updatedTickets);
          setEditingTicket(null);
    };

    const handleCancel = () => {
        setEditingTicket(null);
        setTempTicketData({});
        setError("");
    };

    const handleDelete = (ticketId) => {
        const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
        setTickets(updatedTickets);
      };

    return (
        <div className="app-container">
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Tickets Info</h1>
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
                        <button className="app-content-headerButton" onClick={() => setIsAddingTicket(true)}>Add Tickets</button>
                    </div>
                </div>
                <div className="tickets-area-wrapper tableView">
                    <div className="tickets-header">
                        <div className="ticket-cell id">Id<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button>
                        </div>
                        <div className="ticket-cell departure-col-name">Departure<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="ticket-cell arrival-col-name">Arrival<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="ticket-cell airline">Airline<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="ticket-cell model">Model<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="ticket-cell seats-col-name">Seat<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="ticket-cell price">Price<button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                        </button></div>
                        <div className="ticket-cell manage">Manage</div>
                    </div>
                    {isAddingTicket && (
                        <div className="tickets-row new-ticket">
                            <div className="ticket-cell id">
                                <input
                                    type="text"
                                    placeholder="ID"
                                    value={newTicket.id}
                                    onChange={(e) => setNewTicket({ ...newTicket, id: e.target.value })}
                                />
                            </div>
                            <div className="ticket-cell departure">
                                <div className="ticket-cell departure-airport">
                                    <input
                                        type="text"
                                        placeholder="From"
                                        value={newTicket.origin_airport_id}
                                        onChange={(e) =>
                                            setNewTicket({ ...newTicket, origin_airport_id: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="ticket-cell scheduled-departure">
                                    <input
                                        type="date"
                                        value={newTicket.scheduled_departure}
                                        onChange={(e) =>
                                            setNewTicket({ ...newTicket, scheduled_departure: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="ticket-cell arrival">
                                <div className="ticket-cell arrival-airport">
                                    <input
                                        type="text"
                                        placeholder="To"
                                        value={newTicket.destination}
                                        onChange={(e) =>
                                            setNewTicket({ ...newTicket, destination: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="ticket-cell scheduled-arrival">
                                    <input
                                        type="date"
                                        value={newTicket.scheduled_arrival}
                                        onChange={(e) =>
                                            setNewTicket({ ...newTicket, scheduled_arrival: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="ticket-cell airline">
                                <input
                                    type="text"
                                    placeholder="Airline"
                                    value={newTicket.airline}
                                    onChange={(e) => setNewTicket({ ...newTicket, airline: e.target.value })}
                                />
                            </div>
                            <div className="ticket-cell model">
                                <input
                                    type="text"
                                    placeholder="Model"
                                    value={newTicket.aircraft}
                                    onChange={(e) => setNewTicket({ ...newTicket, aircraft: e.target.value })}
                                />
                            </div>
                            <div className="ticket-cell seats">
                                <input
                                    type="text"
                                    placeholder="Seats"
                                    value={newTicket.seat}
                                    onChange={(e) => setNewTicket({ ...newTicket, seat: e.target.value })}
                                />
                            </div>
                            <div className="ticket-cell price">
                                <input
                                    type="text"
                                    placeholder="Price"
                                    value={newTicket.base_price}
                                    onChange={(e) => setNewTicket({ ...newTicket, base_price: e.target.value })}
                                />
                            </div>
                            <div className="ticket-cell manage">
                                <button
                                    className="save-button"
                                    onClick={handleAddTicket}
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
                                        setIsAddingTicket(false);
                                        setNewTicket({
                                            scheduled_departure: "",
                                            scheduled_arrival: "",
                                            base_price: "",
                                            origin_airport_id: "",
                                            destination: "",
                                            airline: "",
                                            id: "",
                                            aircraft: "",
                                            seat: "",
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

                {filteredTickets.length > 0 ? (
                    filteredTickets.map((ticket) => (
                        <div key={ticket.id} className={`tickets-row ${
                            editingTicket === ticket.id ? "editing-row" : ""
                          }`}>
                            <div className="ticket-cell id"><span>
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="text"
                                        value={tempTicketData.id || ""}
                                        onChange={(e) => handleInputChange(e, "id")}
                                        />
                                    ) : (
                                        ticket.id
                                    )}
                                    </span></div>
                            <div className="ticket-cell departure">
                                <div className="ticket-cell departure-airport"><span className="cell-label">Departure:</span>
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="text"
                                        value={tempTicketData.origin_airport_id || ""}
                                        onChange={(e) => handleInputChange(e, "origin_airport_id")}
                                        />
                                    ) : (
                                        ticket.origin_airport_id
                                    )}
                                </div>
                                <div className="ticket-cell departure-time">
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="date"
                                        value={tempTicketData.scheduled_departure || ""}
                                        onChange={(e) => handleInputChange(e, "scheduled_departure")}
                                        />
                                    ) : (
                                        ticket.scheduled_departure
                                    )}
                                </div>
                            </div>
                            <div className="ticket-cell arrival">
                                <div className="ticket-cell arrival-airport">
                                    <span className="cell-label">Arrival:</span>
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="text"
                                        value={tempTicketData.destination || ""}
                                        onChange={(e) => handleInputChange(e, "destination")}
                                        />
                                    ) : (
                                        ticket.destination
                                    )}
                                </div>
                                <div className="ticket-cell arrival-time">
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="date"
                                        value={tempTicketData.scheduled_arrival || ""}
                                        onChange={(e) => handleInputChange(e, "scheduled_arrival")}
                                        />
                                    ) : (
                                        ticket.scheduled_arrival
                                    )}
                                </div>
                            </div>
                            <div className="ticket-cell airline">
                                <span className="cell-label">Airline:</span>
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="text"
                                        value={tempTicketData.airline || ""}
                                        onChange={(e) => handleInputChange(e, "airline")}
                                        />
                                    ) : (
                                        ticket.airline
                                    )}
                            </div>
                            <div className="ticket-cell model">
                                <span className="cell-label">Model:</span>
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="text"
                                        value={tempTicketData.aircraft || ""}
                                        onChange={(e) => handleInputChange(e, "aircraft")}
                                        />
                                    ) : (
                                        ticket.aircraft
                                    )}
                            </div>
                            <div className="ticket-cell seats">
                                <span className="cell-label">Available Seats:</span>
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="text"
                                        value={tempTicketData.seat || ""}
                                        onChange={(e) => handleInputChange(e, "seat")}
                                        />
                                    ) : (
                                        ticket.seat
                                    )}
                            </div>
                            <div className="ticket-cell price">
                                <span className="cell-label">Price:</span>
                                    {editingTicket === ticket.id ? (
                                        <input
                                        type="text"
                                        value={tempTicketData.base_price || ""}
                                        onChange={(e) => handleInputChange(e, "base_price")}
                                        />
                                    ) : (
                                        ticket.base_price
                                    )}
                            </div>
                            <div className="ticket-cell manage">
                                {editingTicket === ticket.id ? (
                                    <>
                                    <button className="save-button" onClick={() => handleSave(ticket.id)}>
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
                                        <button className="edit-button" onClick={() => handleEdit(ticket.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                                            </svg>
                                        </button>
                                        <button className="delete-button" onClick={() => handleDelete(ticket.id)}>
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
                    <p>No tickets found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicketsInfo;
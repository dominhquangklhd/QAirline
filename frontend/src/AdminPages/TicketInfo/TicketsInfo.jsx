import React, {useState} from "react";
import PropTypes from "prop-types";
import "./TicketsInfo.scss";

function TicketsInfo() {
    const [ticket, setTicket] = useState({
        scheduled_departure: "",
        scheduled_arrival: "",
        base_price: "",
        origin_airport_id: "",
        destination: "",
        airline: "",
        flight_number: "",
        aircraft: "",
        availableSeats: "",
    })
    return (
        <div class="app-container">
            <div class="tickets-area-wrapper tableView">
                <div class="tickets-header">
                    <div class="ticket-cell id">Id<button class="sort-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                    </button>
                    </div>
                    <div class="ticket-cell departure">Departure<button class="sort-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                    </button></div>
                    <div class="ticket-cell arrival">Arrival<button class="sort-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                    </button></div>
                    <div class="ticket-cell airline">Airline<button class="sort-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                    </button></div>
                    <div class="ticket-cell model">Model<button class="sort-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                    </button></div>
                    <div class="ticket-cell seats">Available Seats<button class="sort-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                    </button></div>
                    <div class="ticket-cell price">Price<button class="sort-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
                    </button></div>
                </div>
            
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
            <div class="tickets-row">
                <button class="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                </button>
                <div class="ticket-cell id"><span>VN-A888</span></div>
                <div class="ticket-cell departure"><span class="cell-label">Departure:</span>HAN</div>
                <div class="ticket-cell arrival"><span class="cell-label">Arrival:</span>SGN</div>
                <div class="ticket-cell airline"><span class="cell-label">Airline:</span>VN Airline</div>
                <div class="ticket-cell model"><span class="cell-label">Model:</span>Boeing</div>
                <div class="ticket-cell seats"><span class="cell-label">Available Seats:</span>46</div>
                <div class="ticket-cell price"><span class="cell-label">Price:</span>$710</div>
            </div>
        </div>
    </div>
    );
};

TicketsInfo.propTypes = {
    ticket: PropTypes.shape({
        scheduled_departure: PropTypes.string,
        scheduled_arrival: PropTypes.string,
        base_price: PropTypes.number,
        origin_airport_id: PropTypes.shape({
          airport_name: PropTypes.string,
        }).isRequired,
        destination: PropTypes.string,
        airline: PropTypes.string,
        flight_number: PropTypes.string,
        aircraft: PropTypes.string,
        availableSeats: PropTypes.number,
      }).isRequired,
};

export default TicketsInfo;
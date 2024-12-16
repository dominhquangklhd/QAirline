import React, { useState } from 'react'
import "./HotFlights.scss"
import PropTypes from 'prop-types';

function HotFlights({ hotFlightClick }) {
    const [hotFlights, setHotFlight] = useState([
        {
            path_pic: "assets/paris.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },
        {
            path_pic: "assets/plane.jpg",
            city_from: "Huế",
            airport_from_code: "HUI",
            city_to: "Phú Quốc, Kiên Giang",
            airport_to_code: "PQC",
            date_departure: "2025-01-01",
            base_price: 1500000,
        },

    ])

    const [visibleCount, setVisibleCount] = useState(8); // Số phần tử hiển thị (2 hàng * 4 phần tử)

    const loadMore = () => {
        setVisibleCount((prev) => prev + 8); // Tải thêm tối đa 2 hàng (8 phần tử)
    };

    return (
        <div>
            <h2 className="hot-flights-title">Các Chuyến Bay Nổi Bật</h2>
            <div className="hot-flights-grid">
                {hotFlights.slice(0, visibleCount).map((flight, index) => (
                    <div key={index}
                        className="hot-flight-item"
                        onClick={() => hotFlightClick(flight)}>
                        <img src={flight.path_pic} alt="Flight" className="flight-image" />
                        <h4>{flight.city_from} ({flight.airport_from_code}) → {flight.city_to} ({flight.airport_to_code})</h4>
                        <p>Ngày khởi hành: {flight.date_departure}</p>
                        <p>Giá: {flight.base_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                    </div>
                ))}
            </div>
            {visibleCount < hotFlights.length && (
                <div className="load-more-container">
                    <button className="load-more-button" onClick={loadMore}>
                        Xem Thêm
                    </button>
                </div>
            )}
        </div>
    )
}

HotFlights.propTypes = {
    hotFlightClick: PropTypes.func.isRequired,
}

export default HotFlights
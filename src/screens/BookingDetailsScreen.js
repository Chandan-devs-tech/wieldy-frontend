// BookingDetails.jsx
import React from "react";
import { Calendar, Users, User, Home, Key, HelpCircle } from "lucide-react";
import "../styles/BookingDetailsScreen.css";
import hotelImg from "../assets/hotel-checkIn-img.jpg";
import { Link } from "react-router-dom";

const BookingDetails = () => {
  return (
    <div className="container">
      <h1>Booking Details</h1>

      <div className="hotel-card">
        <img src={hotelImg} alt="Piccadilly Hotel" className="hotel-image" />
        <div className="hotel-name">Piccadilly Hotel</div>
      </div>

      <div className="booking-section">
        <h2>Booking Details:</h2>
        <div className="details-card">
          <div className="detail-item">
            <Calendar size={20} />
            <span>Dates</span>
            <span className="detail-value">Wed, 10 Jul - Thu, 11 Jul</span>
          </div>

          <div className="detail-item">
            <Users size={20} />
            <span>Guests</span>
            <span className="detail-value">1 rooms . 1 Guests</span>
          </div>

          <div className="detail-item">
            <User size={20} />
            <span>Booking For</span>
            <span className="detail-value">John Doe</span>
          </div>
        </div>
      </div>
      <div className="unlockbtn">
        <Link to="#">
          <button className="unlock-button">See Unlocking Details</button>
        </Link>
      </div>

      <div className="bottom-nav">
        <Link to="/dashboard">
          <button className="nav-item">
            <Home size={24} />
          </button>
        </Link>
        <button className="nav-item">
          <Calendar size={24} />
        </button>
        <button className="nav-item">
          <Key size={24} />
        </button>
        <button className="nav-item">
          <HelpCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;

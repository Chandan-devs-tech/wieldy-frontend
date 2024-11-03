import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/PreCheckInSuccess.css";

const PreCheckInSuccess = () => {
  return (
    <div className="container">
      <div className="precheckSucessHeader">
        <Link to="/precheckin">
          <button className="back-button">
            <ArrowLeft size={24} />
          </button>
        </Link>
        <header className="headerSucess">
          <h1>Pre Check-in</h1>
        </header>
      </div>

      <div className="success-card">
        <button className="close-button">×</button>
        <div className="success-content">
          <div className="check-icon">✓</div>
          <h2>Pre Check-in Completed Successfully!</h2>
          <p className="details">
            We have successfully received your Details and sent to the Property.
          </p>
          <p className="note">
            Note: You can only access your key 30 minutes before the check-in
            time
          </p>
          <Link to="/bookingdetails">
            <button className="details-button">Go to Booking Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreCheckInSuccess;

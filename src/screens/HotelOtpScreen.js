import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HotelLoginScreen.css";
import "../styles/HotelOtpScreen.css";
import doorLock from "../assets/doorLock.png";
import VerifyOTP from "../components/VerifyOtp";

const HotelLogin = () => {
  const [contactInfo, setContactInfo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP generation/validation logic here
    console.log("Generating OTP for:", contactInfo);
  };
  const handleVerify = () => {
    console.log("Generating OTP");
    // Add your OTP generation logic here
    // Example: const otp = Math.floor(1000 + Math.random() * 9000);
    // setOtp(otp.toString().padStart(4, "0").split(""));
  };

  const handleResend = () => {
    console.log("Resending OTP");
    // Add your resend logic here
  };

  return (
    <>
      <div className="login-container">
        <div className="image-card">
          <img src={doorLock} alt="Hotel Lock" />
          <div className="image-overlay">
            <div className="text-content">
              <h1>Experience</h1>
              <h2>the best hotel stays</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="material-icons icon">person</span>
            <input
              type="text"
              placeholder="+44 9431027434"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>
          <div className="resendbtn">
            <button className="resend-button" onClick={handleResend}>
              Resend OTP
            </button>
          </div>
          <VerifyOTP />
          <Link to="/dashboard">
            <button className="verify-button" onClick={handleVerify}>
              Verify
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default HotelLogin;

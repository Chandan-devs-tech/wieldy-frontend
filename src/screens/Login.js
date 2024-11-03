import React, { useState } from "react";
import "../styles/Login.css";
import VerifyOTP from "../components/VerifyOtp";

const Login = () => {
  const [contactInfo, setContactInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle OTP generation/validation logic here
    console.log("Generating OTP for:", contactInfo);
  };

  return (
    <div className="login-container">
      <div className="content-wrapper">
        <div className="image-section">
          <h1>
            Experience
            <br />
            the best hotel stays
          </h1>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="material-icons icon">person</span>
              <input
                type="text"
                placeholder="Mobile Number/Email id"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                required
              />
            </div>
            <VerifyOTP />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

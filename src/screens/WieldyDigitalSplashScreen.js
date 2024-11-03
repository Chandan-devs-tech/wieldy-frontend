import React from "react";
import "../styles/WieldyDigitalSplashScreen.css";
import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const WieldySplash = () => {
  return (
    <div className="splash-container">
      <div className="content">
        <div className="logo-container">
          <div className="logo-box">
            <img src={logo} alt="Wieldy Logo" className="logo-image" />
          </div>
          <div className="digital-text">DIGITAL</div>
        </div>

        <Link to="/hotellogin">
          <button className="arrow-button">
            <ArrowRight size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WieldySplash;

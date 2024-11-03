import React from "react";
import { MapPin, ChevronDown, Bell } from "lucide-react";
import "../../src/styles/HotelDashboard.css";
import bodySpaImg from "../assets/body-spa-img.jpg";
import breakfastImg from "../assets/breakfast-img.jpg";
import cabImg from "../assets/cab-img.jpg";
import luxuryImg from "../assets/luxury-room-img.jpg";
import BottomNavigation from "../components/BottomNavigation";
import { Link } from "react-router-dom";
import profileImg from "../assets/profileImg.jpg";

const HotelApp = () => {
  const topPicks = [
    {
      id: 1,
      title: "Room upgrades",
      subtitle: "2 Adults | $130",
      backgroundImage: luxuryImg,
    },
    {
      id: 2,
      title: "Spa Packages",
      subtitle: "$29 - $69",
      backgroundImage: bodySpaImg,
    },
    {
      id: 3,
      title: "Breakfast Bundle",
      subtitle: "From $25",
      backgroundImage: breakfastImg,
    },
    {
      id: 4,
      title: "Airport Transfer",
      subtitle: "From $50",
      backgroundImage: cabImg,
    },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <div className="dashboardHeader">
        <div className="header-left">
          <div className="profile-image">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>

        <div className="location-selector">
          <div className="location-label">Location</div>
          <div className="location-value">
            <MapPin size={20} className="map-icon" />
            <span>Brooklyn, NY 112</span>
            <ChevronDown size={20} className="chevron-icon" />
          </div>
        </div>

        <div className="header-right">
          <button className="notification-btn">
            <Bell size={24} />
          </button>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="welcome-card">
        <h1>Welcome John!</h1>
        <div className="card-content">
          <p>Your room number is 113, enjoy your stay</p>
          <Link to="/precheckin">
            <button className="passcode-button">Proceed for Check-In</button>
          </Link>
        </div>
        <div className="hotel-name">Hotel Wieldy</div>
      </div>

      {/* Top Picks Section */}
      <div className="picks-section">
        <h2>Top picks for you</h2>
        <div className="picks-container">
          {topPicks.map((pick) => (
            <div
              key={pick.id}
              className="pick-card"
              style={{ backgroundImage: `url(${pick.backgroundImage})` }}
            >
              <div className="pick-info">
                <h3>{pick.title}</h3>
                <p>{pick.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default HotelApp;

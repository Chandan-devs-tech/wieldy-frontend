import React from "react";
import { Calendar, Home, Key, HelpCircle } from "lucide-react";
import "../styles/BottomNavigation.css";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div>
      <nav className="bottom-nav">
        <Link to="/dashboard">
          <div className="nav-item active">
            <Home size={24} />
          </div>
        </Link>
        <Link to="#">
          <div className="nav-item">
            <Calendar size={24} />
          </div>
        </Link>
        <div className="nav-item">
          <Key size={24} />
        </div>
        <div className="nav-item">
          <HelpCircle size={24} />
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;

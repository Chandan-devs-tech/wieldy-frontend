import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import WieldyDigitalSplashScreen from "./screens/WieldyDigitalSplashScreen";
import HotelLoginScreen from "./screens/HotelLoginScreen";
import HotelOtpScreen from "./screens/HotelOtpScreen";
import HotelDashboard from "./screens/HotelDashboard";
import PreCheckinForm from "./screens/PreCheckInForm";
import PreCheckInSuccess from "./screens/PreCheckInSuccess";
import BookingDetailsScreen from "./screens/BookingDetailsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="#" element={<Login />} />
        <Route path="/" element={<WieldyDigitalSplashScreen />} />
        <Route path="/hotellogin" element={<HotelLoginScreen />} />
        <Route path="/hotelotp" element={<HotelOtpScreen />} />
        <Route path="/dashboard" element={<HotelDashboard />} />
        <Route path="/precheckin" element={<PreCheckinForm />} />
        <Route path="/precheckinsuccess" element={<PreCheckInSuccess />} />
        <Route path="/bookingdetails" element={<BookingDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

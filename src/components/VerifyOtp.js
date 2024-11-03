import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../src/styles/VerifyOtp.css";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleOtp = () => {
    console.log("Generating OTP");
    // Add your OTP generation logic here
    // Example: const otp = Math.floor(1000 + Math.random() * 9000);
    // setOtp(otp.toString().padStart(4, "0").split(""));
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    console.log("Verifying OTP:", otpValue);
    // Add your verification logic here
  };

  const handleResend = () => {
    console.log("Resending OTP");
    // Add your resend logic here
  };

  return (
    <div className="verify-container">
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            ref={inputRefs[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>

      {/* <Link to="/dashboard">
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
      </Link> */}

      {/* <button className="verify-button" onClick={handleOtp}>
        Get OTP
      </button> */}

      {/* <button className="resend-button" onClick={handleResend}>
        Resend OTP
      </button> */}
    </div>
  );
};

export default VerifyOTP;

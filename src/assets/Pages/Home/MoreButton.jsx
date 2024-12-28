import React from "react";
import "./MoreButton.css";

const RegisterButton = () => {
  return (
    <div className="Button-container">
      <a 
        href="/about" 
        className="register-btn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View More
      </a>
    </div>
  );
};

export default RegisterButton;

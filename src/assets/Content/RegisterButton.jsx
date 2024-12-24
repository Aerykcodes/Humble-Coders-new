import React from "react";
import "./RegisterButton.css";

const RegisterButton = () => {
  return (
    <div className="Button-container">
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdCAQzqkVE7d52jLucXsZBzkVNx__dUB7FvhwYjFnIjer4beA/viewform?usp=sf_link" 
        className="register-btn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Register NOW
      </a>
    </div>
  );
};

export default RegisterButton;

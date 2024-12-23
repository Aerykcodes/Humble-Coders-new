import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterButton.css";

const RegisterButton = ({ text, onClick }) => {
  return (
    <div className="Button-container">
      <button className="register-btn " onClick={onClick}>
        Register NOW
      </button>
    </div>
  );
};

export default RegisterButton;

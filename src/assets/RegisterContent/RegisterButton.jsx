import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterButton.css";

const RegisterButton = ({ text, onClick }) => {
  return (
    <div className="container">
      <button className="register-btn btn btn-primary" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default RegisterButton;

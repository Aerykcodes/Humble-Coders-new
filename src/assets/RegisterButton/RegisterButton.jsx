import React from "react";
import PropTypes from 'prop-types';
import "./RegisterButton.css";

const RegisterButton = ({ url, description, newTab, style }) => {
  return (
    <div className="Button-container">
      <a
        href={url}
        className="register-btn"
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
        style={style}
      >
        {description}
      </a>
    </div>
  );
};

RegisterButton.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  style: PropTypes.object
};

RegisterButton.defaultProps = {
  newTab: false,
  style: {}
};

export default RegisterButton;

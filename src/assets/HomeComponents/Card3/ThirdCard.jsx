import React from 'react';
import './ThirdCard.css';

const ThirdCard = () => {
  return (
    <div className="third-card-wrapper d-flex justify-content-center align-items-center">
      <div className="third-card">
        <div className="third-card-content">
          <div className="third-card-visible">
            <h2 className="third-card-title">Title</h2>
          </div>
          <div className="third-card-hidden">
            <p className="third-card-description">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdCard;

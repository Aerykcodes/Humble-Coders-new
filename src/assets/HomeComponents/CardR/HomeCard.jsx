import React from 'react';
import './HomeCard.css';

const HomeCard = () => {
  return (
    <div className="home-card-wrapper d-flex justify-content-center align-items-center">
      <div className="home-card">
        <div className="home-card-content">
          <div className="home-card-visible">
            <h2 className="home-card-title">Title</h2>
          </div>
          <div className="home-card-hidden">
            <p className="home-card-description">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

import React from 'react';
import './NewCard.css';

const NewCard = () => {
  return (
    <div className="new-card-wrapper">
      <div className="new-card">
        <div className="new-card-content">
          <div className="new-card-visible">
            <h2 className="new-card-title">Title</h2>
          </div>
          <div className="new-card-hidden">
            <p className="new-card-description">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

import React from 'react';

const AboutCard = ({ photo, description }) => {
  return (
    <div className="card mb-3">
      <img src={photo} className="card-img-top" alt="About" />
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;

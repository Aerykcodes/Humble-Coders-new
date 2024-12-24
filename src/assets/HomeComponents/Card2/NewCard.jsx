import React from 'react';
import './NewCard.css';

const NewCard = () => {
  return (
    <div className="new-card-wrapper">
      <div className="new-card">
        <div className="new-card-content">
          <div className="new-card-visible">
          </div>
          <div className="new-card-hidden">
          <h2 className="new-card-title">Business Management App for a Cylinder Business</h2>
            <h7 className="new-card-description">Humble Coders successfully developed and delivered a custom business management app tailored for a cylinder distribution business. This app streamlined operations, improved inventory tracking, and enhanced overall efficiency. <br />
              By addressing the client’s specific needs, we provided a scalable solution that transformed their workflow, showcasing our ability to create impactful tech solutions for businesses of all scales.</h7>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

import React from 'react';
import './ThirdCard.css';

const ThirdCard = () => {
  return (
    <div className="third-card-wrapper d-flex justify-content-center align-items-center">
      <div className="third-card">
        <div className="third-card-content">
          <div className="third-card-visible">
            
          </div>
          <div className="third-card-hidden">
          <h3 className="third-card-title">Library Management App for NNCL</h3>
            <h7 className="third-card-description">Humble Coders is working on a Library Management App for NNCL, featuring a seat booking system, real-time availability tracking, and break scheduling to ensure efficient library use. The app includes ID card scanning for attendance, group room bookings, and luggage storage updates. <br />
            For library administrators, the Library Manager App tracks seat usage, peak hours, demographics, and user complaints, optimizing operations and ensuring a seamless experience for all users.</h7>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdCard;

import React from 'react';
import './Achievements.css'; // Import the CSS file for styling

const Achievements = () => {
  return (
    <div className="component-container">
      <img src="https://via.placeholder.com/300x200" alt="Placeholder Image" className="image" />
      <div className="content-section">
        <p>Your content goes here. You can add text, images, or anything you want in this section.</p>
      </div>
      <hr className="separator" />
      <h2 className="achievements-heading">OUR ACHIEVEMENTS</h2>
    </div>
  );
}

export default Achievements;

import React from 'react';
import './HomeFirst.css'; // Import the CSS file for styling

const HomeFirst = () => {
  return (
    <div className="component-container">
      <img src="src\assets\HomeComponents\HomeImages\Humble_Coders.png" alt="Placeholder Image" className="image" />
      <div className="Home-content-section">
        <p>Your content goes here. You can add text, images, or anything you want in this section.</p>
      </div>
      <hr className="separator" />
    </div>
  );
}

export default HomeFirst;

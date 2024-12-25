import React from 'react';
import './HomeFirst.css'; // Import the CSS file for styling
import HumbleCodersImage from './HomeImages/Humble_Coders.png';

const HomeFirst = () => {
  return (
    <div className="component-container">
      <img src={HumbleCodersImage} alt="Placeholder Image" className="image" />
      <p className="TagLine">A Safe Place For Your Humble Beginnings</p>
      <div className="Home-content-section">
        <p><strong>Welcome to Humble Coders</strong><br /><br />
          At Humble Coders, we believe in inspiring the next generation of tech innovators. Through engaging, hands-on workshops, like our recent success at Thapar Institute, we empower students to go from zero experience to building and deploying their own apps. Our mission is to make learning practical, fun, and impactful. <br /><br />
          Beyond education, we craft innovative software solutions designed to solve real-world challenges. From working on classified projects with the Indian Army to creating business management tools that transform operations, we deliver excellence with every project. <br /><br />
          Whether you want to learn, build, or innovate, Humble Coders is here to bring your ideas to life. Let’s shape the future together!</p>
      </div>
      <hr className="separator" />
    </div>
  );
}

export default HomeFirst;

import React from 'react';
import './CustomContentSection.css';

const CustomContentSection = () => {
  return (
    <div className="custom-reg-container">
      <div className="custom-row justify-content-start">
        <div className="custom-col-12 custom-col-md-6">
          <div className="custom-unique-content-section">
            <img 
              src="src/assets/Content/Humble_Coders.jpg" 
              alt="Humble Coders Photo" 
              className="img-fluid custom-unique-content-img"/>
            <p className="custom-unique-content-text-sec">
              <strong>Welcome to the Humble Coders’ course!</strong> Over the next two weeks, you'll learn Android app development from scratch, mastering Kotlin, Jetpack Compose, Firebase, APIs, and more. From building a simple CGPA calculator to creating real-time chat apps, this course will guide you through hands-on projects to help you become a skilled Android developer. Let's get started and begin your journey into the world of mobile app development!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomContentSection;

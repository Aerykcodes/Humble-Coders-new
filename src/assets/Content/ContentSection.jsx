import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <div className="home-container-section">
      <div className="row justify-content-start">
        <div className="col-12 col-md-4">
          <div className="content-section">
            <img 
              src="src\assets\Content\Humble_Coders.png" 
              alt="Photo" 
              className="img-fluid content-img"
            />
           <p className="Tag-Line">A Safe Place For Your Humble Beginnings</p>
          </div>
        </div>
      </div>
      <p className="content-text">Welcome to the Humble Coders’ course! Over the next two weeks, you'll learn Android app development from scratch, mastering Kotlin, Jetpack Compose, Firebase, APIs, and more. From building a simple CGPA calculator to creating real-time chat apps, this course will guide you through hands-on projects to help you become a skilled Android developer. Let's get started and begin your journey into the world of mobile app development!
      </p>
    </div>
  );
};

export default ContentSection;

import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-12 col-md-4">
          <div className="content-section">
            <img 
              src="src\assets\Content\Humble_Coders.png" 
              alt="Photo" 
              className="img-fluid content-img"
            />
            <p className="content-text">This is a description under the image. You can add more details here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

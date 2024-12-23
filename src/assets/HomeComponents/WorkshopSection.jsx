import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './WorkshopSection.css';
import Picture1 from './HomeImages/Picture1.jpg';
import Picture2 from './HomeImages/Picture2.jpg';
import Picture3 from './HomeImages/Picture3.jpg';
import Picture4 from './HomeImages/Picture4.jpg';
import Picture5 from './HomeImages/Picture5.jpg';
import Picture6 from './HomeImages/Picture6.jpg';
import Picture7 from './HomeImages/Picture7.jpg';

const images = [Picture1, Picture2, Picture3,Picture4, Picture5, Picture6, Picture7];

const WorkshopSection = () => {
  return (
    <div className="container workshop-section-container">
      <div className="row workshop-section-content">
        {/* Carousel Section */}
        <div className="col-md-6 workshop-section-photos">
          <Carousel className="rectangular-design" fade interval={2000} controls={true} indicators={true}>
            {images.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 workshop-section-photo"
                  src={src}
                  alt={`Photo ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Text Section */}
        <div className="col-md-6 workshop-section-text">
          <h2>Workshop Heading</h2>
          <p>
            This is a sample paragraph. You can add more details and information here.
            The text will be aligned to the right side of the section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;

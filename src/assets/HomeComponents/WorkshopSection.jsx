import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './WorkshopSection.css';
import Picture1 from './HomeImages/Picture1.jpg';
import Picture2 from './HomeImages/Picture2.jpg';
import Picture3 from './HomeImages/Picture3.jpg';
import Picture4 from './HomeImages/Picture4.jpg'
import Picture6 from './HomeImages/Picture6.jpg';

const images = [Picture1, Picture2, Picture3,Picture4, Picture6];

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
          <h1>Previous Workshops</h1>
          <p>
         <strong>Workshop at Thapar Institute of Engineering and Technology</strong><br />
We at Humble Coders were thrilled to host a native Android app development workshop at Thapar Institute of Engineering and Technology, engaging 70 enthusiastic students from branches like COE, COPC, EEC, and Biotech.
Starting with zero prior experience in app development, the students embarked on a hands-on journey, learning the essentials of Kotlin and Jetpack Compose. <br /> <br />By the end of the workshop, they had built and deployed their very own CGPA calculator app, proudly showcased on GitHub.
The energy, curiosity, and growth displayed by the students were inspiring, reaffirming our mission to share tech skills and make an impact. This experience stands as another proud milestone in our journey to empower future developers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;

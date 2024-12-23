import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './WorkshopSection.css';

const images = [
  "https://via.placeholder.com/400x300",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHNjZW5lcnl8ZW58MHx8fHwxNjYxNzI0MzYz&ixlib=rb-1.2.1&q=80&w=400&h=300",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHNjZW5lcnl8ZW58MHx8fHwxNjYxNzI0MzY5&ixlib=rb-1.2.1&q=80&w=400&h=300"
];

const WorkshopSection = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  // Function to handle image load
  const handleImageLoad = (index) => {
    setLoadedImages(prev => [...prev, index]);
  };

  useEffect(() => {
    // Preload all images on component mount
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => handleImageLoad(index);
    });
  }, []);

  return (
    <div className="container workshop-section-container">
      <div className="row workshop-section-content">
        <div className="col-md-6 workshop-section-photos">
          <Carousel className="rectangular-design" fade interval={2000} controls={false} indicators={false}>
            {images.map((src, index) => (
              <Carousel.Item key={index}>
                {loadedImages.includes(index) ? (
                  <img
                    className="d-block w-100 workshop-section-photo"
                    src={src}
                    alt={`Photo ${index + 1}`}
                  />
                ) : (
                  <div className="workshop-section-photo-placeholder" />
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
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

import React from 'react';
import AboutCard from './AboutCard';
import './Achievements.css'; // Import the custom CSS for styling
import LibraryUI from './Images/LibraryUI.jpg';
import CylinderUI from './Images/CylinderUI.jpg';
import Classified from './Images/Classified.png';

const Achievements = () => {
  const data = [
    {
      photo: LibraryUI,
      heading: 'Library Management App for NNCL',
      description: 'Humble Coders is working on a Library Management App for NNCL, featuring a seat booking system, real-time availability tracking, and break scheduling to ensure efficient library use. The app includes ID card scanning for attendance, group room bookings, and luggage storage updates. For library administrators, the Library Manager App tracks seat usage, peak hours, demographics, and user complaints, optimizing operations and ensuring a seamless experience for all users.',
    },
    {
      photo: CylinderUI,
      heading: 'Business Management App for a Cylinder Business',
      description: 'Humble Coders successfully developed and delivered a custom business management app tailored for a cylinder distribution business. This app streamlined operations, improved inventory tracking, and enhanced overall efficiency. By addressing the client’s specific needs, we provided a scalable solution that transformed their workflow, showcasing our passion and ability to create impactful tech solutions for businesses of all scales.',
    },
    {
      photo: Classified,
      heading: 'Classified Project with the Indian Army',
      description: 'Humble Coders is proud to have worked for the Indian Army on a classified project. While details remain confidential, this collaboration highlights our expertise in delivering reliable and innovative solutions for critical and sensitive needs, reinforcing our commitment to excellence.',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3 AboutCard">
              <img src={item.photo} className="card-img-top" alt="About" />
              <div className="card-body">
                <h5 className="card-title">{item.heading}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

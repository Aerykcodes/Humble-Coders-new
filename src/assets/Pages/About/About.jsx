import React from 'react';
import Achievements from './Achievements';
import Navbar from '../../navbar/Navbar';
import WorkshopSection from './WorkshopSection';
import './About.css';
import SiteFooter from '../../SiteFooter/SiteFooter';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="Achievement-container">
        <h1 className="text-center">Our Achievements</h1>
        <br />
        <Achievements />
      </div>
      <div className='Workshop-container'>
        <h1 className='text-center'>Previous Workshops</h1>
        <br />
      <WorkshopSection />
      </div>
    <SiteFooter/>
    </div>
  );
};

export default About;

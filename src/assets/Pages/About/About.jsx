import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './About.css';
import SiteFooter from '../../SiteFooter/SiteFooter';
import WorkshopSection from './WorkshopSection';

const About = () => {
  return (
    <div>
      <Navbar />
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

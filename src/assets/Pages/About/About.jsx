import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './About.css';
import SiteFooter from '../../SiteFooter/SiteFooter';
import WorkshopSection from './WorkshopSection';
import GraphSection from './GraphSection'; // Import FeedbackSection component

const pieData = [
  [
    { name: 'Very Relevant', value: 46.3 },
    { name: 'Relevant', value: 53.7 },
    { name: 'Neutral', value: 0 },
    { name: 'Irrelevant', value: 0 }
  ],
  [
    { name: 'Excellent', value: 36.6 },
    { name: 'Good', value: 63.4 },
    { name: 'Average', value: 0 },
    { name: 'Poor', value: 0 }
  ],
  [
    { name: 'Excellent', value: 34.1 },
    { name: 'Good', value: 65.9 },
    { name: 'Average', value: 0 },
    { name: 'Poor', value: 0 }
  ],
  [
    { name: 'Excellent', value: 65.9 },
    { name: 'Good', value: 29.3 },
    { name: 'Average', value: 4.8 },
    { name: 'Poor', value: 0 }
  ],
  [
    { name: 'Yes', value: 95.1 },
    { name: 'Somewhat', value: 4.9 },
    { name: 'No', value: 0 }
  ],
  [
    { name: 'Very Confident', value: 41.5 },
    { name: 'Confident', value: 41.5 },
    { name: 'Somewhat Confident', value: 17.1 },
    { name: 'Not Confident', value: 0 }
  ]
];

const titles = [
  'Content relevance',
  'Knowledge and expertise of instructors',
  'Overall experience',
  'Hands-on activities/coding sessions',
  'Was the workshop environment conducive to learning',
  'Confidence Level: Applying Workshop Skills to Real-World App Development Projects'
];

const styles = {
  title: {
    textAlign: 'center',
    marginTop: '10px',
    fontWeight: 'bold',
  }
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className='Workshop-container'>
        <h1 className='text-center'>Previous Workshops</h1>
        <br />
        <WorkshopSection />
        
      </div>
      <GraphSection pieData={pieData} titles={titles} styles={styles} />
      <SiteFooter />
    </>
  );
};

export default About;

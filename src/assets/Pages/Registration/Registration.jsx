import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap included
import Navbar from '../../navbar/Navbar';
import './Registration.css';
import SiteFooter from '../../SiteFooter/SiteFooter';

const Registration = () => {
  return (
    <div className='reg-bg'>
      <Navbar />
      <div className="container">
        <div className="register-heading-container">
          <h2 className="text-center">Registration Information</h2>
          <br />
          <div className="registration-details">
            <p><strong>• Beginning Date:</strong> 6th January 2024</p>
            <p><strong>• Duration:</strong> 14 Days</p>
            <p><strong>• Mode:</strong> Online mode (Zoom meeting)</p>
            <p><strong>• Timings:</strong> 6:00 pm to 8:00 pm</p>
            <p><strong>• Ending Date:</strong> 21st January 2024</p>
            <p><strong>• Target Audience:</strong> Students from any stream and from any year</p>
            <p><strong>• Requirements:</strong> Android Studio Setup (Freely available)</p>
            <p>
              <strong>• Download Link:</strong>{' '}
              <a 
                href="https://developer.android.com/studio?gad_source=1&gclid=EAIaIQobChMIq-uWyenFigMVl6dmAh0ZUzfPEAAYASAAEgI4lfD_BwE&gclsrc=aw.ds" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Android Studio
              </a>
            </p>
            <p><strong>• Fees:</strong> <strike>Rs 1180</strike> 799/- (18% GST Included) (Till 31st December)</p>
            <p>
              <strong>• Registration Link:</strong>{' '}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdCAQzqkVE7d52jLucXsZBzkVNx__dUB7FvhwYjFnIjer4beA/viewform?usp=sf_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Register Here
              </a>
            </p>
          </div>
        </div>

        {/* Three Step Process Section */}
        <div className="three-step-process mt-4">
          <h3 className="text-center">Three Step Process</h3>
          <ul className="steps-list">
            <li><strong>Step 1:</strong> Fill the Registration form.</li>
            <li><strong>Step 2:</strong> Complete the Payment process.</li>
            <li><strong>Step 3:</strong> Join the given WhatsApp group (link provided in the form).</li>
          </ul>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Registration;


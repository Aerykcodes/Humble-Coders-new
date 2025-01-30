import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Navbar/Navbar';
import './Registration.css';
import SiteFooter from '../../SiteFooter/SiteFooter';
import RegisterButton from '../../RegisterButton/RegisterButton';

const Registration = () => {
  return (
    <div className='reg-bg'>
      <Navbar />
      <div className="container">
        <div className="register-heading-container">
          <h2 className="text-center">Registration Information</h2>
          <br />
          <div className="registration-details">
            <p><strong>• Starting Date:</strong> 1st February 2025</p>
            <p><strong>• Duration:</strong> 1 month</p>
            <p><strong>• Mode:</strong> Recorded classes + Live doubt sessions + In-person discussion for Thapar Students</p>
            <p><strong>• Validity :</strong> Lifetime</p>
            {/* <p><strong>• Platform: </strong> Zoom </p>
            <p><strong>• Timings:</strong> 6:00 pm to 8:00 pm</p> */}
            {/* <p><strong>• Last Date for Registration :</strong> 10th January 2025</p> */}
            <p><strong>• Number of seats :</strong> 200 seats</p>
            <p><strong>• Target Audience:</strong> Students from any stream and from any year</p>
            <p><strong>• Fees:</strong> <strike>Rs 1180</strike> 799/- (18% GST Included)</p>
            <p><strong>• Fees:</strong> <strike>Rs 799</strike> 399/- (18% GST Included) (For Thapar Students)</p>
            
            <div 
                className="d-flex justify-content-center align-items-center flex-column flex-md-row gap-2">
              <div className="mb-2 mb-md-0">
                <RegisterButton
                  url="https://docs.google.com/forms/d/e/1FAIpQLSdCAQzqkVE7d52jLucXsZBzkVNx__dUB7FvhwYjFnIjer4beA/viewform?usp=sf_link"
                  description="Register Now"
                  newTab={true}
                />
              </div>
              <div>
                <RegisterButton
                  url="https://docs.google.com/forms/d/e/1FAIpQLSeLXEWICzHdDFgtIsb66BOoDTIyoUAT4KnX44Cxn9525VcK8Q/viewform?usp=header"
                  description="Register Now (THAPAR STUDENTS)"
                  newTab={true}
                  style={{ fontSize: '0.8rem' }}
                />
              </div>
            </div>

          </div>
        </div>

        <div className="three-step-container">
          <h3 className="text-center">Three Step Process</h3>
          <ul className="steps-list">
            <li><strong>Step 1: <br /></strong> Fill the Registration form.</li>
            <li><strong>Step 2: <br /></strong> Complete the Payment process.</li>
            <li><strong>Step 3: <br /></strong> Join the given WhatsApp group (link provided in the form).</li>
          </ul>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Registration;

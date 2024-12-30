import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap included
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
            <p><strong>• Starting Date:</strong> 13th January 2025</p>
            <p><strong>• Duration:</strong> 2 weeks</p>
            <p><strong>• Mode:</strong> Online mode</p>
            <p><strong>• Platform: </strong> Zoom </p>
            <p><strong>• Timings:</strong> 6:00 pm to 8:00 pm</p>
            <p><strong>• Last Date for Registration :</strong> 10th January 2025</p>
            <p><strong>• Number of seats :</strong> 200 seats</p>
            <p><strong>• Target Audience:</strong> Students from any stream and from any year</p>
            <p><strong>• Fees:</strong> <strike>Rs 1180</strike> 799/- (18% GST Included)</p>
           <RegisterButton/>
          </div>
        </div>

        {/* Three Step Process Section in Similar Box */}
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

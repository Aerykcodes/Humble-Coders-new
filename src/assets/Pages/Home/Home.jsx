import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS (if needed)
import Navbar from '../../navbar/Navbar'; // Import Navbar component
import HomeBox from './HomeBox'; // Import HomeBox component
import SiteFooter from '../../SiteFooter/SiteFooter';

function Home() {
  return (
    <div className='Home-background'>
      <Navbar />
      <div className="homepage-container">
        <div className="header-box-container">
          <header className="header-box">
            <h1 className="text-center homepage-title">Android App Development Course</h1>
            <h3 className='textbox-0'><strong>With Kotlin and Jetpack Compose </strong></h3>
            <p className="text-center homepage-description">
            </p>
            <div className="course-details text-center">
              <p className='textbox-1'><strong>
              15 days training program <br />For beginners and experienced developers, UG/PG students</strong></p>
              <p className='textbox-2'><strong>January 10, 2025</strong></p>
              <p className='textbox-3'><strong>Organized by: Humble Coders</strong></p>
            </div>
            <div className='register-link'>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCAQzqkVE7d52jLucXsZBzkVNx__dUB7FvhwYjFnIjer4beA/viewform?usp=sf_link" rel="noopener noreferrer">
  <u>Register Now</u>
    
  </a>
</div>

          </header>
        </div>
        <div className="box-wrapper container">
          <div className="row">
            <div className="col-12">
              <HomeBox heading="Program Outcomes" content={
                <ul> <strong>
                  <li>Gain hands-on experience with Kotlin and Jetpack Compose for Android app development.</li>
                  <li>Explore advanced concepts like Firebase integration, MVVM architecture, APIs, and real-time communication.</li>
                  <li>Learn to design visually stunning and user-friendly app interfaces.</li>
                  <li>
                    Projects: Build professional apps from scratch, including a CGPA calculator, Wishlist app, Chatbot, Bluetooth scanner, and Chat application.
                  </li>
                  <li>
                    Certification: Receive a Certificate of Completion to enhance your career profile.
                  </li>
                  </strong>
                </ul>
              } />
            </div>
          </div>
        </div>
        <h4 className="text-center">Target Audience</h4>
        <p className="text-center">Undergraduate and Postgraduate students from all disciplines and academic levels.</p>
        <br /><br /><br />
        <h4 className="text-center">Feel free to reach out at</h4>
        <p className="text-center">executives@humblecoders.in </p>
        <br /><br /><br /><br />
      </div>
      <SiteFooter />
    </div>
  );
}

export default Home;

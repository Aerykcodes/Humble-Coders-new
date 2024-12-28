import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS (if needed)
import Navbar from '../../Navbar/Navbar'
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
            <HomeBox
  heading="Program Outcomes"
  content={
    <div>
      <ul>
        <li><strong>Gain hands-on experience with Kotlin and Jetpack Compose for Android app development.</strong></li>
        <li><strong>Explore advanced concepts like Firebase integration, MVVM architecture, APIs, and real-time communication.</strong></li>
        <li><strong>Learn to design visually stunning and user-friendly app interfaces.</strong></li>
        <li><strong>Certification: Receive a Certificate of Completion to enhance your career profile.</strong></li>
      </ul>
      <br />
      <p className='h5' style={{ marginLeft: '20px' }}>
  <strong style={{ color: '#4263a6' }}>Projects:</strong>
</p>
<ul style={{ marginLeft: '20px' }}>
  <li><strong style={{ color: '#4263a6' }}>Build professional apps from scratch, including a CGPA calculator</strong></li>
  <li><strong style={{ color: '#4263a6' }}>Wishlist app</strong></li>
  <li><strong style={{ color: '#4263a6' }}>Chatbot</strong></li>
  <li><strong style={{ color: '#4263a6' }}>Bluetooth scanner</strong></li>
  <li><strong style={{ color: '#4263a6' }}>Chat application</strong></li>
</ul>




    </div>
  }
/>

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

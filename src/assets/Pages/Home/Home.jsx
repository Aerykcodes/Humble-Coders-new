import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import custom CSS (if needed)
import Navbar from '../../Navbar/Navbar';
import HomeBox from './HomeBox'; // Import HomeBox component
import SiteFooter from '../../SiteFooter/SiteFooter';
import PieChart from './PieChart'; // Import PieChart component
import RegisterButton from '../../RegisterButton/RegisterButton';
import logo1 from './logo1.png';
import MoreButton from './MoreButton';

const data1 = [
  { name: 'Excellent', value: 36.6 },
  { name: 'Good', value: 63.4 },
  { name: 'Average', value: 0 },
  { name: 'Poor', value: 0 },
];

const data2 = [
  { name: 'Yes', value: 95.1 },
  { name: 'Somewhat', value: 4.9 },
  { name: 'No', value: 0 },
];

function Home() {
  return (
    <div className='Home-background'>
      <Navbar />
            <img
        src={logo1}
        alt="Course banner"
        className="img-fluid responsive-logo"
        style={{ maxWidth: '600px', height: 'auto', display: 'block', margin: '80px auto' }} // Adjust the size as needed
      />

      <div className="homepage-container">
        <div className="header-box-container">
          <header className="header-box" style={{ marginTop: '0' }}> {/* Removed extra margin */}
            <h1 className="text-center homepage-title">Android App Development Course</h1>
            <h3 className='textbox-0'><strong>With Kotlin and Jetpack Compose </strong></h3>
            <p className="text-center homepage-description"></p>
            <div className="course-details text-center">
              <p className='textbox-1'><strong>2 Weeks training program <br />For beginners and experienced developers, UG/PG students</strong></p>
              <p className='textbox-2'><strong>Last Registration Date - 10 January 2025</strong></p>
              <p className='textbox-3'><strong>Organized by: Humble Coders</strong></p>
            </div>
            <RegisterButton />
          </header>
        </div>
        <div className="box-wrapper container">
          <div className="row">
            <div className="col-12">
              <HomeBox
                heading="Program Outcomes "
                content={
                  <div>
                    <ul>
                      <li><strong>Gain hands-on experience with Kotlin and Jetpack Compose for Android app development.</strong></li>
                      <li><strong>Explore advanced concepts like Firebase integration, MVVM architecture, APIs, and real-time communication.</strong></li>
                      <li><strong>Learn to design visually stunning and user-friendly app interfaces.</strong></li>
                      <li><strong>Certification: Receive a Certificate of Completion to enhance your career profile.</strong></li>
                    </ul>
                    <br />
                    <p className="h5 text-center" style={{ color: '#4263a6' }}><strong >Projects included in the course </strong><br /> <small>6 Major Projects</small></p> <br />
                    <ul className="projects-list">
                      <li style={{ color: '#4263a6', fontWeight: 'bold' }}>CGPA calculator</li>
                      <li style={{ color: '#4263a6', fontWeight: 'bold' }}>Wishlist app</li>
                      <li style={{ color: '#4263a6', fontWeight: 'bold' }}>Chatbot</li>
                      <li style={{ color: '#4263a6', fontWeight: 'bold' }}>Bluetooth scanner</li>
                      <li style={{ color: '#4263a6', fontWeight: 'bold' }}>Chat application</li>
                      <li style={{ color: '#4263a6', fontWeight: 'bold' }}>Portfolio App</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <h4 className="text-center">Target Audience</h4>
        <p className="text-center">Undergraduate and Postgraduate students from all disciplines and academic levels.</p>
        <br />
        <h3 className='text-center'>Previous Workshops and Feedback</h3>
        <div className="box-wrapper container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex flex-column align-items-center">
              <PieChart data={data1} />
              <h4 className="text-center mt-2">Knowledge and expertise of instructors</h4>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column align-items-center">
              <PieChart data={data2} />
              <h4 className="text-center mt-2">Was the workshop environment conducive to learning</h4>
            </div>
          </div>
        </div><br />
        <MoreButton/>
        <br />
        <br /><br />
        <h4 className="text-center">Feel free to reach out at</h4>
        <p className="text-center">executives@humblecoders.in <br /> Ansh Bajaj - 8685988991 <br />Ishank Goyal - 8708667212 <br />Aaryan Kaushal - 9501951970 </p>
        <br />
      </div>
      <SiteFooter />
    </div>
  );
}

export default Home;

import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from '../../assets/Pages/images/hc_logo.png';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="main-container-Contact">
      <Navbar />

      <div className="contact-page">
        <div className="contact-container">
          {/* Left Section: Team Image */}
          <div className="contact-image-box"></div>

          {/* Right Section: Contact Details */}
          <div className="contact-details-box">
            <h2 className="heading">Contact Us</h2>

            {/* Contact Details */}
            <ul className="contact-info">
              <li>&bull; Ansh Bajaj (Course Instructor & Founder)</li>
              <li>&bull; Ishank Goyal (Course Instructor & Founder)</li>
              <li>&bull; Aaryan Kaushal (Course Coordinator & Founder)</li>
              <li>&bull; Ritwik Singla (Course Coordinator & Founder)</li>
              <li>&bull; Shreya Baranwal (Designer & Founder)</li>
              <li>&bull; Sharnya Goyal (Content Writer & Founder)</li>
            </ul>

            {/* Dotted Line */}
            <div className="dotted-separator"></div>

            {/* Phone Numbers Section */}
   
<ul className="contact-info">
  <li className="contact-item">
    <div className="contact-icon">
      <FaPhone 
        style={{ 
          color: "#ffc107", 
          marginRight: "10px", 
          transform: "scaleX(-1)", /* Flip the phone icon horizontally */
          marginBottom: "5px" /* Add space between icon and the text */
        }} 
      />
    </div>
    
  </li>
  <li>&bull;Ansh Bajaj - 8685988991</li>
  <li>&bull; Ishank Goyal - 8708667212</li>
  <li>&bull; Aaryan Kaushal - 9501951970</li>
</ul>

            {/* Dotted Line */}
            <div className="dotted-separator"></div>

            {/* Email Section */}
            <ul className="contact-email">
            <FaEnvelope style={{ color: "#ffc107", marginRight: "10px" }} />
  <li>
    
    <span>executives@humblecoders.in</span>
  </li>
</ul>

            {/* Social Media Icons */}
            <div className="contact-social-media">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
            {/* Bottom Right Image */}
            
           

<div 
  style={{ 
    position: "fixed", 
    bottom: "10px", 
    right: "10px", 
    width: "150px", 
    height: "auto",
    left: "1100px", 
    zIndex: 100 
  }}
>
  <img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} />
</div>

          </div>
        </div>
      </div>
      <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Website developed by Avni and Nishesh</p>
      </div>
    </footer>
    </div>
  );
}

import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Contact.css";


export default function Contact() {
  return (
    <div className="main-container">
        <Navbar />
       
    <div className="contact-page">
      
      <div className="contact-container">
        {/* Left Section: Team Image */}
        <div className="contact-image-box"></div>

        {/* Right Section: Contact Details */}
        <div className="contact-details-box">
          <h2>Contact Us</h2>

          {/* Dotted Line */}
          <div className="dotted-separator"></div>

          {/* Contact Details */}
          <ul className="contact-info">
            <ul>
              <i className="fa fa-phone"></i>
              <span>Ansh Bajaj (Course Instructor & Founder)</span>
            </ul>
            <ul>
              <i className="fa fa-phone"></i>
              <span>Ishank Goyal (Course Instructor & Founder)</span>
            </ul>
            <ul>
              <i className="fa fa-phone"></i>
              <span>Aaryan Kaushal (Course Instructor & Founder)</span>
            </ul>
            <ul>
              <i className="fa fa-phone"></i>
              <span>Ritwik Singla (Course Instructor & Founder)</span>
            </ul>
            <ul>
              <i className="fa fa-phone"></i>
              <span>Shreya Baranwal (designer & Founder)</span>
            </ul>
            <ul>
              <i className="fa fa-phone"></i>
              <span>Sharnya Goyal (content writer & Founder)</span>
            </ul>
            
          </ul>

          {/* Dotted Line */}
          <div className="dotted-separator"></div>

          {/* Phone Numbers Section */}
          <div className="contact-info">
            <ul>
              <ul>
                <i className="fa fa-phone"></i>
                <span>Ansh Bajaj - </span>
                <span style={{ marginLeft: "auto" }}>8685988991</span>
              </ul>
              <ul>
                <i className="fa fa-phone"></i>
                <span>Ishank Goyal - </span>
                <span style={{ marginLeft: "auto" }}>8708667212</span>
              </ul>
              <ul>
                <i className="fa fa-phone"></i>
                <span>Aaryan Kaushal - </span>
                <span style={{ marginLeft: "auto" }}>9501951970</span>
              </ul>
            </ul>
          </div>

          {/* Dotted Line */}
          <div className="dotted-separator"></div>
          <ul>
              <i className="fa fa-envelope"></i>
              <span>executives@humblecoders.in</span>
            </ul>
          {/* Social Media Icons */}
          <div className="contact-social-media">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="C:\Users\DELL\hc_new\Humble-Coders-new\src\assets\Pages\images\instagram.png"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Image positioned at the bottom right corner */}
      <img 
          src="\Pages\images\hc_logo.png" 
          alt="Bottom Right Image" 
          className="bottom-right-image" 
        />
    </div>
    </div>
  );
}

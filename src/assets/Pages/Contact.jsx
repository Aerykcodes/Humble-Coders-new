import React from "react";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import logo from '../../assets/Pages/images/hc_logo.png';
import aaryan from '../../assets/Pages/images/aaryan2.jpg';
import ishank from '../../assets/Pages/images/ishank.2.jpg'
import ritvik from '../../assets/Pages/images/ritvik.jpg';
import sharanya from '../../assets/Pages/images/sharanya.jpg';
import shreya from '../../assets/Pages/images/shreya.jpg';
import ansh from '../../assets/Pages/images/ansh.jpg';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="main-container-Contact">
      <Navbar />

      <div className="contact-page">
        <div className="contact-container">
          {/* Left Section: Meet the Founders */}
          <div className="left-section">
            <div className="vertical-heading">
              Meet the Founders
            </div>
            <div className="founders-grid">
              <div className="founder-card" style={{ margin: "10px" }}>
                <div className="founder-image-container" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <img
                    src={ansh}
                    alt="Ansh Bajaj"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Instructor </p>
                  <p className="founder-name">Ansh Bajaj</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div className="founder-image-container" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <img
                    src={ishank}
                    alt="Ishank Goyal"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Instructor </p>
                  <p className="founder-name">Ishank Goyal</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div className="founder-image-container" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <img
                    src={aaryan}
                    alt="Aaryan Kaushal"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Coordinator </p>
                  <p className="founder-name">Aaryan Kaushal</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div className="founder-image-container" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <img
                    src={ritvik}
                    alt="Ritvik Singla"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="founder-info">
                  <p className="founder-title">Course Coordinator </p>
                  <p className="founder-name">Ritvik Singla</p>
                </div>
              </div>
              <div className="founder-card" style={{ margin: "10px" }}>
                <div className="founder-image-container" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <img
                   src={shreya}
                    alt="Shreya Baranwal"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="founder-info">
                  <p className="founder-title">Designer </p>
                  <p className="founder-name">Shreya Baranwal</p>
                </div>
              </div>
              
              <div className="founder-card" style={{ margin: "10px" }}>
                <div className="founder-image-container" style={{ overflow: "hidden", borderRadius: "8px" }}>
                  <img
                    src={sharanya}
                    alt="Sharnya Goyal"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="founder-info">
                  <p className="founder-title">Content Writer </p>
                  <p className="founder-name">Sharnya Goel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Us */}
          <div className="right-section">
          <h2 className="heading">Contact Us</h2>
  <ul className="contact-info">
    <li className="contact-item">
      <FaPhone id= "p1" style={{ transform: "scaleX(-1)" }} />
      Ansh Bajaj - 8685988991
    </li>
    <li className="contact-item">
      <FaPhone style={{ transform: "scaleX(-1)" }} />
      Ishank Goyal - 8708667212
    </li>
    <li className="contact-item">
      <FaPhone id="p2"style={{ transform: "scaleX(-1)" }} />
      Aaryan Kaushal - 9501951970
    </li>
  </ul>
 
            <div className="dotted-separator"></div>
            <ul className="contact-email">
              
              {/* <li> */}
              <FaEnvelope id="e1"style={{ transform: "scaleX(-1)" }} />
                <span >executives@humblecoders.in</span>
              {/* </li> */}
            </ul>
            <div className="contact-social-media">
              <a href="https://www.linkedin.com/company/humble-coders/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/humble_coders?igsh=MWU4dXAxNjBwaGI4aA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://chat.whatsapp.com/C89q4zjD4NK38ZE9TQgXss" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
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
      <div className="footer">
      <div className="footer-content">
    <p className="footer-text">
      Website developed by 
      <a href="https://www.linkedin.com/in/avni-gupta-235b3429a/" target="_blank" rel="noopener noreferrer" className="developer-link">
        Avni
      </a> 
      and 
      <a href="https://www.linkedin.com/in/nishesh-singla-ba0574284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="developer-link">
        Nishesh
      </a>
    </p>
    {/* <div className="developer-links">
      <div className="developer">
        <p>Avni</p>
        <a href="https://github.com/AvniGithub" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/AvniLinkedin" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="developer">
        <p>Nishesh</p>
        <a href="https://github.com/NisheshGithub" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/NisheshLinkedin" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div> */}
  </div>
      </div>
    </div>
  );
}


import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Contact() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us for any inquiries or support!</p>
        {/* Add contact form or details here */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

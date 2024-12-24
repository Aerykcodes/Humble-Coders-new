import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container-footer">
        <div className="row">
          {/* Column 1 - About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">About Us</h5>
            <p>
              We are a dedicated team providing exceptional services. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Vitae, iure.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="footer-link me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="footer-link me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" className="footer-link me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="footer-link">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

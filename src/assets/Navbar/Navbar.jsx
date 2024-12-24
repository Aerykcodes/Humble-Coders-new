import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();  // Hook to get the current location (path)
  const [activeTab, setActiveTab] = useState(location.pathname);  // Set initial state based on the current location

  useEffect(() => {
    // Update activeTab whenever the route changes
    setActiveTab(location.pathname);
  }, [location]);  // Re-run effect when location changes

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-navbar-main">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/home' ? 'active' : ''}`}  // Compare with '/home'
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/registration' ? 'active' : ''}`}  // Compare with '/registration'
              to="/registration"
            >
              Registration
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/contact' ? 'active' : ''}`}  // Compare with '/contact'
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-navbar-main">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/home' ? 'active' : ''}`}
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/content' ? 'active' : ''}`}
              to="/content"
            >
              Course Details
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/registration' ? 'active' : ''}`}
              to="/registration"
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/about' ? 'active' : ''}`}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${activeTab === '/contact' ? 'active' : ''}`}
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

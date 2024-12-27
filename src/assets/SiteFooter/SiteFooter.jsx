// SiteFooter.js
import React from 'react';
import './SiteFooter.css';
import logo from './hc_logo.png'; // For styling the footer

const SiteFooter = () => {
    return (
        <footer className="site-footer">
             <img src={logo} alt="Logo" className="footer-logo" />
            <p >
           
            Developed by
            <strong> <a href="https://www.linkedin.com/in/nishesh-singla-ba0574284/" target="_blank" rel="noopener noreferrer"> Nishesh</a></strong>
            {" "}and{" "}
            <strong> <a href="https://www.linkedin.com/in/avni-gupta-235b3429a/" target="_blank" rel="noopener noreferrer"> Avni</a></strong>
            
                
            
            </p>
            
        </footer>
    );
};

export default SiteFooter;

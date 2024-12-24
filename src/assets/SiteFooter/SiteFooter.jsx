// SiteFooter.js
import React from 'react';
import './SiteFooter.css'; // For styling the footer

const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <p>
            Responsive, robust, and ready—developed by
               <strong> <a href="https://www.linkedin.com/in/avni-gupta-235b3429a/" target="_blank" rel="noopener noreferrer"> Avni</a></strong>
                {" "}and{" "}
               <strong> <a href="https://www.linkedin.com/in/nishesh-singla-ba0574284/" target="_blank" rel="noopener noreferrer"> Nishesh</a></strong>
            </p>
        </footer>
    );
};

export default SiteFooter;

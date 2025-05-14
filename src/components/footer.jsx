import React from 'react';
import logo from '../assets/logo2.png';  
import fbIcon from '../assets/fb.svg'; 
import xIcon from '../assets/x.svg';   
import '../styles/footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Company Description */}
        <div className="footer-column">
          <img 
            src={logo} 
            alt="Sparkle Logo" 
            className="footer-logo" 
          />
          <p>
            Delivering low-cost, high-impact technological breakthroughs to empower the economy and society. 
            We build tailored software solutions to address both current and future challenges.
          </p>
          <p>
            Sparkle is a social e-commerce platform that brings families and peers closer together 
            through group buying and immersive virtual shopping experiences.
          </p>
        </div>

        {/* Help Links */}
        <div className="footer-column">
          <h4>Get Help</h4>
          <ul>
            <li><a aria-label="Contact Us">Contact Us</a></li>
            <li><a aria-label="Latest Articles">Latest Articles</a></li>
            <li><a aria-label="FAQ">FAQ</a></li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-column">
          <h4>Programs</h4>
          <ul>
            <li><a aria-label="Art & Design">Art & Design</a></li>
            <li><a aria-label="Business">Business</a></li>
            <li><a aria-label="IT & Software">IT & Software</a></li>
            <li><a aria-label="Languages">Languages</a></li>
            <li><a aria-label="Programming">Programming</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>📍 Building 827 P. Paredes Street, Barangay 400, Sampaloc Manila, Philippines</p>
          <p>📞 +63 906 248 2677</p>
          <p>📧 starjobs@gmail.com</p>
          <div className="social-icons">
            <a href="facebook.com" aria-label="Facebook"><img src={fbIcon} alt="Facebook Icon" /></a>
            <a href="x.com" aria-label="x"><img src={xIcon} alt="X Icon" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
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
            <li aria-label="Contact Us">Contact Us</li>
            <li aria-label="Latest Articles">Latest Articles</li>
            <li aria-label="FAQ">FAQ</li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-column">
          <h4>Programs</h4>
          <ul>
            <li aria-label="Art & Design">Art & Design</li>
            <li aria-label="Business">Business</li>
            <li aria-label="IT & Software">IT & Software</li>
            <li aria-label="Languages">Languages</li>
            <li aria-label="Programming">Programming</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
        <h4>Legal</h4>
          <ul>
            <li aria-label="Terms">Terms</li>
            <li aria-label="Privacy">Privacy</li>
            <li aria-label="Cookies">Cookies</li>
            <li aria-label="Contact">Contact</li>
          </ul>
          
          <div className="social-icons">
            <a href="facebook.com" aria-label="Facebook"><img src={fbIcon} alt="Facebook Icon" /></a>
            <a href="x.com" aria-label="x"><img src={xIcon} alt="X Icon" /></a>
          </div>
          <p className="copyright">© 2025 Starjobs. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
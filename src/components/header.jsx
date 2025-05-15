// src/components/Header.jsx
import '../styles/header.css';
import logo from '../assets/logo2.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Sparkle Pay Logo" className="logo-img" />
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        
        <NavLink
          to="/aboutus"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About Us
        </NavLink>

        <NavLink
          to="/pricing"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Pricing
        </NavLink>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        {/* Mobile-only "Get a Demo" button inside menu */}
        <a href="#demo" className="get-demo-btn mobile-demo-btn">Get a Demo</a>
      </nav>

      {/* Desktop-only button */}
      <div className="demo-btn desktop-only">
        <a href="#demo" className="get-demo-btn">Get a Demo</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

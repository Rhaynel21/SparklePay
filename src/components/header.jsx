import '../styles/header.css';
import logo from '../assets/logo2.png';
import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleFeatureClick = (path) => {
    setFeaturesOpen(false);
    setMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Close menu & dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
        setFeaturesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Sparkle Pay Logo" className="logo-img" />
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`} ref={navRef}>
        <NavLink
          to="/"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>

        <div
          className={`dropdown ${featuresOpen ? 'open' : ''}`}
          onMouseEnter={() => {
            if (window.innerWidth > 900) setFeaturesOpen(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 900) setFeaturesOpen(false);
          }}
        >
          <button
            className={`dropdown-toggle nav-link${featuresOpen ? ' active' : ''}`}
            onClick={() => {
              if (window.innerWidth <= 900) {
                setFeaturesOpen((open) => !open);
              }
            }}
            type="button"
          >
            <span className="features-label">Features</span>
            <span className="dropdown-arrow">
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="2,4 11,13 20,4"
                  stroke={featuresOpen ? '#0061bf' : '#222'}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </button>

          {featuresOpen && (
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => handleFeatureClick('/posfeatures')}
              >
                POS
              </button>
              <button
                className="dropdown-item"
                onClick={() => handleFeatureClick('/kioskfeatures')}
              >
                Self-Checkout Machine
              </button>
            </div>
          )}
        </div>

        <NavLink
          to="/pricing"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Pricing
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact
        </NavLink>

        <NavLink
          to="/aboutus"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className="get-demo-btn mobile-demo-btn"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          Get a Demo
        </NavLink>
      </nav>

      <div className="demo-btn desktop-only">
        <NavLink
          to="/contact"
          className="get-demo-btn"
          onClick={() => window.scrollTo(0, 0)}
        >
          Get a Demo
        </NavLink>
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

import '../styles/header.css';
import logo from '../assets/logo2.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Sparkle Pay Logo" className="logo-img" />
      </div>

      <nav className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <a href="#products">Products</a>
        <a href="#features">Features</a>
        <a href="#aboutUs">About Us</a>
        <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
          Pricing
        </NavLink>
        <a href="#contact">Contact</a>
      </nav>

      <div className="demo-btn">
        <a href="#demo" className="get-demo-btn">Get a Demo</a>
      </div>
    </header>
  );
}
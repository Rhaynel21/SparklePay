import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import selfCheckoutImage from '../assets/pos-final.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-section" id="home">
      <div className="home-content">
        {/* Text Content */}
        <div className="home-text">
          <h4 className="home-subtitle">POS & Self-Checkout Machine Platform</h4>
          <img src={selfCheckoutImage} alt="Self-Checkout Machine" className="main-image mobile-only" />

          <h1>
            Self-checkout made effortless. <span>POS made powerful</span>
          </h1>
          <p>
            Sparkle up your checkout with fast, secure, and efficient POS and Self-Checkout solutions powered by cutting-edge technology. Effortless payments, real-time inventory, and seamless operations make<br /> every sale smarter, faster, and more secure with Sparkle!
          </p>
          <div className="home-buttons">
            <button
              className="btn primary"
              onClick={() => navigate('/contact')}
            >
              Get a Demo
            </button>
            <button
              className="btn secondary"
              onClick={() => {
                document.getElementById('products-tabs').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image (shown only in desktop) */}
        <img src={selfCheckoutImage} alt="Self-Checkout Machine" className="main-image desktop-only" />
      </div>
    </section>
  );
};

export default Home;
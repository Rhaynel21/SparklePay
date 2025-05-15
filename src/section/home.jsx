import React from 'react';
import '../styles/home.css';
import selfCheckoutImage from '../assets/pos1.png';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        {/* Text Content */}
        <div className="home-text">
          <h4 className="home-subtitle">POS & Self-Checkout Machine Platform</h4>
          <img src={selfCheckoutImage} alt="Self-Checkout Machine" className="main-image mobile-only" />

          <h1>
            Self-checkout made effortless. <span>POS made powerful</span>
          </h1>
          <p>
            Sparkle up your checkout with fast, secure, and efficient POS and Self-Checkout solutions powered by cutting-edge technology. Effortless payments, real-time inventory, and seamless operations make every sale smarter, faster, and more secure with Sparkle!
          </p>
          <div className="home-buttons">
            <a href="#demo" className="btn primary">Get a Demo</a>
            <a href="#learn-more" className="btn secondary">Learn More</a>
          </div>
        </div>

        {/* Image (shown only in desktop) */}
        <img src={selfCheckoutImage} alt="Self-Checkout Machine" className="main-image desktop-only" />
      </div>
    </section>
  );
};

export default Home;

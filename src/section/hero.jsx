import React, { useState } from 'react';
import '../styles/hero.css'; // Ensure the CSS file is correctly imported
import '../styles/features.css'; // Ensure the CSS file for features is imported
import posImage from '../assets/mockup2.png';
import selfcheckoutImage from '../assets/pos2.png';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('selfcheckout');

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        {/* Gradient Circles */}
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h4 className="hero-subtitle">POS & Self-Checkout Machine Platform</h4>
            <h1>
              Self-checkout made effortless. <span>POS made powerful</span>
            </h1>
            <p>
              Sparkle up your checkout with fast, secure, and efficient POS and Self-Checkout solutions powered by cutting-edge technology. Effortless payments, real-time innovation, and seamless operations make every sale smarter, faster, and more secure with Sparkle!
            </p>
            <div className="hero-buttons">
              <a href="#demo" className="btn primary">Get a Demo</a>
              <a href="#learn-more" className="btn secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="../assets/pos1.png" alt="Self-Checkout Machine" />
          </div>
        </div>
      </div>

      {/* Features Tabs Section */}
      <section className="features-tabs">
        {/* Tabs Header */}
        <div className="tabs-header">
          <button
            className={activeTab === 'pos' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('pos')}
          >
            POS
          </button>
          <button
            className={activeTab === 'selfcheckout' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('selfcheckout')}
          >
            Self-Checkout Machine
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'pos' && (
            <div className="content-wrapper">
              <div className="text">
                <h2>Your next POS is here.</h2>
                <p>
                  From real-time sales insights to effortless inventory management, everything you
                  need is at your fingertips.
                </p>
                <a href="#features" className="btn primary">
                  See All Features
                </a>
              </div>
              <div className="image">
                <img src={posImage} alt="POS Feature" />
              </div>
            </div>
          )}

          {activeTab === 'selfcheckout' && (
            <div className="content-wrapper">
              <div className="text">
                <h2>Your next self-checkout is here.</h2>
                <p>
                  The smart, seamless solution that lets customers skip the line so they remember the
                  service, not the wait.
                </p>
                <a href="#features" className="btn primary">
                  See All Features
                </a>
              </div>
              <div className="image">
                <img src={selfcheckoutImage} alt="Self-Checkout Feature" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
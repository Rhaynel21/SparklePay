import React, { useState } from 'react';
import { FaTools, FaChartLine, FaHandsHelping } from 'react-icons/fa'; // Import Font Awesome icons
import '../styles/features.css';

const features = [
  {
    title: 'All-in-One System',
    description:
      'From seamless logins and sales tracking to inventory alerts and receipt printing, Sparkle brings all your essential tools together in one smart, easy-to-use platform.',
    icon: <FaTools />, // Updated icon
  },
  {
    title: 'Real-Time Control',
    description:
      'Track sales as they happen, monitor inventory levels, and make data-driven decisions with up-to-date insights across your entire operation.',
    icon: <FaChartLine />, // Updated icon
  },
  {
    title: 'Expert Support',
    description:
      'Get personalized guidance and support from Sparkle specialists who understand your business and are ready to help you succeed every step of the way.',
    icon: <FaHandsHelping />, // Updated icon
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <h2>Step into the Sparkle experience</h2>
        <p>
          From smart checkout tools to real-time insights that drive better decisions, Sparkle helps forward–thinking businesses work faster, sell smarter, and grow stronger.
        </p>
      </div>

      <div className="features-cards">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-card ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="feature-icon-title">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
            </div>
            <p>{feature.description}</p>
            <a href="#learn">Learn More</a>
          </div>
        ))}
      </div>

      <div className="features-pagination">
        {features.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Features;
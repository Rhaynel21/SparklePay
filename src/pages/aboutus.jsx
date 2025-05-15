import React from 'react';
import '../styles/aboutus.css';
import aboutImg1 from '../assets/about3.png';
import featuresImg from '../assets/bulb2.png';
import { FaArrowRight } from 'react-icons/fa';
import Header from '../components/header'; // Import Header
import Footer from '../components/footer'; // Import Footer

const benefits = [
  { id: 1, title: 'Consistency', desc: 'Our solutions are reliable and affordable, with consistent performance to help you scale.' },
  { id: 2, title: 'Cost Efficiency', desc: 'We reduce costs without reducing quality. More value. Less spend.' },
  { id: 3, title: 'Custom Fit', desc: 'Sparkle adapts to your business needs, because it’s uniquely tailored for you.' },
  { id: 4, title: 'Seamless Integration', desc: 'No disruptions, just improvements. Sparkle integrates into your current system smoothly.' },
  { id: 5, title: 'Real-Time Insights', desc: 'Get up-to-date info to make fast, smart decisions for your business.' },
  { id: 6, title: 'Enhanced Experience', desc: 'Deliver exceptional service to clients by staying informed, agile, and responsive.' },
];

const About = () => {
  return (
    <div className="about-page">
      <Header /> {/* Include Header */}

      {/* About Section */}
      <section className="about-section">
        {/* Text left (big screen), reordered on small */}
        <div className="about-text">
          <div className="about-heading">
            <h2><span>About Us</span></h2>
            <h3><strong>Sparkle</strong> Making Innovation Simple, Smart, And For All.</h3>
          </div>
          <div className="about-description">
            <p>
              Sparkle is a world–class commerce platform dedicated to bringing flexible, friendly, and innovative technology to everyone.
              Our mission is to provide tailored solutions that empower businesses of all sizes and types with a smarter, easier way
              to operate, innovate, and thrive.
            </p>
            <p>
              Whether you're a business owner or a company looking to innovate, Sparkle is here to support your journey.
            </p>
            <a href="#join" className="about-cta">Join Us <FaArrowRight /></a>
          </div>
        </div>

        {/* Image right (big screen), 3rd item on small */}
        <div className="about-images">
          <img src={aboutImg1} alt="Office" />
        </div>
      </section>

      {/* Features */}
      <section className="features-section-alt">
        <div className="features-image">
          <img src={featuresImg} alt="Bulbs" />
        </div>
        <div className="features-text">
          <h4>Features</h4>
          <h3>
            We work every day to create impactful, tailored software that meets today's needs and tomorrow’s goals.
          </h3>
          <p>
            At SparklePay, our main goal is to create affordable technological breakthroughs that drive business growth.
            With intuitive software and smooth experiences, we make complex tasks simple so you can focus on what matters.
          </p>
          <a href="#learn-more" className="about-cta">Learn More <FaArrowRight /></a>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <h4>Our Benefits</h4>
        <h3>Join Sparkle and start enjoying real benefits today.</h3>
        <p className="benefits-subtext">
          Experience our user-friendly POS and self–checkout solutions for your store and enjoy seamless transactions,
          better checkouts, and cutting–edge technology.
        </p>
        <div className="benefits-cards">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-number">{`0${benefit.id}`}</div>
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
              <a href="#learn-more">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <Footer /> {/* Include Footer */}
    </div>
  );
};

export default About;

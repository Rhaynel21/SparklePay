import React, { useState } from 'react';
import Header from '../components/header'; // Import Header
import Footer from '../components/footer'; // Import Footer
import '../styles/pricing.css'; // Make sure this path is correct

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const prices = {
    monthly: {
      pos: '8,000',
      pay: '15,000',
      bundle: '22,000',
    },
    yearly: {
      pos: '76,800',
      pay: '144,000',
      bundle: '211,000',
    },
  };

  return (
    <>
      <Header /> {/* Include Header */}
      <section className="pricing-section">
        <h2 className="title">Flexible Pricing Plans to Helps You Shine</h2>
        <p className="subtitle">
          Choose the perfect Sparkle package that fits your needs, whether you're just getting started or ready to take your business to the next level.
        </p>

        {/* Billing Toggle */}
        <div className="billing-toggle">
          <button
            className={billingCycle === 'monthly' ? 'active' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={billingCycle === 'yearly' ? 'active' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {/* Sparkle POS */}
          <div className="card">
            <h3>Sparkle POS</h3>
            <p className="price">
              PHP <strong>{prices[billingCycle].pos}</strong> /{billingCycle === 'monthly' ? 'mo' : 'yr'}
            </p>
            <ul>
              <li>Registration, Login, Logout</li>
              <li>Sales Dashboard</li>
              <li>Sales Reports & Analytics</li>
              <li>Inventory Tracking & Alerts</li>
              <li>Secure Cloud Access</li>
            </ul>
            <button className="contact-btn dark">Contact Sales</button>
          </div>

          {/* Sparkle Pay (highlighted) */}
          <div className="card featured">
            <h3>Sparkle Pay</h3>
            <p className="price">
              PHP <strong>{prices[billingCycle].pay}</strong> /{billingCycle === 'monthly' ? 'mo' : 'yr'}
            </p>
            <ul>
              <li>23-Inch Touch Monitor</li>
              <li>5-Inch Display Panel</li>
              <li>Coin In / Out & Dispenser</li>
              <li>Bill Acceptance Slot</li>
              <li>Barcode Scanner</li>
              <li>Receipt Printers</li>
              <li>Built-in Camera</li>
              <li>POS Terminal Cradle</li>
            </ul>
            <button className="contact-btn light">Contact Sales</button>
          </div>

          {/* Sparkle Bundle */}
          <div className="card">
            <h3>Sparkle Bundle</h3>
            <p className="price">
              PHP <strong>{prices[billingCycle].bundle}</strong> /{billingCycle === 'monthly' ? 'mo' : 'yr'}
            </p>
            <ul>
              <li>All POS Software Features</li>
              <li>All Self-Checkout Hardware</li>
              <li>Seamless Integration</li>
              <li>Real-Time Support</li>
              <li>Lifetime Updates & Security</li>
            </ul>
            <button className="contact-btn dark">Contact Sales</button>
          </div>
        </div>
      </section>
      <Footer /> {/* Include Footer */}
    </>
  );
};

export default Pricing;
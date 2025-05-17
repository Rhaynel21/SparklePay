import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/products.css';
import posImage from '../assets/mockup2.png';
import selfCheckoutImage from '../assets/pos2.png';

const Products = () => {
  const [activeTab, setActiveTab] = useState('selfcheckout');
  const navigate = useNavigate();

  return (
    <section className="products-section" id="products">
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
        <div className="content-wrapper">
          {/* Text Section */}
          <div className="text">
            {activeTab === 'pos' ? (
              <>
                <h2>A POS that does it all for you.</h2>
                <p>
                  From real-time sales insights to effortless inventory management, everything you
                  need is at your fingertips.
                </p>
              </>
            ) : (
              <>
                <h2>Your next self-checkout is here.</h2>
                <p>
                  The smart, seamless solution that lets customers skip the line so they remember
                  the service, not the wait.
                </p>
              </>
            )}
            <button className="btn primary" onClick={() => navigate('/posfeatures')}>
              See All Features
            </button>
          </div>

          {/* Image Section */}
          <div className="image">
            <img
              src={activeTab === 'pos' ? posImage : selfCheckoutImage}
              alt={activeTab === 'pos' ? 'POS Dashboard' : 'Self-Checkout Machine'}
              className="product-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

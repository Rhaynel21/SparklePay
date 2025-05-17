import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pricing from './pages/pricing';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './section/contacts';
import FeaturesSection from './section/features';
import SharedLayout from './components/sharedbackground'; 
import About from './pages/aboutus';

// Import your POS and Kiosk features pages
import PosFeatures from './pages/posfeatures';
import { SelfCheckout } from './pages/kioskfeatures';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pricing Page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* About Us Page */}
        <Route path="/aboutus" element={<About />} />

        {/* Contact Page (only Contact section) */}
        <Route path="/contact" element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        } />

        {/* POS Features Page */}
        <Route path="/posfeatures" element={
          <>
            <Header />
            <PosFeatures />
            <Footer />
          </>
        } />

        {/* Kiosk Features Page */}
        <Route path="/kioskfeatures" element={
          <>
            <Header />
            <SelfCheckout />
            <Footer />
          </>
        } />

        {/* Main Website Layout */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="App">
                <SharedLayout />
              </div>
              <FeaturesSection />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
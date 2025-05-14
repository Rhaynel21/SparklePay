import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pricing from './pages/pricing';
import Header from './components/header';
import Footer from './components/footer';
import Contact from './section/contacts';
import FeaturesSection from './section/features';
import SharedLayout from './components/sharedbackground'; 

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pricing Page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Main Website Layout */}
        <Route
          path="/"
          element={
            <>
              <Header />

              {/* Shared Background Section (Home + Products) */}
              <div className="App">
                <SharedLayout />
              </div>

              {/* Additional Sections */}
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

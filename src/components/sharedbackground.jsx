// src/components/SharedLayout.jsx
import React from 'react';
import Home from '../section/home';
import Products from '../section/products';
import '../styles/sharedbackground.css'; // Add this CSS file below

const SharedLayout = () => {
  return (
    <div className="shared-background">
      

      {/* Page Sections */}
      <Home />
      <Products />
    </div>
  );
};

export default SharedLayout;

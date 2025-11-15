import React from 'react';

import heroImage from "../../assets/images/about-us/blog-card2.webp";

import "./css/faq.css"; 

function AboutHeroSimple() {
  return (
    // Note: The main container class 'shop-hero' is kept for CSS consistency
    <div className="faq-hero">
      <img 
        className="bgImg" 
        src={heroImage} 
        alt="About Us Background" 
      />
      <div className="shop-overlay"></div>
      <div className="container">
        <div className="main-text">
          <h1>FAQ</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutHeroSimple;
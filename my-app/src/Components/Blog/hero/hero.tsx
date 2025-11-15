import React from "react";
import "../../../Components/blog/hero/css/hero.css";
import "../../../Components/blog/css/responsive.css"

const HeroSection = () => {
  return (
<>
    <div className="hero-section">
        <img className="bgImg"/>
        <div className="newsletter-overlay"></div>
        <div className="container">
          <div className="main-text">
            <h1>NEWSLETTER</h1>
          </div>
        </div>
    </div>
</>
  );
};

export default HeroSection;

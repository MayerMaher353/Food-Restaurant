import React from 'react';
import "./css/menu.css";
import "./css/menuResponsive.css";
import video from "../../assets/videos/seavideo.mp4";
const menuHero = () => {
  return (
     <div className="hero-section">
       <video src={video} muted playsInline autoPlay loop></video>
       <div className="shop-overlay"></div>
       <div className="container">
         <div className="main-text">
            <h1>OUR MENU</h1>
         </div>
       </div>
     </div>
  );
};

export default menuHero;
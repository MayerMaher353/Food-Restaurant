import React from "react";
import "./css/our history.css"; 
import ourHistoryImg from "../../assets/images/OUR HISTORY.webp";

const OurHistoryHero: React.FC = () => (
  <div className="row g-0 background-image" id="our-history">
    <div
      className="col-12 background d-flex justify-content-center align-items-center pt-0 position-relative"
      style={{ backgroundImage: `url(${ourHistoryImg})` }}
    >
      <div className="overlay position-absolute top-0 start-0"></div>
      <div className="background-text position-absolute z-2 text-center">
        <h2>OUR HISTORY</h2>
      </div>
    </div>
  </div>
);

export default OurHistoryHero;

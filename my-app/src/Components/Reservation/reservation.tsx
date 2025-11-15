import React from "react";
import "./css/reservation.css"; 
import backgroundImage from "../../assets/images/reservation-bg2.jpg.webp"; 

const BackgroundHero: React.FC = () => {
  return (
    <div className="background-hero">
      <img className="bgImg" src={backgroundImage} alt="Reservation Background" />
      <div className="overlay"></div>
      <div className="container">
        <div className="main-text text-center">
          <h2>Reservation</h2>
        </div>
      </div>
    </div>
  );
};

export default BackgroundHero;

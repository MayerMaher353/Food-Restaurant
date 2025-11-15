import React from 'react';
import "./css/shop.css";
import hero from "../../assets/images/shop img/shopBG.jpg.webp";

function ShopHero() {
  return (
    <div className="shop-hero">
      <img className="bgImg" src={hero} alt="Shop Background" />
      <div className="shop-overlay"></div>
      <div className="container">
        <div className="main-text">
          <h5>ONLINE STORE</h5>
          <h1>SHOP</h1>
          <p>
            Quaerat debitis, vel, sapiente dicta sequi <br />labore porro
            pariatur harum expedita.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShopHero;
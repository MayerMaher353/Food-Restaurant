// components/Footer.tsx
import React from "react";
import "./css/Reservation.css";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="logo-holder">
              <img src="./assets/images/logo/logo-sm.png" alt="" />
            </div>
          </div>
          {/* Socials */}
          <div className="socail-col col-lg-6 col-md-6 col-sm-6">
            <div className="socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-dot col-lg-12 col-md-12 col-sm-12"></div>
          <div className="copyrights col-lg-6 col-md-6 col-sm-12">
            <p>© Tastyc 2022 . All rights reserved.</p>
          </div>
          <div className="back-btn col-lg-6 col-md-6 col-sm-12">
            <a href="#">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

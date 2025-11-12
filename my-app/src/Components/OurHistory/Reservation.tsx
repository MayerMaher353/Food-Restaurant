import React from "react";
import "./css/our history.css";
import "./css/reservation.css";
import reservedImg from "../../assets/images/reserved.png";


const Reservation: React.FC = () => (
  <div className="reservation">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 content">
          <span>RESERVATION</span>
          <h1>THIS EVENING WILL BE GREAT!</h1>
          <span>Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur harum expedita.</span>
          <div className="row">
            <div className="col-lg-6">
              <button id="open-reservation">RESERVATION</button>
            </div>
            <div className="col-lg-6">
              <a href="contact.html">GET IN TOUCH</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={reservedImg} alt="Reserved" />
        </div>
      </div>
    </div>
  </div>
);

export default Reservation;

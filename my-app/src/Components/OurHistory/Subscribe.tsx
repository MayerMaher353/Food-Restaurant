import React from "react";
import "./css/our history.css";

const Subscribe: React.FC = () => (
  <div className="subscribe">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col">
          <p>NEWSLETTER</p>
          <h1>SUBSCRIBE OUR NEWSLETTER</h1>
          <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 ele">
              <input type="text" id="email" placeholder="Enter your email here" />
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 ele">
              <button type="submit" className="btn">subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Subscribe;

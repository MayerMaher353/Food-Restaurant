import React from "react";

import bg from "../../assets/images/reservation-bg.jpg";
import "./css/subscribe.css";


function subcribe() {
  return (
    <>
      {/* start subscribe */}
       <div
        className="subscribe"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>NEWSLETTER</p>
              <h1>SUBSCRIBE OUR NEWSLETTER</h1>
              <p className="p">
                Rolorem, beatae dolorum, praesentium itaque et quam quaerat.
              </p>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 ele">
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email here"
                  />
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 ele">
                  <button type="submit" className="btn">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end subscribe */}
    </>
  );
}

export default subcribe;

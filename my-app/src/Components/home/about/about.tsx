import React from "react";

import about1 from "../../../assets/images/about1.jpg";
import about2 from "../../../assets/images/about2.jpg";
import about3 from "../../../assets/images/about3.jpg";

import featureImg1 from "../../../assets/images/why-choose-img-1.png";
import featureImg2 from "../../../assets/images/why-choose-img-2.png";
import featureImg3 from "../../../assets/images/why-choose-img-3.png";
import featureImg4 from "../../../assets/images/why-choose-img-4.png";

import itemImg1 from "../../../assets/images/why-choose-item-1.jpg";
import itemImg2 from "../../../assets/images/why-choose-item-2.jpg";
import itemImg3 from "../../../assets/images/why-choose-item-3.jpg";
import itemImg4 from "../../../assets/images/why-choose-item-4.jpg";

import "../css/style.css";


function About() {
  return (
    <section className="restaurant-about py-5">
      <div className="container">
        {/* About Us */}
        <div className="row align-items-center">
          <div className="col-md-6 aboutus">
            <h5 className="h5-menu">About Us</h5>
            <h2>We Invite You to Visit Our Restaurant</h2>
            <p className="p-menu">
              Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
              repudiandae dolorem, beatae dolorum, praesentium itaque et quam
              quaerat.
            </p>
            <button className="btn-custom">READ MORE</button>
          </div>
          <div className="col-md-6 gg">
            <img src={about1} className="img-fluid" alt="About" />
          </div>
        </div>

        {/* Menu */}
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 menu-info">
            <h5 className="h5-menu">Restaurant Menu</h5>
            <h2>Always Fresh Ingredients</h2>
            <p className="p-menu">
              Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
              repudiandae dolorem, beatae dolorum, praesentium itaque et quam
              quaerat.
            </p>
            <button className="btn-custom">VIEW MENU</button>
          </div>
          <div className="col-md-6 gg">
            <img src={about2} className="img-fluid" alt="Menu" />
          </div>
        </div>

        {/* Our Team */}
        <div className="row align-items-center our-team">
          <div className="col-md-6 our-team-container">
            <h5 className="h5-menu">Our Team</h5>
            <h2>Use the Tips & Recipes of Our Chefs</h2>
            <p className="p-menu">
              Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
              repudiandae dolorem, beatae dolorum, praesentium itaque et quam
              quaerat.
            </p>
            <button className="btn-custom">MEET THE TEAM</button>
          </div>
          <div className="col-md-6 gg">
            <img src={about3} className="img-fluid" alt="Team" />
          </div>
        </div>

        {/* Features */}
        <div className="text-center my-10 features">
          <h5>FEATURES</h5>
          <h2>Why people choose us?</h2>
          <p className="p-features">
            Porro eveniet, autem ipsam vitae consequatur!
          </p>
        </div>

        {/* Icons Features */}
        <div className="row text-center icons-features">
          <div className="col-lg-3 col-md-3 col-sm-12 ele-features active">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Fresh Ingredients</h3>
                <img src={featureImg1} alt="Fresh Ingredients" />
                <h2>
                  <span className="counter-features" id="feature-count1">
                    100
                  </span>
                  %
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={itemImg1} alt="Fresh Ingredients" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 ele-features">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Signature Dishes</h3>
                <img src={featureImg2} alt="Signature Dishes" />
                <h2>
                  <span className="counter-features" id="feature-count2">
                    50
                  </span>
                  +
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={itemImg2} alt="Signature Dishes" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 ele-features">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Customer Rating</h3>
                <img src={featureImg3} alt="Customer Rating" />
                <h2>
                  <span className="counter-features" id="feature-count3">
                    4.9
                  </span>
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={itemImg3} alt="Customer Rating" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 ele-features">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Years of Excellence</h3>
                <img src={featureImg4} alt="Years of Excellence" />
                <h2>
                  <span className="counter-features" id="feature-count4">
                    25
                  </span>
                  +
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={itemImg4} alt="Years of Excellence" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

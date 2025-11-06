import React, { useEffect } from "react";
import "./css/Features.css";
// ====== IMPORT IMAGES ======
import whyChooseImg1 from "../../assets/images/why-choose-img-1.png";
import whyChooseImg2 from "../../assets/images/why-choose-img-2.png";
import whyChooseImg3 from "../../assets/images/why-choose-img-3.png";
import whyChooseImg4 from "../../assets/images/why-choose-img-4.png";

import whyChooseItem1 from "../../assets/images/why-choose-item-1.jpg";
import whyChooseItem2 from "../../assets/images/why-choose-item-2.jpg";
import whyChooseItem3 from "../../assets/images/why-choose-item-3.jpg";
import whyChooseItem4 from "../../assets/images/why-choose-item-4.jpg";

const Features: React.FC = () => {

  useEffect(() => {
    // Hover active effect
    const boxes = document.querySelectorAll<HTMLElement>(".ele-features");
    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        boxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
      });
    });

    // Counter animation
    const animateCounter = (id: string, target: number, duration: number) => {
      const counter = document.getElementById(id);
      if (!counter) return;

      let start = 0;
      const fps = 60; // frames per second
      const totalSteps = Math.round((duration / 1000) * fps);
      const increment = target / totalSteps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        start += increment;

        if (step >= totalSteps) {
          start = target;
          clearInterval(timer);
        }

        counter.textContent = Number.isInteger(target)
          ? Math.floor(start).toString()
          : start.toFixed(1);
      }, 1000 / fps);
    };

    animateCounter("feature-count1", 100, 3000);
    animateCounter("feature-count2", 50, 3000);
    animateCounter("feature-count3", 4.9, 3000);
    animateCounter("feature-count4", 25, 3000);

    // Cleanup event listeners on unmount
    return () => {
      boxes.forEach((box) => {
        box.replaceWith(box.cloneNode(true));
      });
    };
  }, []);

  return (
    <section className="restaurant-about py-5">
      <div className="container">

        {/* Features */}
        <div className="text-center my-10 features">
          <h5>FEATURES</h5>
          <h2>Why people choose us?</h2>
          <p className="p-features">
            Porro eveniet, autem ipsam vitae consequatur!
          </p>
        </div>

        <div className="row text-center icons-features">
          <div className="col-lg-3 col-md-3 col-sm-12 ele-features active">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Fresh Ingredients</h3>
                <img src={whyChooseImg1} alt="Fresh Ingredients" />
                <h2>
                  <span className="counter-features" id="feature-count1">100</span>%
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={whyChooseItem1} alt="Fresh Ingredients Background" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 ele-features">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Signature Dishes</h3>
                <img src={whyChooseImg2} alt="Signature Dishes" />
                <h2>
                  <span className="counter-features" id="feature-count2">50</span>+
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={whyChooseItem2} alt="Signature Dishes Background" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 ele-features">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Customer Rating</h3>
                <img src={whyChooseImg3} alt="Customer Rating" />
                <h2>
                  <span className="counter-features" id="feature-count3">4.9</span>
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={whyChooseItem3} alt="Customer Rating Background" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 ele-features">
            <div className="content">
              <div className="why-choose-item-content">
                <h3>Years of Excellence</h3>
                <img src={whyChooseImg4} alt="Years of Excellence" />
                <h2>
                  <span className="counter-features" id="feature-count4">25</span>+
                </h2>
              </div>
              <div className="why-choose-item-image">
                <div className="overlay"></div>
                <img src={whyChooseItem4} alt="Years of Excellence Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

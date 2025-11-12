import React from "react";
import phoneImg from "../../../assets/images/phone.png";
import "../css/style.css";

const AppDownloadSection: React.FC = () => {
  return (
    <>
      {/* START APP */}
      <div className="app-download-container"> 
        <section className="app-download">
          <div className="overlay"></div>
          <div className="container">
            <div className="row align-items-center">
              {/* text */}
              <div className="col-12 col-lg-6">
                <div className="content text-center">
                  <p className="subtitle">Mobile Application</p>
                  <h2 className="title">
                    Download <br />
                    our application
                  </h2>
                  <p className="description">
                    Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur
                    harum expedita.
                  </p>
                  <div className="buttons">
                    <a
                      href="https://www.apple.com/ua/app-store/"
                      className="btn download-btn"
                    >
                      <i className="fab fa-apple"></i> Appstore
                    </a>
                    <a
                      href="https://play.google.com/store"
                      className="btn download-btn"
                    >
                      <i className="fab fa-google-play"></i> Playmarket
                    </a>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="col-12 col-lg-6">
                <div className="phones text-center">
                  <img src={phoneImg} alt="App Preview" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AppDownloadSection;

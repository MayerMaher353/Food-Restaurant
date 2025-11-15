import React from "react";
// import SharedHeader from "../../../shared/header/header";
import "../../../Components/home/hero/css/hero.css";

const BackgroundSection: React.FC = () => {
  return (
    <>
      <div className="row g-0 background-image" id="home">
        <div className="col-12 background d-flex justify-content-center align-items-center pt-0 position-relative">
          <div className="overlay position-absolute top-0 start-0"></div>
          <div className="background-text position-absolute z-2 text-center">
            <div className="welcoming">
              <h6>HELLO, NEW FRIEND!</h6>
            </div>
            <h2>
              Welcome To
              <br />
              TASTYC SEAFOOD
            </h2>
            <button className="book-a-table-button">
              <a href="#">BOOK A TABLE</a>
            </button>
            <button className="open-menu-button">
              <a href="/menu">OPEN MENU</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundSection;

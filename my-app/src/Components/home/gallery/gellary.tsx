import React from "react";
import "./css/gallery.css";
// ===== IMAGES (gallery) =====
import g1 from "../../../assets/images/gallery-1.jpg";
import g2 from "../../../assets/images/gallery-2.jpg";
import g3 from "../../../assets/images/gallery-3.jpg";
import g4 from "../../../assets/images/gallery-4.jpg";
import g5 from "../../../assets/images/gallery-5.jpg";
import g6 from "../../../assets/images/gallery-6.jpg";

// ===== IMAGES (scrolling ticker) =====
import tick1 from "../../../assets/images/scrolling-ticker-image-1.jpg";
import tick2 from "../../../assets/images/scrolling-ticker-image-2.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="head">
        <p>OUR GALLERY</p>
        <h1>Savor the view - delicious dishes and unforgettable memories</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ele">
            <div className="content">
              <div className="overlay">
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <img src={g1} />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ele">
            <div className="content">
              <div className="overlay">
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <img src={g2} />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ele">
            <div className="content">
              <div className="overlay">
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <img src={g3} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ele">
            <div className="content">
              <div className="overlay">
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <img src={g4} />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ele">
            <div className="content">
              <div className="overlay">
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <img src={g5} />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ele">
            <div className="content">
              <div className="overlay">
                <a href="#">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
              <img src={g6} />
            </div>
          </div>
        </div>
      </div>
      <div className="scroller">
        <div className="scrolling-content">
          <span>
            <img src={tick1} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick2} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick1} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick2} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick1} alt="" />
            Grilled prawns
          </span>
          <span>
            <img src={tick2} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick1} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick2} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick1} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick2} alt="" />
            Grilled prawns
          </span>
        </div>
        <div className="scrolling-content">
          <span>
            <img src={tick1} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick2} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick1} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick2} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick1} alt="" />
            Grilled prawns
          </span>
          <span>
            <img src={tick2} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick1} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick2} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick1} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick2} alt="" />
            Grilled prawns
          </span>
        </div>
      </div>
      <div className="scroller reverse">
        <div className="scrolling-content">
          <span>
            <img src={tick1} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick2} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick1} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick2} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick1} alt="" />
            Grilled prawns
          </span>
          <span>
            <img src={tick2} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick1} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick2} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick1} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick2} alt="" />
            Grilled prawns
          </span>
        </div>
        <div className="scrolling-content">
          <span>
            <img src={tick1} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick2} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick1} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick2} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick1} alt="" />
            Grilled prawns
          </span>
          <span>
            <img src={tick2} alt="" />
            Crab cakes
          </span>
          <span>
            <img src={tick1} alt="" />
            Seafood paella
          </span>
          <span>
            <img src={tick2} alt="" />
            Shrimp skewers
          </span>
          <span>
            <img src={tick1} alt="" />
            Lobster tail
          </span>
          <span>
            <img src={tick2} alt="" />
            Grilled prawns
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

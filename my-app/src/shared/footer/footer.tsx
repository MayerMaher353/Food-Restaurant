import { useEffect, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
// import styles from "./css/Footer.css";
import "./css/footer.css";
import "./css/footerResponsive.css"
import logo from "../../assets/images/logo/logo-sm.png";
import img1 from "../../assets/images/footer-swiper/footer-gallery1.webp";
import img2 from "../../assets/images/footer-swiper/footer-gallery2.webp";
import img3 from "../../assets/images/footer-swiper/footer-gallery3.webp";
import img4 from "../../assets/images/footer-swiper/footer-gallery4.webp";
import img5 from "../../assets/images/footer-swiper/footer-gallery5.webp";
import altImg1 from "../../assets/images/galley-images/gallery-eight.jpg";
import altImg2 from "../../assets/images/galley-images/gallery-four.jpg";
import altImg3 from "../../assets/images/galley-images/gallery-five.jpg";
import altImg4 from "../../assets/images/galley-images/gallery-twelve.jpg";
import altImg5 from "../../assets/images/galley-images/gallery-six.jpg";

const Footer = () => {
  const popupImages = [altImg1, altImg2, altImg3, altImg4, altImg5];
  const galleryImages = [img1, img2, img3, img4, img5];
  const popupTitles = [" Fish Burger", "Fish soup", "Crawfish", "Juice", "Casserole"];
  const swiperRef = useRef<SwiperType | null>(null);
  const [popup, setPopup] = useState({
    open: false,
    img: "",
    title: ""
  });


  const hasAutoSwiped = useRef(false);

  useEffect(() => {
    const section = document.querySelector(".gallery-container");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoSwiped.current && swiperRef.current) {
            hasAutoSwiped.current = true;
            setTimeout(() => {
              swiperRef.current?.slideNext(600);
            }, 1000);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);


  return (
    <footer id="main-footer">
      <div className="container">
        <div className="row">

          {/* Logo */}
          <div className="col-lg-6 col-md-6 col-sm-6" id="main-footer-column">
            <div className="logo-holder">
              <img src={logo} alt="Logo" />
            </div>
          </div>

          {/* Social icons */}
          <div className="social-col col-lg-6 col-md-6 col-sm-6">
            <div className="socials">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>

          <div className="border-dot col-12"></div>

          {/* About */}
          <div className="about-us-footer col-lg-4 col-md-4 col-sm-12">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expedita
              repudiandae neque illum aspernatur fugiat maiores id magni, modi,
              quaerat vitae.
            </p>
            <a href="/about-us">READ MORE</a>
          </div>

          {/* Contact info */}
          <div className="contact-info-footer col-lg-4 col-md-4 col-sm-12">
            <h3>Contact info</h3>
            <ul className="tst-footer-contact tst-text-shadow tst-mb-30">
              <li><span className="tst-label">Call:</span> <span>+76 (094) 754 43 7I</span></li>
              <li><span className="tst-label">Write:</span> <span>your.email.inbox@here.com</span></li>
              <li><span className="tst-label">Find us:</span> <span>Canada, Toronto, Avenue 31B</span></li>
            </ul>
            <a href="/contact">READ MORE</a>
          </div>

          {/* Gallery */}
          <div className="gallery-footer col-lg-4 col-md-4 col-sm-12 gallery-section">
            <h3>Gallery</h3>
            <Swiper
              modules={[Navigation]}
              loop={true}
              slidesPerView={4}
              spaceBetween={10}
              navigation={{
                nextEl: ".gallery-next",
                prevEl: ".gallery-prev",
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="gallery-container"
            >
              {galleryImages.concat(galleryImages).map((image, index) => {
  const popupIndex = index % popupImages.length;
  return (
    <SwiperSlide
      key={index}
      className="gallery-item"
      onClick={() => setPopup({ 
          open: true, 
          img: popupImages[popupIndex], 
          title: popupTitles[popupIndex] 
      })}
    >
      <img src={galleryImages[index % galleryImages.length]} alt={`Food ${index + 1}`} />
      <div className="overlay">
        <i className="fas fa-search"></i>
      </div>
    </SwiperSlide>
  );
})}

            </Swiper>
            {/* =================== POPUP =================== */}
            {popup.open && (
              <div
                id="image-popup"
                className="footer-popup-backdrop"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setPopup((prev) => ({ ...prev, open: false }));
                  }
                }}
              >
                <span
                  id="close-popup"
                  className="footer-popup-close"
                  onClick={() => setPopup((prev) => ({ ...prev, open: false }))}
                >
                  &times;
                </span>

                <img id="popup-img" src={popup.img} alt="" className="footer-popup-img" />

                <div id="popup-title" className="footer-popup-title">
                  {popup.title}
                </div>
              </div>
            )}


            <div className="gallery-controls">
              <a href="/gallery">READ MORE</a>
              <div className="nav-controls">
                <div className="gallery-prev">
                  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="gallery-next">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="border-dot col-12"></div>

          <div className="copyrights col-lg-6 col-md-6 col-sm-12">
            <p>© Tastyc 2022. All rights reserved.</p>
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

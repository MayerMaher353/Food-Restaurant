import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css"; 
// import styles from "./css/Footer.module.css";
import "./css/footer.css";




import logo from "../../assets/images/logo/logo-sm.png";
import img1 from "../../assets/images/footer-swiper/gallery-i-2-140x140.jpg.webp";
import img2 from "../../assets/images/footer-swiper/blog-2-140x140.jpg.webp";
import img3 from "../../assets/images/footer-swiper/gallery-i-4-140x140.jpg.webp";
import img4 from "../../assets/images/footer-swiper/gallery-i-5-140x140.jpg.webp";
import img5 from "../../assets/images/footer-swiper/gallery-i-6-140x140.jpg.webp";

const Footer = () => {
  
  const galleryImages = [img1, img2, img3, img4, img5];
  const swiperRef = useRef<SwiperType | null>(null);
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
          <div className="col-lg-6 col-md-6 col-sm-6">
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
            <a href="#">READ MORE</a>
          </div>

          {/* Contact info */}
          <div className="contact-info-footer col-lg-4 col-md-4 col-sm-12">
            <h3>Contact info</h3>
            <ul className="tst-footer-contact tst-text-shadow tst-mb-30">
              <li><span className="tst-label">Call:</span> <span>+76 (094) 754 43 7I</span></li>
              <li><span className="tst-label">Write:</span> <span>your.email.inbox@here.com</span></li>
              <li><span className="tst-label">Find us:</span> <span>Canada, Toronto, Avenue 31B</span></li>
            </ul>
            <a href="#">READ MORE</a>
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
          {galleryImages.concat(galleryImages).map((image, index) => (
            <SwiperSlide key={index} className="gallery-item">
              <img src={image} alt={`Food ${index + 1}`} />
              <div className="overlay">
                <i className="fas fa-search"></i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


            <div className="gallery-controls">
              <a href="#">READ MORE</a>
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

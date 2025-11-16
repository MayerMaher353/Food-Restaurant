
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// ====== IMPORT IMAGES ======
import img1 from "../../assets/images/menu images/cooked-fish-with-potatoes-700x456.jpg.webp";
import img2 from "../../assets/images/menu images/gallery-i-4-700x456.jpg.webp";
import img3 from "../../assets/images/menu images/gallery-i-6-700x456.jpg.webp";
import img4 from "../../assets/images/menu images/gallery-i-2-700x456.jpg.webp";
import img5 from "../../assets/images/menu images/blog-2-700x456.jpg.webp";
import img6 from "../../assets/images/menu images/top-view-salmon-700x456.jpg.webp";

const Menu3 = () => {
  return (
    <div className="menu-2">
      <div className="menu-2-title">
        <span>MENU</span>
        <h1>Special Proposals Menu</h1>
        <span>
          Porro eveniet, autem ipsam corrupti consectetur cum.
          <br />
          Repudiandae dignissimos fugiat sit nam.
        </span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">

            {/* ========== Swiper Component ========== */}
            <Swiper
              modules={[Navigation, Keyboard]}
              slidesPerView={3}
              spaceBetween={30}
              loop={false}
              speed={1200}
              threshold={15}
              keyboard={{
                enabled: true,
                onlyInViewport: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                992: { slidesPerView: 3 },
              }}
              className="swiper-2"
            >

              {/* =================== SLIDES =================== */}
              <SwiperSlide>
                <a href="#">
                  <img src={img1} alt="" />
                </a>
                <div className="content">
                  <a href="#">Salmon with tomatoes</a>
                  <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>

                  <div>
                    <div className="price">
                      <span>
                        <span className="sign">€ </span>
                        <del>25.99</del>
                      </span>
                      <br />
                      <span>
                        <span className="sign">€ </span>
                        20.99
                      </span>
                    </div>
                    <a href="#"><i className="fas fa-cart-shopping"></i></a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#"><img src={img2} alt="" /></a>
                <div className="content">
                  <a href="#">Crabs</a>
                  <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>

                  <div>
                    <div className="price">
                      <span>
                        <span className="sign">€ </span>
                        <del>4.50</del>
                      </span>
                      <br />
                      <span>
                        <span className="sign">€ </span>
                        3.50
                      </span>
                    </div>
                    <a href="#"><i className="fas fa-cart-shopping"></i></a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#"><img src={img3} alt="" /></a>
                <div className="content">
                  <a href="#">Casserole</a>
                  <span>Consectetur adipisicing elit. Soluta، impedit، saepe.</span>

                  <div>
                    <div className="price">
                      <span>
                        <span className="sign">€ </span>
                        <del>5.99</del>
                      </span>
                      <br />
                      <span>
                        <span className="sign">€ </span>
                        4.99
                      </span>
                    </div>
                    <a href="#"><i className="fas fa-cart-shopping"></i></a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#"><img src={img4} alt="" /></a>
                <div className="content">
                  <a href="#">Fish burger</a>
                  <span>Consectetur adipisicing elit. Soluta، impedit، saepe.</span>

                  <div>
                    <div className="price">
                      <span>
                        <span className="sign">€ </span>
                        <del>2.99</del>
                      </span>
                      <br />
                      <span>
                        <span className="sign">€ </span>
                        1.99
                      </span>
                    </div>
                    <a href="#"><i className="fas fa-cart-shopping"></i></a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#"><img src={img5} alt="" /></a>
                <div className="content">
                  <a href="#">Fish soup</a>
                  <span>Consectetur adipisicing elit. Soluta، impedit، saepe.</span>

                  <div>
                    <div className="price">
                      <span>
                        <span className="sign">€ </span>
                        <del>25.99</del>
                      </span>
                      <br />
                      <span>
                        <span className="sign">€ </span>
                        20.99
                      </span>
                    </div>
                    <a href="#"><i className="fas fa-cart-shopping"></i></a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <a href="#"><img src={img6} alt="" /></a>
                <div className="content">
                  <a href="#">Salmon</a>
                  <span>Consectetur adipisicing elit. Soluta، impedit، saepe.</span>

                  <div>
                    <div className="price">
                      <span>
                        <span className="sign">€ </span>
                        <del>1.99</del>
                      </span>
                      <br />
                      <span>
                        <span className="sign">€ </span>
                        1.50
                      </span>
                    </div>
                    <a href="#"><i className="fas fa-cart-shopping"></i></a>
                  </div>
                </div>
              </SwiperSlide>

              <div className="slider">
                <a href="/shop">ALL PRODUCTS</a>

                <div className="button">
                  <p>SLIDER NAVIGATION</p>

                  <div className="swiper-button-prev">
                    <i className="fas fa-arrow-left"></i>
                  </div>

                  <div className="swiper-button-next">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>

            </Swiper>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu3;

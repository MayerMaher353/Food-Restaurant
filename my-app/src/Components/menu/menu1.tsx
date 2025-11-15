
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import img1 from "../../assets/images/menu images/about2-700x456.jpg.webp";
import img2 from "../../assets/images/menu images/gallery-i-4-700x456.jpg.webp";
import img3 from "../../assets/images/menu images/gallery-i-6-700x456.jpg.webp";
import img4 from "../../assets/images/menu images/gallery-i-2-700x456.jpg.webp";
import img5 from "../../assets/images/menu images/blog-2-700x456.jpg.webp";
import img6 from "../../assets/images/menu images/top-view-salmon-700x456.jpg.webp";
import img7 from "../../assets/images/menu images/blog-1-700x456.jpg.webp";
import img8 from "../../assets/images/menu images/cooked-fish-with-potatoes-700x456.jpg.webp";

const MenuSlider = () => {
  const labels = ["ALL DISHES", "SALTWATER FISH", "FARMED FISH", "CRUSTACEANS"];

  return (
    <div className="menu-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="swiper-pagination"></div>

            <Swiper
              modules={[Pagination, EffectFade]}
              slidesPerView={1}
              spaceBetween={30}
              autoHeight={true}
              loop={false}
              speed={700}
              threshold={15}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={{
                el: ".swiper-pagination",  
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className}">${labels[index]}</span>`,
              }}
              className="swiper-1"
            >

              {/* SLIDE 1 */}
              <SwiperSlide>
                <div className="menu-title mb-5">
                  <span>OUR MENU</span>
                  <h1>All Dishes</h1>
                  <span>
                    Porro eveniet, autem ipsam corrupti consectetur cum.
                    <br />
                    Repudiandae dignissimos fugiat sit nam.
                  </span>
                </div>

                <div className="row">

                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img
                          src={img1}
                          alt=""
                        />
                      </a>
                      <div className="t1">
                        <a href="#">Boiled crayfish</a>
                        <span>
                          Consectetur adipisicing elit. Soluta, impedit, saepe.
                        </span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>5.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img
                          src={img2}
                          alt=""
                        />
                      </a>
                      <div className="t1">
                        <a href="#">Crabs</a>
                        <span>
                          Consectetur adipisicing elit. Soluta, impedit, saepe.
                        </span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>3.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img3} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Casserole
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>4.99</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img4} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Fish burger
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>1.99</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img5} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Fish soup
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>20.99</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img6} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Salmon
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>1.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img7} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Paella with seafood
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>3.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img8} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Salmon with tomatoes
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>20.99</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/*  SLIDE 2 */}
              <SwiperSlide>
                <div className="menu-title">
                  <span> 01 MENU</span>
                  <h1>Saltwater Fish</h1>
                  <span>
                    Porro eveniet, autem ipsam corrupti consectetur cum.
                    <br />
                    Repudiandae dignissimos fugiat sit nam.
                  </span>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img8} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Salmon with tomatoes
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>20.99</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img
                          src={img1}
                          alt=""
                        />
                      </a>
                      <div className="t1">
                        <a href="#">Boiled crayfish</a>
                        <span>
                          Consectetur adipisicing elit. Soluta, impedit, saepe.
                        </span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>5.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img5} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Fish soup
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>20.99</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img6} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Salmon
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>1.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/*  SLIDE 3 */}
              <SwiperSlide>
                <div className="menu-title">
                  <span> 02 MENU</span>
                  <h1>Farmed Fish</h1>
                  <span>
                    Porro eveniet, autem ipsam corrupti consectetur cum.
                    <br />
                    Repudiandae dignissimos fugiat sit nam.
                  </span>
                </div>
                <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img4} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Fish burger
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>1.99</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                   </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img7} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Paella with seafood
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>3.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                    </div>
                  </div>
              </SwiperSlide>

              {/*  SLIDE 4 */}
              <SwiperSlide>
                <div className="menu-title">
                  <span> 03 MENU</span>
                  <h1> Crustaceans </h1>
                  <span>
                    Porro eveniet, autem ipsam corrupti consectetur cum.
                    <br />
                    Repudiandae dignissimos fugiat sit nam.
                  </span>
                </div>
                <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img
                          src={img2}
                          alt=""
                        />
                      </a>
                      <div className="t1">
                        <a href="#">Crabs</a>
                        <span>
                          Consectetur adipisicing elit. Soluta, impedit, saepe.
                        </span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>3.50</span>
                        </span>
                        <a href="#">
                          <i className="fas fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                   </div>
                   <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
                    <div className="content">
                      <a href="#">
                        <img src={img3} />
                      </a>
                      <div className="t1">
                        <a href="#">
                          Casserole
                        </a>
                        <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                      </div>
                      <div className="t2">
                        <span className="span-wrapper">
                          <span className="sign">€</span>
                          <span>4.99</span>
                        </span>
                        <a href="#">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </a>
                      </div>
                    </div>
                   </div>
                  </div>
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;

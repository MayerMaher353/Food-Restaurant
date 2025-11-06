import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ====== IMPORT IMAGES ======
import drink1 from "../../assets/images/menu images/drink-1.webp";
import drink2 from "../../assets/images/menu images/drink-2.webp";
import drink3 from "../../assets/images/menu images/drink-3.webp";
import drink4 from "../../assets/images/menu images/drink-4.webp";
import drink5 from "../../assets/images/menu images/drink-5.webp";

import desert1 from "../../assets/images/menu images/desert-1.jpg";
import desert2 from "../../assets/images/menu images/desert-2.jpg";
import desert3 from "../../assets/images/menu images/desert-3.jpg";

import soup1 from "../../assets/images/menu images/soup-1.jpg";
import soup2 from "../../assets/images/menu images/soup-2.jpg";
import soup3 from "../../assets/images/menu images/soup-3.jpg";
import soup4 from "../../assets/images/menu images/soup-4.jpg";
import soup5 from "../../assets/images/menu images/soup-5.jpg";
import soup6 from "../../assets/images/menu images/soup-6.jpg";

import salad1 from "../../assets/images/menu images/salad-1.jpg";
import salad2 from "../../assets/images/menu images/salad-2.jpg";
import salad3 from "../../assets/images/menu images/salad-3.jpg";
import salad4 from "../../assets/images/menu images/salad-4.jpg";


const MenuExtra = () => {
  const labels = ["All Drinks", "Desserts", "Soups", "Salads"];

  return (
    <div className="menu-extra">
      <div className="container">
        <div className="row">
          <div className="col">

            {/* PAGINATION */}
            <div className="swiper-pagination"></div>

            <Swiper
              modules={[Pagination, EffectFade]}
              slidesPerView={1}
              autoHeight={true}
              loop={false}
              speed={700}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className}">${labels[index]}</span>`
              }}
              className="swiper-extra"
            >

              {/*=====================
                 1 — ALL DRINKS
              ======================*/}
              <SwiperSlide>
                <div className="menu-title">
                  <span>MENU</span>
                  <h1>All Drinks</h1>
                </div>

                <div className="row">
                  {[
                    { img: drink1, name: "Cocktail", price: "4.26" },
                    { img: drink2, name: "Iced Diet Lemon Soda", price: "2.00" },
                    { img: drink3, name: "Margarita", price: "4.00" },
                    { img: drink4, name: "Smoothie", price: "3.00" },
                    { img: drink5, name: "Strawberry Lemonade soda", price: "3.00" },
                  ].map((item, i) => (
                    <div className="col-lg-6" key={i}>
                      <div className="content">
                        <a href="#"><img src={item.img} alt="" /></a>
                        <div className="t1">
                          <a href="#">{item.name}</a>
                          <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                        </div>
                        <div className="t2">
                          <span className="span-wrapper">
                            <span className="sign">€</span>
                            <span>{item.price}</span>
                          </span>
                          <a href="#"><i className="fas fa-cart-shopping"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>

              {/*=====================
                 2 — DESSERTS
              ======================*/}
              <SwiperSlide>
                <div className="menu-title">
                  <span>MENU</span>
                  <h1>Desserts</h1>
                </div>

                <div className="row">
                  {[
                    { img: desert1, name: "Summer Berry Tart", price: "12.00" },
                    { img: desert2, name: "Pumpkin Cookies Cream Cheese", price: "10.00" },
                    { img: desert3, name: "Double Chocolate Cupcakes", price: "7.00" },
                  ].map((item, i) => (
                    <div className="col-lg-6" key={i}>
                      <div className="content">
                        <a href="#"><img src={item.img} alt="" /></a>
                        <div className="t1">
                          <a href="#">{item.name}</a>
                          <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                        </div>
                        <div className="t2">
                          <span className="span-wrapper">
                            <span className="sign">€</span>
                            <span>{item.price}</span>
                          </span>
                          <a href="#"><i className="fas fa-cart-shopping"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>

              {/*=====================
                 3 — SOUPS
              ======================*/}
              <SwiperSlide>
                <div className="menu-title">
                  <span>MENU</span>
                  <h1>Soups</h1>
                </div>

                <div className="row">
                  {[
                    { img: soup1, name: "Terrific Turkey Chili", price: "8.00" },
                    { img: soup2, name: "Italian Sausage Tortellini", price: "9.00" },
                    { img: soup3, name: "Cream of Asparagus Soup", price: "10.00" },
                    { img: soup4, name: "Italian Sausage Soup", price: "9.00" },
                    { img: soup5, name: "Creamy Chicken & Wild Rice Soup", price: "12.00" },
                    { img: soup6, name: "Ham and Potato Soup", price: "10.00" },
                  ].map((item, i) => (
                    <div className="col-lg-6" key={i}>
                      <div className="content">
                        <a href="#"><img src={item.img} alt="" /></a>
                        <div className="t1">
                          <a href="#">{item.name}</a>
                          <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                        </div>
                        <div className="t2">
                          <span className="span-wrapper">
                            <span className="sign">€</span>
                            <span>{item.price}</span>
                          </span>
                          <a href="#"><i className="fas fa-cart-shopping"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>

              {/*=====================
                 4 — SALADS
              ======================*/}
              <SwiperSlide>
                <div className="menu-title">
                  <span>MENU</span>
                  <h1>Salads</h1>
                </div>

                <div className="row">
                  {[
                    { img: salad1, name: "Caprese Salad", price: "15.79" },
                    { img: salad2, name: "Avocado Tuna Salad", price: "10.99" },
                    { img: salad3, name: "Fruit Salad", price: "5.89" },
                    { img: salad4, name: "Salmon Salad", price: "9.00" },
                  ].map((item, i) => (
                    <div className="col-lg-6" key={i}>
                      <div className="content">
                        <a href="#"><img src={item.img} alt="" /></a>
                        <div className="t1">
                          <a href="#">{item.name}</a>
                          <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                        </div>
                        <div className="t2">
                          <span className="span-wrapper">
                            <span className="sign">€</span>
                            <span>{item.price}</span>
                          </span>
                          <a href="#"><i className="fas fa-cart-shopping"></i></a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuExtra;

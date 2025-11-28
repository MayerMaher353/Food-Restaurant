import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

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

import type { Product } from "../../types/product";

const MenuSlider = () => {
  const { addToCart } = useContext(CartContext);

  const labels = ["ALL DISHES", "SALTWATER FISH", "FARMED FISH", "CRUSTACEANS"];

  const products: Product[] = [
    { id: 1, name: "Boiled crayfish", price: 5.5, img: img1, tags: [], category: "ALL DISHES" },
    { id: 2, name: "Crabs", price: 3.5, img: img2, tags: [], category: "CRUSTACEANS" },
    { id: 3, name: "Casserole", price: 4.99, img: img3, tags: [], category: "FARMED FISH" },
    { id: 4, name: "Fish burger", price: 1.99, img: img4, tags: [], category: "FARMED FISH" },
    { id: 5, name: "Fish soup", price: 20.99, img: img5, tags: [], category: "SALTWATER FISH" },
    { id: 6, name: "Salmon", price: 1.5, img: img6, tags: [], category: "SALTWATER FISH" },
    { id: 7, name: "Paella with seafood", price: 3.5, img: img7, tags: [], category: "CRUSTACEANS" },
    { id: 8, name: "Salmon with tomatoes", price: 20.99, img: img8, tags: [], category: "SALTWATER FISH" },
  ];

  // Helper to render a product card
  const renderProduct = (product: Product) => (
    <div key={product.id} className="col-lg-6 col-md-6 col-sm-12 mb-5">
      <div className="content">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <img src={product.img} alt={product.name} />
        </a>
        <div className="t1">
          <a href="#" onClick={(e) => e.preventDefault()}>{product.name}</a>
          <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
        </div>
        <div className="t2">
          <span className="span-wrapper">
            <span className="sign">€</span>
            <span>{product.price}</span>
          </span>
          <a href="#" onClick={(e) => { e.preventDefault(); addToCart(product); }}>
            <i className="fas fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </div>
  );

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
              autoHeight
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

              {/* SLIDE 1: All Dishes */}
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
                  {products.map(renderProduct)}
                </div>
              </SwiperSlide>

              {/* SLIDE 2: Saltwater Fish */}
              <SwiperSlide>
                <div className="menu-title mb-5">
                  <span>01 MENU</span>
                  <h1>Saltwater Fish</h1>
                  <span>
                    Porro eveniet, autem ipsam corrupti consectetur cum.
                    <br />
                    Repudiandae dignissimos fugiat sit nam.
                  </span>
                </div>
                <div className="row">
                  {products.filter(p => p.category === "SALTWATER FISH").map(renderProduct)}
                </div>
              </SwiperSlide>

              {/* SLIDE 3: Farmed Fish */}
              <SwiperSlide>
                <div className="menu-title mb-5">
                  <span>02 MENU</span>
                  <h1>Farmed Fish</h1>
                  <span>
                    Porro eveniet, autem ipsam corrupti consectetur cum.
                    <br />
                    Repudiandae dignissimos fugiat sit nam.
                  </span>
                </div>
                <div className="row">
                  {products.filter(p => p.category === "FARMED FISH").map(renderProduct)}
                </div>
              </SwiperSlide>

              {/* SLIDE 4: Crustaceans */}
              <SwiperSlide>
                <div className="menu-title mb-5">
                  <span>03 MENU</span>
                  <h1>Crustaceans</h1>
                  <span>
                    Porro eveniet, autem ipsam corrupti consectetur cum.
                    <br />
                    Repudiandae dignissimos fugiat sit nam.
                  </span>
                </div>
                <div className="row">
                  {products.filter(p => p.category === "CRUSTACEANS").map(renderProduct)}
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

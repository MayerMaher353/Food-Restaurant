// Menu3.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import "swiper/css";
import "swiper/css/navigation";

// ====== IMPORT IMAGES ======
import img1 from "../../assets/images/menu images/cooked-fish-with-potatoes-700x456.jpg.webp";
import img2 from "../../assets/images/menu images/gallery-i-4-700x456.jpg.webp";
import img3 from "../../assets/images/menu images/gallery-i-6-700x456.jpg.webp";
import img4 from "../../assets/images/menu images/gallery-i-2-700x456.jpg.webp";
import img5 from "../../assets/images/menu images/blog-2-700x456.jpg.webp";
import img6 from "../../assets/images/menu images/top-view-salmon-700x456.jpg.webp";

type Product = {
  id: number;
  name: string;
  img: string;
  oldPrice: number;
  price: number;
  tags: string[];
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Salmon with tomatoes", img: img1, oldPrice: 25.99, price: 20.99, tags: ["fish"], category: "special" },
  { id: 2, name: "Crabs", img: img2, oldPrice: 4.5, price: 3.5, tags: ["crustaceans"], category: "special" },
  { id: 3, name: "Casserole", img: img3, oldPrice: 5.99, price: 4.99, tags: ["fish"], category: "special" },
  { id: 4, name: "Fish burger", img: img4, oldPrice: 2.99, price: 1.99, tags: ["fish"], category: "special" },
  { id: 5, name: "Fish soup", img: img5, oldPrice: 25.99, price: 20.99, tags: ["soup"], category: "special" },
  { id: 6, name: "Salmon", img: img6, oldPrice: 1.99, price: 1.5, tags: ["fish"], category: "special" },
];

const Menu3: React.FC = () => {
  const { addToCart } = useContext(CartContext);

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

            <Swiper
              modules={[Navigation, Keyboard]}
              slidesPerView={3}
              spaceBetween={30}
              loop={false}
              speed={1200}
              threshold={15}
              keyboard={{ enabled: true, onlyInViewport: false }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{ 0: { slidesPerView: 1 }, 992: { slidesPerView: 3 } }}
              preventClicks={false}
              preventClicksPropagation={false}
              className="swiper-2"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src={product.img} alt={product.name} />
                  </a>
                  <div className="content">
                    <a href="#" onClick={(e) => e.preventDefault()}>{product.name}</a>
                    <span>Consectetur adipisicing elit. Soluta, impedit, saepe.</span>
                    <div>
                      <div className="price">
                        <span>
                          <span className="sign">€ </span>
                          <del>{product.oldPrice.toFixed(2)}</del>
                        </span>
                        <br />
                        <span>
                          <span className="sign">€ </span>
                          {product.price.toFixed(2)}
                        </span>
                      </div>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product);
                        }}
                      >
                        <i className="fas fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Keep your original slider navigation style */}
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

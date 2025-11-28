import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

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

import type { Product } from "../../types/product";


const MenuExtra = () => {
  const { addToCart } = useContext(CartContext);

  const labels = ["All Drinks", "Desserts", "Soups", "Salads"];

  const allProducts: Product[] = [
    // Drinks
    { id: 1, name: "Cocktail", price: 4.26, img: drink1, category: "All Drinks", tags: [] },
    { id: 2, name: "Iced Diet Lemon Soda", price: 2.00, img: drink2, category: "All Drinks", tags: [] },
    { id: 3, name: "Margarita", price: 4.00, img: drink3, category: "All Drinks", tags: [] },
    { id: 4, name: "Smoothie", price: 3.00, img: drink4, category: "All Drinks", tags: [] },
    { id: 5, name: "Strawberry Lemonade soda", price: 3.00, img: drink5, category: "All Drinks", tags: [] },
    // Desserts
    { id: 6, name: "Summer Berry Tart", price: 12.00, img: desert1, category: "Desserts", tags: [] },
    { id: 7, name: "Pumpkin Cookies Cream Cheese", price: 10.00, img: desert2, category: "Desserts", tags: [] },
    { id: 8, name: "Double Chocolate Cupcakes", price: 7.00, img: desert3, category: "Desserts", tags: [] },
    // Soups
    { id: 9, name: "Terrific Turkey Chili", price: 8.00, img: soup1, category: "Soups", tags: [] },
    { id: 10, name: "Italian Sausage Tortellini", price: 9.00, img: soup2, category: "Soups", tags: [] },
    { id: 11, name: "Cream of Asparagus Soup", price: 10.00, img: soup3, category: "Soups", tags: [] },
    { id: 12, name: "Italian Sausage Soup", price: 9.00, img: soup4, category: "Soups", tags: [] },
    { id: 13, name: "Creamy Chicken & Wild Rice Soup", price: 12.00, img: soup5, category: "Soups", tags: [] },
    { id: 14, name: "Ham and Potato Soup", price: 10.00, img: soup6, category: "Soups", tags: [] },
    // Salads
    { id: 15, name: "Caprese Salad", price: 15.79, img: salad1, category: "Salads", tags: [] },
    { id: 16, name: "Avocado Tuna Salad", price: 10.99, img: salad2, category: "Salads", tags: [] },
    { id: 17, name: "Fruit Salad", price: 5.89, img: salad3, category: "Salads", tags: [] },
    { id: 18, name: "Salmon Salad", price: 9.0, img: salad4, category: "Salads", tags: [] },
  ];

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
            <span>{product.price?.toFixed(2)}</span>
          </span>
          <a href="#" onClick={(e) => { e.preventDefault(); addToCart(product); }}>
            <i className="fas fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="menu-extra">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="swiper-pagination"></div>

            <Swiper
              modules={[Pagination, EffectFade]}
              slidesPerView={1}
              autoHeight
              loop={false}
              speed={700}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: (index, className) => `<span class="${className}">${labels[index]}</span>`
              }}
              className="swiper-extra"
            >
              {labels.map((label) => (
                <SwiperSlide key={label}>
                  <div className="menu-title">
                    <span>MENU</span>
                    <h1>{label}</h1>
                  </div>
                  <div className="row">
                    {allProducts.filter(p => p.category === label).map(renderProduct)}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuExtra;

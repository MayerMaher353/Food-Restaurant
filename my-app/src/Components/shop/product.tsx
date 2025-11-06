/** @jsxImportSource react */

import "./css/shop.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";


/* ---------- Image Imports ---------- */
import shop1 from "../../assets/images/shop img/shop1.jpg";
import shop2 from "../../assets/images/shop img/shop2.jpg.webp";
import shop3 from "../../assets/images/shop img/shop3.webp";
import shop4 from "../../assets/images/shop img/shop4.webp";
import shop5 from "../../assets/images/shop img/shop5.jpg.webp";
import shop6 from "../../assets/images/shop img/shop6.jpg.webp";
import shop7 from "../../assets/images/shop img/shop7.jpg";
import shop8 from "../../assets/images/shop img/shop8.jpg.webp";

import soup1 from "../../assets/images/shop img/soup-1.jpg";
import soup2 from "../../assets/images/shop img/soup-2.jpg";
import soup3 from "../../assets/images/shop img/soup-3.jpg";
import soup4 from "../../assets/images/shop img/soup-4.jpg";
import soup5 from "../../assets/images/shop img/soup-5.jpg";
import soup6 from "../../assets/images/shop img/soup-6.jpg";

import salad1 from "../../assets/images/shop img/salad-1.jpg";
import salad2 from "../../assets/images/shop img/salad-2.jpg";
import salad3 from "../../assets/images/shop img/salad-3.jpg";
import salad4 from "../../assets/images/shop img/salad-4.jpg";

import drink1 from "../../assets/images/shop img/drink-1.webp";
import drink2 from "../../assets/images/shop img/drink-2.webp";
import drink3 from "../../assets/images/shop img/drink-3.webp";
import drink4 from "../../assets/images/shop img/drink-4.webp";
import drink5 from "../../assets/images/shop img/drink-5.webp";

import dessert1 from "../../assets/images/shop img/desert-1.jpg";
import dessert2 from "../../assets/images/shop img/desert-2.jpg";
import dessert3 from "../../assets/images/shop img/desert-3.jpg";




/* ---------- Types ---------- */
interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
  category: string;
  img: string;
}

/* ---------- Constants & Utilities ---------- */
const PER_SLIDE = 6;

const normalize = (s?: string) => (s || "").toString().trim().toLowerCase();

const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

/* ---------- Hardcoded Products (based on your HTML) ---------- */
const PRODUCTS: Product[] = [
  { id: 1, name: "BOILED CRAYFISH", price: 5.5, tags: ["Crabs","Crustaceans","Food","Saltwater"], category: "Saltwater Fish", img: shop1 },
  { id: 2, name: "CRABS", price: 3.5, tags: ["Crabs","Food","Crustaceans"], category: "Crustaceans", img: shop2 },
  { id: 3, name: "FISH BURGER", price: 1.99, tags: ["Burger","Fish","Food"], category: "Farmed Fish", img: shop3 },
  { id: 4, name: "FISH SOUP", price: 20.99, tags: ["Soup","Fish","Food","Saltwater"], category: "Saltwater Fish", img: shop4 },
  { id: 5, name: "PAELLA WITH SEAFOOD", price: 3.5, tags: ["Crustaceans","Seafood","Food","fish"], category: "Farmed Fish", img: shop6 },
  { id: 6, name: "SALMON", price: 1.5, tags: ["Fish","Food","Saltwater"], category: "Saltwater Fish", img: shop7 },
  { id: 7, name: "SALMON WITH TOMATOES", price: 20.99, tags: ["Fish","Food","Saltwater"], category: "Saltwater Fish", img: shop5 },
  { id: 8, name: "CASSEROLE", price: 4.99, tags: ["Food","Saltwater","Crustaceans"], category: "Crustaceans", img: shop8 },

  { id: 9, name: "Terrific Turkey Chili", price: 8.0, tags: ["soup","Food"], category: "Soup", img: soup1 },
  { id: 10, name: "Italian Sausage Tortellini", price: 9.0, tags: ["Soup","Food"], category: "Soup", img: soup2 },
  { id: 11, name: "Cream of Asparagus Soup", price: 10.0, tags: ["Food","Soup"], category: "Soup", img: soup3 },
  { id: 12, name: "Italian Sausage Soup", price: 9.0, tags: ["Food","Soup"], category: "Soup", img: soup4 },
  { id: 13, name: "Creamy Chicken & Wild Rice Soup", price: 12.0, tags: ["Fish","Food","Soup"], category: "Soup", img: soup5 },
  { id: 14, name: "Ham and Potato Soup", price: 12.0, tags: ["Food","soup"], category: "Soup", img: soup6 },

  { id: 15, name: "Caprese Salad", price: 15.79, tags: ["salad","Food"], category: "Salad", img: salad1 },
  { id: 16, name: "Avocado Tuna Salad", price: 10.99, tags: ["Food","Salad"], category: "Salad", img: salad2 },
  { id: 17, name: "Fruit Salad", price: 5.89, tags: ["Food","salad"], category: "Salad", img: salad3 },
  { id: 18, name: "Salmon Salad", price: 9.0, tags: ["salad","Food"], category: "Salad", img: salad4 },

  { id: 19, name: "Cocktail", price: 4.26, tags: ["drink"], category: "Drink", img: drink1 },
  { id: 20, name: "Iced Diet Lemon Soda", price: 2.0, tags: ["drink"], category: "Drink", img: drink2 },
  { id: 21, name: "Margarita", price: 4.0, tags: ["drink"], category: "Drink", img: drink3 },
  { id: 22, name: "Smoothie", price: 3.0, tags: ["drink"], category: "Drink", img: drink4 },
  { id: 23, name: "Strawberry Lemonade Soda", price: 3.0, tags: ["drink"], category: "Drink", img: drink5 },

  { id: 24, name: "Summer Berry and Coconut Tart", price: 12.0, tags: ["dessert"], category: "Dessert", img: dessert1 },
  { id: 25, name: "Pumpkin Cookies Cream Cheese", price: 10.0, tags: ["dessert"], category: "Dessert", img: dessert2 },
  { id: 26, name: "Double Chocolate Cupcakes", price: 7.0, tags: ["dessert"], category: "Dessert", img: dessert3 },
];


/* ---------- Component ---------- */
export default function Products() {
 const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || p.category === category;
      const matchesTag = !tag || p.tags.includes(tag);
      const matchesMin = minPrice ? p.price >= parseFloat(minPrice) : true;
      const matchesMax = maxPrice ? p.price <= parseFloat(maxPrice) : true;
      return matchesSearch && matchesCategory && matchesTag && matchesMin && matchesMax;
    }).sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });
  }, [search, category, tag, minPrice, maxPrice, sort]);

  return (
    <div className="shop-container">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category */}
      <div className="categories">
        {["All", "Saltwater Fish", "Crustaceans", "Farmed Fish", "Soup", "Salad", "Drink", "Dessert"]
          .map(cat => (
            <button key={cat} onClick={() => setCategory(cat)} className={category === cat ? "active" : ""}>
              {cat}
            </button>
          ))}
      </div>

      {/* Price filter */}
      <div className="price-filter">
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Sort */}
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Default sorting</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>

      {/* Tag Filter */}
      <div className="tags">
        {["sale", "new", "hot"].map(t => (
          <button key={t} onClick={() => setTag(t)} className={tag === t ? "active" : ""}>
            {t}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="product-grid">
        {filteredProducts.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>€{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
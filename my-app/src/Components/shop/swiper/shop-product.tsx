import "../css/shop.css";
/** @jsxImportSource react */
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PRODUCTS } from "../../../constants/product-array";
import type { Product } from "../../../types/product";
import { CartContext } from "../../../context/cartContext";

const productsPerSlide = 6;

// Utility to chunk array
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const Shop: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

 const { addToCart } = useContext(CartContext);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);

  // ---------------- FILTER LOGIC ----------------
  const applyFilters = () => {
    if (!rootRef.current) return;

    const minPrice = parseFloat(
      (rootRef.current.querySelector("#min-price") as HTMLInputElement)
        ?.value || "0"
    );
    const maxPrice = parseFloat(
      (rootRef.current.querySelector("#max-price") as HTMLInputElement)
        ?.value || "100"
    );

    const activeCategory =
      Array.from(
        rootRef.current.querySelectorAll<HTMLAnchorElement>(".categories a") ||
          []
      )
        .find((a) => a.classList.contains("active"))
        ?.dataset.category?.toLowerCase() || "all";

    const activeTags = Array.from(
      rootRef.current.querySelectorAll<HTMLButtonElement>(".tag-btn.active") ||
        []
    ).map((btn) => btn.dataset.tag?.toLowerCase() || "");

    const searchTerm =
      (
        rootRef.current.querySelector("#searchInput") as HTMLInputElement
      )?.value.toLowerCase() || "";

    const newFiltered = PRODUCTS.filter((p) => {
      const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
      const matchesCategory =
        activeCategory === "all" || p.category.toLowerCase() === activeCategory;
      const matchesTag =
        !activeTags.length ||
        p.tags.some((tag) => activeTags.includes(tag.toLowerCase()));
      const matchesSearch = p.name.toLowerCase().includes(searchTerm);
      return matchesPrice && matchesCategory && matchesTag && matchesSearch;
    });

    setFilteredProducts(newFiltered);
  };

  // ---------------- SWIPER ----------------
  useEffect(() => {
    if (!rootRef.current) return;

    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
    }

    const prevArrow = rootRef.current.querySelector(
      ".swiper-prev"
    ) as HTMLElement;
    const nextArrow = rootRef.current.querySelector(
      ".swiper-next"
    ) as HTMLElement;
    const indicator = rootRef.current.querySelector(
      "#page-indicator"
    ) as HTMLElement;

    const swiper = new SwiperClass(
      rootRef.current.querySelector(".myProductSwiper") as HTMLElement,
      {
        modules: [Navigation],
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: false, // loop disabled
        navigation: { nextEl: ".swiper-next", prevEl: ".swiper-prev" },
        on: {
          init(swiperInstance: SwiperClass) {
            updateNavigation(swiperInstance);
          },
          slideChange(swiperInstance: SwiperClass) {
            updateNavigation(swiperInstance);
          },
        },
      }
    );

    swiperRef.current = swiper;

    function updateNavigation(swiperInstance: SwiperClass) {
      if (!indicator || !prevArrow || !nextArrow) return;

      const current = swiperInstance.realIndex + 1;
      const total = swiperInstance.slides.length;

      indicator.textContent = `${current} / ${total}`;

      // hide prev/next at edges
      prevArrow.classList.toggle("hidden", current === 1);
      nextArrow.classList.toggle("hidden", current === total);
    }

    // initial state
    updateNavigation(swiper);

    return () => swiper.destroy(true, true);
  }, [filteredProducts]);

  // ---------------- RESIZE ----------------
  useEffect(() => {
    const handleResize = () => swiperRef.current?.update();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // ---------------- EVENT LISTENERS ----------------
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const filterBtn = root.querySelector<HTMLButtonElement>("#filter-btn");
    const priceInputs = Array.from(
      root.querySelectorAll<HTMLInputElement>("#min-price, #max-price")
    );
    const tagBtns = Array.from(
      root.querySelectorAll<HTMLButtonElement>(".tag-btn")
    );
    const categoryLinks = Array.from(
      root.querySelectorAll<HTMLAnchorElement>(".categories a")
    );
    const searchInput = root.querySelector<HTMLInputElement>("#searchInput");

    const onFilterClick = (e?: Event) => {
      e?.preventDefault();
      applyFilters();
    };

    filterBtn?.addEventListener("click", onFilterClick);
    priceInputs.forEach((input) =>
      input.addEventListener("change", applyFilters)
    );
    searchInput?.addEventListener("keyup", applyFilters);

    tagBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        applyFilters();
      });
    });

    categoryLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        categoryLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        if (link.dataset.category?.toLowerCase() === "all") {
          if (searchInput) searchInput.value = "";
          tagBtns.forEach((btn) => btn.classList.remove("active"));
          const minEl = root.querySelector<HTMLInputElement>("#min-price");
          const maxEl = root.querySelector<HTMLInputElement>("#max-price");
          if (minEl) minEl.value = "0";
          if (maxEl) maxEl.value = "100";
        }

        applyFilters();
      });
    });

    return () => {
      filterBtn?.removeEventListener("click", onFilterClick);
      priceInputs.forEach((input) =>
        input.removeEventListener("change", applyFilters)
      );
      searchInput?.removeEventListener("keyup", applyFilters);
    };
  }, []);

  // ---------------- HELPER ----------------
  const p = (i: number): Product =>
    PRODUCTS[i] ?? {
      id: 0,
      name: "Unknown",
      price: 0,
      originalPrice: 0,
      tags: [],
      category: "",
      img: "",
    };

  // ---------------- RENDER SLIDES ----------------
  const slides = chunkArray(filteredProducts, productsPerSlide).map(
    (group, i) => (
      <div className="swiper-slide" key={i}>
        <div className="product-grid">
          {group.map((product) => (
            <div
              className="product"
              key={product.id}
              data-price={product.price}
              data-tags={product.tags.join(",")}
              data-category={product.category}
            >
              <div className="swiper-product-holder">
                <img src={product.img} alt={product.name} />
                <span>SALE!</span>
              </div>
              <div className="product-content-holder">
                <a
                  href=""
                  className="product-item-name"
                  onClick={(e) => e.preventDefault()}
                >
                  <h4>
                    <strong>{product.name}</strong>
                  </h4>
                </a>
                <div className="separator" />
                <div className="product-price-holder">
                  <div className="price-section">
                    <p id="price-offer">
                      <span>€</span>
                      <del>{product.originalPrice?.toFixed(2)}</del>
                    </p>
                    <p>
                      <strong>€{product.price?.toFixed(2)}</strong>
                    </p>
                  </div>
                  <div className="product-icon-holder">
                    <button type="button" onClick={() => addToCart(product)}>
                      <i className="fas fa-cart-shopping" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );

  // ---------------- JSX ----------------
  return (
    <section id="product-box" ref={rootRef}>
      <div className="container">
        <div className="shop-content-wrapper">
          {/* Sidebar */}
          <div className="shop-categories">
            <form className="search-form" action="#">
              <input
                type="text"
                placeholder="Search products..."
                name="search"
                id="searchInput"
              />
              <span>
                <i className="fas fa-magnifying-glass" />
              </span>
            </form>

            <div className="categories">
              <h3>CATEGORIES</h3>
              <ul>
                {[
                  "All",
                  "Crustaceans",
                  "Farmed Fish",
                  "Saltwater Fish",
                  "Soup",
                  "Drink",
                  "Salad",
                  "Dessert",
                ].map((cat) => (
                  <li key={cat}>
                    <a
                      href="#"
                      data-category={cat}
                      className={cat === "All" ? "active" : ""}
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-offers-sidebar">
              <h3>PRODUCTS</h3>
              {[6, 4, 5].map((i) => (
                <div className="sidebar-product-item" key={i}>
                  <div className="product-sidebar-image-holder">
                    <img src={p(i).img} alt={p(i).name} />
                  </div>
                  <div className="sidebar-product-item-content">
                    <a href="">
                      <strong>{p(i).name}</strong>
                    </a>
                    <p id="price-offer">
                      <span>€</span>
                      <del>{p(i).originalPrice?.toFixed(2)}</del>
                    </p>
                    <p id="Salmon-price">
                      <span>€</span>
                      <strong>{p(i).price?.toFixed(2)}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="product-filter-section">
              <h3>FILTER BY PRICE</h3>
              <label>
                Min Price:{" "}
                <input type="number" id="min-price" defaultValue={0} />
              </label>
              <label>
                Max Price:{" "}
                <input type="number" id="max-price" defaultValue={100} />
              </label>
              <button id="filter-btn">Filter</button>
            </div>

            <div className="product-tag-section">
              <h3>TAGS</h3>
              {[
                "Burger",
                "Crabs",
                "Crustaceans",
                "Fish",
                "Food",
                "Saltwater",
                "Soup",
              ].map((tag) => (
                <button className="tag-btn" key={tag} data-tag={tag}>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Products area */}
          <div className="shop-products">
            <div className="products-header">
              <h3>SHOP</h3>
              <div className="shop-item-sort">
                <p>
                  Showing 1–
                  {Math.min(productsPerSlide, filteredProducts.length)} of{" "}
                  {filteredProducts.length} results
                </p>
              </div>
            </div>

            <div className="swiper myProductSwiper">
              <div className="swiper-wrapper">{slides}</div>
            </div>

            {/* Custom Navigation */}
            <div className="swiper-controls">
              <div className="nav-controls">
                <div className="swiper-prev">
                  <i className="fas fa-arrow-left" />
                </div>
                <span id="page-indicator" className="active">
                  1
                </span>
                <div className="swiper-next">
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;

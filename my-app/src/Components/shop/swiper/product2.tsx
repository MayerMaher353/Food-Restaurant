import "../css/shop.css"
/** @jsxImportSource react */

import type { Product  } from "../../../types/product";
import { PRODUCTS } from "../../../constants/product-array"
import React, { useEffect, useRef ,useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const Shop: React.FC = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();
    
    const rootRef = useRef<HTMLDivElement | null>(null);
    

    // helper to safely pick product by index (same as earlier)
    const p = (i: number): Product =>
        PRODUCTS[i] ?? ({
            id: 0,
            name: "Unknown",
            price: 0,
            originalPrice: 0,
            tags: [],
            category: "",
            img: "",
        } as Product);

    useEffect(() => {
        // ... (Your existing useEffect logic for filters, Swiper init, and cleanup is here) ...

        if (!rootRef.current) return;

        // Local references (scoped inside useEffect)
        const root = rootRef.current;

        // elements (must be declared first)
        const prevArrow = root.querySelector(".swiper-prev") as HTMLElement | null;
        const nextArrow = root.querySelector(".swiper-next") as HTMLElement | null;
        const pageIndicator = root.querySelector("#page-indicator") as HTMLElement | null;

        // declare swiper variable holder
        let swiper: SwiperClass | null = null;
        swiperRef.current = null;

        // ----------------- helper functions -----------------
        function updatePage(currentIndex: number, totalSlides: number) {
            if (!pageIndicator || !prevArrow || !nextArrow) return;
            const currentPage = currentIndex + 1;
            const totalPages = totalSlides;

            pageIndicator.textContent = `${currentPage} / ${totalPages}`;
            pageIndicator.dataset.grid = String(currentPage);

            prevArrow.classList.toggle("hidden", currentPage === 1);
            nextArrow.classList.toggle("hidden", currentPage === totalPages);
        }

        function normalize(s?: string) {
            return (s || "").toString().trim().toLowerCase();
        }

        function chunkArray<T>(arr: T[], size: number) {
            const out: T[][] = [];
            for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
            return out;
        }

        /* ----------------- products source ----------------- */
        const PRODUCTS_SOURCE_ID = "products-source";
        function ensureProductsSource() {
            let src = document.getElementById(PRODUCTS_SOURCE_ID) as HTMLDivElement | null;
            if (src) return src;

            src = document.createElement("div");
            src.id = PRODUCTS_SOURCE_ID;
            src.style.display = "none";
            document.body.appendChild(src);

            // collect original products (skip swiper duplicate clones)
            const rawProducts = Array.from(root.querySelectorAll(".product")).filter((p) => {
                const slide = p.closest(".swiper-slide");
                return !(slide && slide.classList.contains("swiper-slide-duplicate"));
            });

            rawProducts.forEach((prod) => {
                const clone = prod.cloneNode(true) as HTMLElement;
                src!.appendChild(clone);
            });

            // console.log("Products source initialized with", rawProducts.length, "products");
            return src;
        }

        /* ----------------- rebuild slides from filtered ----------------- */
        function rebuildSlidesFromFiltered(perSlide = 6) {
            const source = ensureProductsSource();
            const visibleProducts = Array.from(
                source.querySelectorAll(".product[data-filtered='1']")
            ) as HTMLElement[];

            const wrapper = root.querySelector(".swiper-wrapper") as HTMLElement | null;
            if (!wrapper) return console.warn("swiper-wrapper not found.");

            // temporarily disable Swiper loop to avoid missing slides
            if (swiper) swiper.params.loop = false;

            // clear existing slides through Swiper API if available
            if (swiper && typeof swiper.removeAllSlides === "function") {
                try {
                    swiper.removeAllSlides();
                } catch (e) {
                    // fallback: clear wrapper
                    wrapper.innerHTML = "";
                }
            } else {
                wrapper.innerHTML = "";
            }

            if (visibleProducts.length === 0) {
                const slide = document.createElement("div");
                slide.className = "swiper-slide";
                const grid = document.createElement("div");
                grid.className = "product-grid";
                grid.innerHTML = `<div class="no-results">No results</div>`;
                slide.appendChild(grid);
                wrapper.appendChild(slide);

                if (swiper) {
                    try {
                        swiper.update();
                        swiper.slideTo(0);
                    } catch (e) {
                        // ignore
                    }
                }

                // update indicator
                updatePage(0, 0);
                // console.log("rebuildSlides: 0 visible products");
                return;
            }

            const groups = chunkArray(visibleProducts, perSlide);

            groups.forEach((group) => {
                const slide = document.createElement("div");
                slide.className = "swiper-slide";
                const grid = document.createElement("div");
                grid.className = "product-grid";

                group.forEach((pNode) => {
                    const item = pNode.cloneNode(true) as HTMLElement;
                    item.style.display = "";
                    item.removeAttribute("aria-hidden");

                    // Tell TypeScript that h4 is an HTMLHeadingElement
                    const h4 = item.querySelector(".product-item-name h4") as HTMLHeadingElement | null;
                    if (h4) {
                        h4.innerText = h4.innerText.trim();
                    }

                    grid.appendChild(item);
                });

                slide.appendChild(grid);
                wrapper.appendChild(slide);
            });

            // update Swiper & reset index
            if (swiper) {
                try {
                    swiper.update();
                    swiper.slideTo(0);
                    swiper.params.loop = true;

                    // update indicator with new slide count
                    updatePage(swiper.realIndex, swiper.slides.length);
                } catch (e) {
                    // ignore
                }
            }

            // console.log("rebuildSlides: visible products =", visibleProducts.length, "slides =", groups.length);
        }

        /* ----------------- apply filters ----------------- */
        function applyFilters() {
            const source = ensureProductsSource();

            const minPriceInput = root.querySelector<HTMLInputElement>("#min-price");
            const maxPriceInput = root.querySelector<HTMLInputElement>("#max-price");
            const minPrice = parseFloat(minPriceInput?.value || "0") || 0;
            const maxPrice = parseFloat(maxPriceInput?.value || "") || Infinity;

            const selectedTags = Array.from(root.querySelectorAll(".tag-btn.active")).map((b) =>
                normalize((b as HTMLElement).dataset.tag)
            );

            const activeCategoryRaw = (root.querySelector(".categories a.active") as HTMLElement | null)
                ?.dataset.category;
            const activeCategory = normalize(activeCategoryRaw || "all");

            const searchValue = (root.querySelector<HTMLInputElement>("#searchInput")?.value || "").toLowerCase();

            const products = Array.from(source.querySelectorAll(".product")) as HTMLElement[];

            // Reset to ALL if no filters active
            const noActiveFilters =
                searchValue.trim() === "" &&
                selectedTags.length === 0 &&
                activeCategory === "all" &&
                minPrice === 0 &&
                maxPrice === Infinity;

            if (noActiveFilters) {
                products.forEach((prod) => {
                    prod.dataset.filtered = "1";
                    prod.style.display = "";
                    prod.setAttribute("aria-hidden", "false");
                });
                rebuildSlidesFromFiltered(6);
                // console.log("applyFilters: reset to ALL (no filters active)");
                return;
            }

            products.forEach((product) => {
                const price = parseFloat(product.dataset.price || "0") || 0;
                const tags = product.dataset.tags
                    ? product.dataset.tags.split(",").map((t) => normalize(t))
                    : [];
                const category = normalize(product.dataset.category || "");

                // Type-safe access to .innerText
                const nameElement = product.querySelector(".product-item-name h4") as HTMLElement | null;
                const productName = (nameElement?.innerText || "").trim().toLowerCase();

                const visible =
                    price >= minPrice &&
                    price <= maxPrice &&
                    (selectedTags.length === 0 || selectedTags.some((tag) => tags.includes(tag))) &&
                    (activeCategory === "all" || category === activeCategory) &&
                    productName.includes(searchValue);

                product.dataset.filtered = visible ? "1" : "0";
                product.style.display = visible ? "" : "none";
                product.setAttribute("aria-hidden", visible ? "false" : "true");
            });


            // debug info omitted in production
            rebuildSlidesFromFiltered(6);
        }

        /* ----------------- initialize Swiper ----------------- */
        try {
            swiper = new SwiperClass(root.querySelector(".myProductSwiper") as HTMLElement, {
                modules: [Navigation],
                slidesPerView: 1, // Changed from "auto" to 1 for product-grid structure
                slidesPerGroup: 1,
                spaceBetween: 20,
                loop: false, // Start with false, changed to true in rebuildSlidesFromFiltered if slides > 1
                navigation: {
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                },
                on: {
                    init(this: SwiperClass) {
                        updatePage(this.realIndex, this.slides.length);
                    },
                    slideChange(this: SwiperClass) {
                        updatePage(this.realIndex, this.slides.length);
                    },
                },
            });

            swiperRef.current = swiper;
        } catch (err) {
            console.warn("Swiper init error:", err);
        }

        // ----------------- init products source & filters -----------------
        ensureProductsSource();
        applyFilters();

        // ----------------- event bindings (mirrors your original code) -----------------
        const filterBtn = root.querySelector("#filter-btn") as HTMLButtonElement | null;
        const tagBtns = Array.from(root.querySelectorAll(".tag-btn")) as HTMLElement[];
        const categoryLinks = Array.from(root.querySelectorAll(".categories a")) as HTMLElement[];
        const searchInput = root.querySelector<HTMLInputElement>("#searchInput");
        const priceInputs = Array.from(root.querySelectorAll<HTMLInputElement>("#min-price, #max-price"));


        function onFilterClick(e?: Event) {
            e?.preventDefault();
            applyFilters();
        }

        filterBtn?.addEventListener("click", onFilterClick);
        priceInputs.forEach((input) => input.addEventListener("change", applyFilters)); // Filter on change for inputs

        tagBtns.forEach((btn) => {
            const handler = () => {
                btn.classList.toggle("active");
                applyFilters();
            };
            btn.addEventListener("click", handler);
            // store handler for cleanup by attaching to dataset
            (btn as any).__handler = handler;
        });

        categoryLinks.forEach((link) => {
            const handler = (e: Event) => {
                e.preventDefault();
                categoryLinks.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");

                // Reset when "All" clicked
                if (normalize(link.dataset.category) === "all") {
                    const sIn = root.querySelector<HTMLInputElement>("#searchInput");
                    if (sIn) sIn.value = "";

                    root.querySelectorAll(".tag-btn.active").forEach((btn) => btn.classList.remove("active"));

                    const minEl = root.querySelector<HTMLInputElement>("#min-price");
                    const maxEl = root.querySelector<HTMLInputElement>("#max-price");
                    if (minEl) minEl.value = "0";
                    if (maxEl) maxEl.value = "100";
                }
                applyFilters();
            };
            link.addEventListener("click", handler);
            (link as any).__handler = handler;
        });

        if (searchInput) {
            const onKeyUp = () => applyFilters();
            searchInput.addEventListener("keyup", onKeyUp);
            (searchInput as any).__handler = onKeyUp;
        }

        if (prevArrow) {
            const onPrevClick = (e: Event) => {
                e.preventDefault();
                swiperRef.current?.slidePrev();
            };
            prevArrow.addEventListener("click", onPrevClick);
            (prevArrow as any).__handler = onPrevClick;
        }

        if (nextArrow) {
            const onNextClick = (e: Event) => {
                e.preventDefault();
                swiperRef.current?.slideNext();
            };
            nextArrow.addEventListener("click", onNextClick);
            (nextArrow as any).__handler = onNextClick;
        }

        // ----------------- cleanup on unmount -----------------
        return () => {
            // remove event listeners
            filterBtn?.removeEventListener("click", onFilterClick);
            priceInputs.forEach((input) => input.removeEventListener("change", applyFilters));

            tagBtns.forEach((btn) => {
                const handler = (btn as any).__handler;
                if (handler) btn.removeEventListener("click", handler);
                delete (btn as any).__handler;
            });

            categoryLinks.forEach((link) => {
                const handler = (link as any).__handler;
                if (handler) link.removeEventListener("click", handler);
                delete (link as any).__handler;
            });

            if (searchInput) {
                const handler = (searchInput as any).__handler;
                if (handler) searchInput.removeEventListener("keyup", handler);
                delete (searchInput as any).__handler;
            }

            if (prevArrow) {
                const handler = (prevArrow as any).__handler;
                if (handler) prevArrow.removeEventListener("click", handler);
                delete (prevArrow as any).__handler;
            }
            if (nextArrow) {
                const handler = (nextArrow as any).__handler;
                if (handler) nextArrow.removeEventListener("click", handler);
                delete (nextArrow as any).__handler;
            }

            // Clean up Swiper instance using the captured 'swiper' variable
            try {
                swiper?.destroy(true, true);
            } catch (e) { }


            // optional: remove products-source element
            const src = document.getElementById(PRODUCTS_SOURCE_ID);
            if (src && src.parentElement) {
                src.parentElement.removeChild(src);
            }
        };
    }, []); // run once
    return (
        <section id="product-box" ref={rootRef}> {/* Attach ref here */}
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
                                <li>
                                    <a href="#" data-category="All" className="active"> {/* Added active class for default filter */}
                                        All{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="Crustaceans">
                                        Crustaceans{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="Farmed Fish">
                                        Farmed Fish{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="Saltwater Fish">
                                        Saltwater Fish{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="soup">
                                        Soup{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="drink">
                                        Drinks{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="salad">
                                        Salad{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="dessert">
                                        Dessert{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="product-offers-sidebar">
                            <h3>PRODUCTS</h3>

                            {/* Sidebar product 1 (uses PRODUCTS[6] in your original) */}
                            <div className="sidebar-product-item ">
                                <div className="product-sidebar-image-holder">
                                    <img src={p(6).img} alt={p(6).name} />
                                </div>
                                <div className="sidebar-product-item-content ">
                                    <a href="" className="salmon-name ">
                                        <strong>{p(6).name}</strong>
                                    </a>
                                    <p id="price-offer">
                                        <span>€</span>
                                        <del>{p(6).originalPrice?.toFixed(2)}</del>
                                    </p>
                                    <p id="Salmon-price">
                                        <span>€</span>
                                        <strong>{p(6).price?.toFixed(2)}</strong>
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar product 2 (PRODUCTS[4]) */}
                            <div className="sidebar-product-item">
                                <div className="product-sidebar-image-holder">
                                    <img src={p(4).img} alt={p(4).name} />
                                </div>
                                <div className="sidebar-product-item-content">
                                    <a href="">
                                        <strong>{p(4).name}</strong>
                                    </a>
                                    <p id="price-offer">
                                        <span>€</span>
                                        <del>{p(4).originalPrice?.toFixed(2)}</del>
                                    </p>
                                    <p id="Salmon-price">
                                        <span>€</span>
                                        <strong>{p(4).price?.toFixed(2)}</strong>
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar product 3 (PRODUCTS[5]) */}
                            <div className="sidebar-product-item">
                                <div className="product-sidebar-image-holder">
                                    <img src={p(5).img} alt={p(5).name} />
                                </div>
                                <div className="sidebar-product-item-content">
                                    <a href="">
                                        <strong>{p(5).name}</strong>
                                    </a>
                                    <p id="price-offer">
                                        <span>€</span>
                                        <del>{p(5).originalPrice?.toFixed(2)}</del>
                                    </p>
                                    <p id="Salmon-price">
                                        <span>€</span>
                                        <strong>{p(5).price?.toFixed(2)}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="product-filter-section">
                            <h3>FILTER BY PRICE</h3>
                            <label>
                                Min Price: <input type="number" id="min-price" defaultValue={0} />
                            </label>
                            <label>
                                Max Price: <input type="number" id="max-price" defaultValue={100} />
                            </label>
                            <button id="filter-btn">Filter</button>
                        </div>

                        <div className="product-tag-section">
                            <h3>TAGS</h3>
                            <button className="tag-btn" data-tag="Burger">
                                Burger
                            </button>
                            <button className="tag-btn" data-tag="Crabs">
                                Crabs
                            </button>
                            <button className="tag-btn" data-tag="Crustaceans">
                                Crustaceans
                            </button>
                            <button className="tag-btn" data-tag="Fish">
                                Fish
                            </button>
                            <button className="tag-btn" data-tag="Food">
                                Food
                            </button>
                            <button className="tag-btn" data-tag="Saltwater">
                                Saltwater
                            </button>
                            <button className="tag-btn" data-tag="Soup">
                                Soup
                            </button>
                        </div>
                    </div>

                    {/* Products area */}
                    <div className="shop-products">
                        <div className="products-header">
                            <h3>SHOP</h3>
                            <div className="shop-item-sort">
                                <p>Showing 1–6 of 27 results</p>
                                <select name="sort" id="sort-select">
                                    <option value="" hidden>
                                        Default sorting
                                    </option>
                                    <option value="popularity">sort by popularity</option>
                                    <option value="rating">sort by average rating</option>
                                    <option value="latest">sort by latest</option>
                                    <option value="price">sort by price : low to high</option>
                                </select>
                            </div>
                        </div>

                        {/* Swiper with slides — each slide keeps your original product-grid structure */}
                        <div className="swiper myProductSwiper">
                            
                            <div className="swiper-wrapper">
                                {/* Slide 1 (Products 1–6) */}
                                <div className="swiper-slide">
                                    <div className="product-grid">
                                        {/* product 1 -> PRODUCTS[0] */}
                                        <div
                                            className="product"
                                            data-price={p(0).price}
                                            data-tags={p(0).tags.join(",")}
                                            data-category={p(0).category}
                                        >
                                            <div className="swiper-product-holder ">
                                                <img src={p(0).img} alt={p(0).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(0).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(0).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(0).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 2 -> PRODUCTS[1] */}
                                        <div
                                            className="product"
                                            data-price={p(1).price}
                                            data-tags={p(1).tags.join(",")}
                                            data-category={p(1).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(1).img} alt={p(1).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(1).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(1).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(1).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 3 -> PRODUCTS[2] */}
                                        <div
                                            className="product"
                                            data-price={p(2).price}
                                            data-tags={p(2).tags.join(",")}
                                            data-category={p(2).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(2).img} alt={p(2).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(2).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(2).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(2).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 4 -> PRODUCTS[3] */}
                                        <div
                                            className="product"
                                            data-price={p(3).price}
                                            data-tags={p(3).tags.join(",")}
                                            data-category={p(3).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(3).img} alt={p(3).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(3).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(3).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(3).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 5 -> PRODUCTS[4] */}
                                        <div
                                            className="product"
                                            data-price={p(4).price}
                                            data-tags={p(4).tags.join(",")}
                                            data-category={p(4).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(4).img} alt={p(4).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4 id="paella-large-name">
                                                        <strong>{p(4).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(4).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(4).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 6 -> PRODUCTS[5] */}
                                        <div
                                            className="product"
                                            data-price={p(5).price}
                                            data-tags={p(5).tags.join(",")}
                                            data-category={p(5).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(5).img} alt={p(5).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(5).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(5).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(5).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Slide 1 */}

                                {/* Slide 2 (Products 7–12) */}
                                <div className="swiper-slide">
                                    <div className="product-grid">
                                        {/* product 7 -> PRODUCTS[6] */}
                                        <div
                                            className="product"
                                            data-price={p(6).price}
                                            data-tags={p(6).tags.join(",")}
                                            data-category={p(6).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(6).img} alt={p(6).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4 id="product-salmon-name">
                                                        <strong>{p(6).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(6).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(6).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 8 -> PRODUCTS[7] */}
                                        <div
                                            className="product"
                                            data-price={p(7).price}
                                            data-tags={p(7).tags.join(",")}
                                            data-category={p(7).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(7).img} alt={p(7).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(7).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(7).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(7).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 9 -> PRODUCTS[8] */}
                                        <div
                                            className="product"
                                            data-price={p(8).price}
                                            data-tags={p(8).tags.join(",")}
                                            data-category={p(8).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(8).img} alt={p(8).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(8).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(8).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(8).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 10 -> PRODUCTS[9] */}
                                        <div
                                            className="product"
                                            data-price={p(9).price}
                                            data-tags={p(9).tags.join(",")}
                                            data-category={p(9).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(9).img} alt={p(9).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(9).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(9).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(9).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 11 -> PRODUCTS[10] */}
                                        <div
                                            className="product"
                                            data-price={p(10).price}
                                            data-tags={p(10).tags.join(",")}
                                            data-category={p(10).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(10).img} alt={p(10).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(10).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(10).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(10).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 12 -> PRODUCTS[11] */}
                                        <div
                                            className="product"
                                            data-price={p(11).price}
                                            data-tags={p(11).tags.join(",")}
                                            data-category={p(11).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(11).img} alt={p(11).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(11).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(11).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(11).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Slide 2 */}

                                {/* Slide 3 (Products 13–18) */}
                                <div className="swiper-slide">
                                    <div className="product-grid">
                                        {/* product 13 -> PRODUCTS[12] */}
                                        <div
                                            className="product"
                                            data-price={p(12).price}
                                            data-tags={p(12).tags.join(",")}
                                            data-category={p(12).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(12).img} alt={p(12).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4 id="product-very-very-large-name">
                                                        <strong>{p(12).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(12).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(12).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 14 -> PRODUCTS[13] */}
                                        <div
                                            className="product"
                                            data-price={p(13).price}
                                            data-tags={p(13).tags.join(",")}
                                            data-category={p(13).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(13).img} alt={p(13).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(13).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(13).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(13).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 15 -> PRODUCTS[14] */}
                                        <div
                                            className="product"
                                            data-price={p(14).price}
                                            data-tags={p(14).tags.join(",")}
                                            data-category={p(14).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(14).img} alt={p(14).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(14).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(14).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(14).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 16 -> PRODUCTS[15] */}
                                        <div
                                            className="product"
                                            data-price={p(15).price}
                                            data-tags={p(15).tags.join(",")}
                                            data-category={p(15).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(15).img} alt={p(15).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(15).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(15).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(15).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 17 -> PRODUCTS[16] */}
                                        <div
                                            className="product"
                                            data-price={p(16).price}
                                            data-tags={p(16).tags.join(",")}
                                            data-category={p(16).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(16).img} alt={p(16).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(16).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(16).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(16).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 18 -> PRODUCTS[17] */}
                                        <div
                                            className="product"
                                            data-price={p(17).price}
                                            data-tags={p(17).tags.join(",")}
                                            data-category={p(17).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(17).img} alt={p(17).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(17).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(17).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(17).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Slide 3 */}

                                {/* Slide 4 (Products 19–24) */}
                                <div className="swiper-slide">
                                    <div className="product-grid">
                                        {/* product 19 -> PRODUCTS[18] */}
                                        <div
                                            className="product"
                                            data-price={p(18).price}
                                            data-tags={p(18).tags.join(",")}
                                            data-category={p(18).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(18).img} alt={p(18).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(18).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(18).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(18).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 20 -> PRODUCTS[19] */}
                                        <div
                                            className="product"
                                            data-price={p(19).price}
                                            data-tags={p(19).tags.join(",")}
                                            data-category={p(19).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(19).img} alt={p(19).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(19).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(19).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(19).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 21 -> PRODUCTS[20] */}
                                        <div
                                            className="product"
                                            data-price={p(20).price}
                                            data-tags={p(20).tags.join(",")}
                                            data-category={p(20).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(20).img} alt={p(20).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(20).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(20).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(20).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 22 -> PRODUCTS[21] */}
                                        <div
                                            className="product"
                                            data-price={p(21).price}
                                            data-tags={p(21).tags.join(",")}
                                            data-category={p(21).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(21).img} alt={p(21).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4>
                                                        <strong>{p(21).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(21).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(21).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 23 -> PRODUCTS[22] */}
                                        <div
                                            className="product"
                                            data-price={p(22).price}
                                            data-tags={p(22).tags.join(",")}
                                            data-category={p(22).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(22).img} alt={p(22).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4 id="product-large-name">
                                                        <strong>{p(22).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator"  />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(22).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(22).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 24 -> PRODUCTS[23] */}
                                        <div
                                            className="product"
                                            data-price={p(23).price}
                                            data-tags={p(23).tags.join(",")}
                                            data-category={p(23).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(23).img} alt={p(23).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4 id="product-very-large-name"> 
                                                        <strong>{p(23).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(23).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(23).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End of Slide 4 */}

                                {/* Slide 5 (Products 25–27 + empty slots) */}
                                <div className="swiper-slide">
                                    <div className="product-grid">
                                        {/* product 25 -> PRODUCTS[24] */}
                                        <div
                                            className="product"
                                            data-price={p(24).price}
                                            data-tags={p(24).tags.join(",")}
                                            data-category={p(24).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(24).img} alt={p(24).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4 >
                                                        <strong>{p(24).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(24).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(24).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* product 26 -> PRODUCTS[25] */}
                                        <div
                                            className="product"
                                            data-price={p(25).price}
                                            data-tags={p(25).tags.join(",")}
                                            data-category={p(25).category}
                                        >
                                            <div className="swiper-product-holder">
                                                <img src={p(25).img} alt={p(25).name} />
                                                <span>SALE!</span>
                                            </div>
                                            <div className="product-content-holder">
                                                <a href="" className="product-item-name">
                                                    <h4 >
                                                        <strong>{p(25).name}</strong>
                                                    </h4>
                                                </a>
                                                <div className="separator" />
                                                <div className="product-price-holder">
                                                    <div className="price-section">
                                                        <p id="price-offer">
                                                            <span>€</span>
                                                            <del>{p(25).originalPrice?.toFixed(2)}</del>
                                                        </p>
                                                        <p>
                                                            <strong>€{p(25).price?.toFixed(2)}</strong>
                                                        </p>
                                                    </div>
                                                    <div className="product-icon-holder">
                                                        <a href="">
                                                            <i className="fas fa-cart-shopping" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        

                                      
                                    </div>
                                </div>
                                {/* End of Slide 5 - For initial full list of 27 products */}

                           
                               
                           

                            </div>
                            
                        </div>
                        

                        {/* Custom Navigation */}
              {/* Custom Navigation */}
<div className="swiper-controls">
  <div className="nav-controls">
    <div className="swiper-prev" onClick={handlePrev}>
      <i className="fas fa-arrow-left" />
    </div>

    {/* page-indicator ثابت */}
    <span id="page-indicator" className="active">
      1
    </span>

    <div className="swiper-next" onClick={handleNext}>
      <i className="fas fa-arrow-right" />
    </div>
  </div>
</div>

                    </div>
                    {/* shop-products */}
                </div>
            </div>
        </section>
    );
};

export default Shop;
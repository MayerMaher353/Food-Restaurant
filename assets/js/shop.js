
 // start header scrolled
 window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const logo = document.getElementById("logo");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      logo.src = "./assets/images/logo/logo-sm.png"; // dark logo
    } else {
      header.classList.remove("scrolled");
      logo.src = "./assets/images/logo/logo-sm-white.png"; // light logo
    }
  });

// end header scrolled


//galary footer swiper
const gallerySlider = new Swiper(".gallery-container", {
  loop: true,
  slidesPerView: "auto",   //  auto respects fixed CSS
  spaceBetween: 13,
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  wrapperClass: "gallery-wrapper",
  slideClass: "gallery-item",
});




// elements (must be declared first)
const prevArrow = document.querySelector(".swiper-prev");
const nextArrow = document.querySelector(".swiper-next");
const pageIndicator = document.getElementById("page-indicator");



// Swiper
const swiper = new Swiper('.myProductSwiper', {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  on: {
    init: function () {
      updatePage(this.realIndex, this.slides.length);
    },
    slideChange: function () {
      updatePage(this.realIndex, this.slides.length);
    }
  }
});


// update function
function updatePage(currentIndex ,totalSlides) {
  const currentPage = currentIndex + 1;
  const totalPages = totalSlides;

  // indicator
  pageIndicator.textContent = `${currentPage} / ${totalPages}`;
  pageIndicator.dataset.grid = currentPage;

  // arrows
  prevArrow.classList.toggle("hidden", currentPage === 1);
  nextArrow.classList.toggle("hidden", currentPage === totalPages);
}




//end navigation

function balanceGrids() {
  const grids = document.querySelectorAll(".product-grid");

  grids.forEach(grid => {
    // all items in grid
    const products = grid.querySelectorAll(".product");
    // visible items
    const visibleProducts = Array.from(products).filter(
      p => p.style.display !== "none"
    );

    if (visibleProducts.length === 0) {
      grid.style.display = "none"; // hide the empty grid
    } else {
      grid.style.display = ""; // make it visible if there's items
    }
  });
}


/* ----------------- utils ----------------- */
function normalize(s) {
  return (s || "").toString().trim().toLowerCase();
}
function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/* ----------------- product source setup ----------------- */
const PRODUCTS_SOURCE_ID = "products-source";
function ensureProductsSource() {
  let src = document.getElementById(PRODUCTS_SOURCE_ID);
  if (src) return src;

  src = document.createElement("div");
  src.id = PRODUCTS_SOURCE_ID;
  src.style.display = "none";
  document.body.appendChild(src);

  // collect original products (skip swiper duplicate clones)
  const rawProducts = Array.from(document.querySelectorAll(".product")).filter(p => {
    const slide = p.closest(".swiper-slide");
    return !(slide && slide.classList.contains("swiper-slide-duplicate"));
  });

  rawProducts.forEach(p => {
    const clone = p.cloneNode(true);
    src.appendChild(clone);
  });

  console.log("Products source initialized with", rawProducts.length, "products");
  return src;
}

/* ----------------- rebuild slides from filtered ----------------- */


function rebuildSlidesFromFiltered(perSlide = 6) {
  const source = ensureProductsSource();
  const visibleProducts = Array.from(source.querySelectorAll(".product[data-filtered='1']"));
  const wrapper = document.querySelector(".swiper-wrapper");
  if (!wrapper) return console.warn("swiper-wrapper not found.");

  // temporarily disable Swiper loop to avoid missing slides
  if (typeof swiper !== "undefined") swiper.params.loop = false;

  // clear existing slides
  if (typeof swiper !== "undefined" && swiper.removeAllSlides) {
    swiper.removeAllSlides();
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

    if (typeof swiper !== "undefined") {
      try { 
        swiper.update(); 
        swiper.slideTo(0); 
      } catch(e){}
    }

    //  update indicator immediately
    updatePage(0, 0);

    console.log("rebuildSlides: 0 visible products");
    return;
  }

  const groups = chunkArray(visibleProducts, perSlide);

  groups.forEach(group => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    const grid = document.createElement("div");
    grid.className = "product-grid";

    group.forEach(p => {
      const item = p.cloneNode(true);
      item.style.display = "";
      item.removeAttribute("aria-hidden");
      const h4 = item.querySelector(".product-item-name h4");
      if (h4) h4.innerText = h4.innerText.trim();
      grid.appendChild(item);
    });

    slide.appendChild(grid);
    wrapper.appendChild(slide);
  });

  // update Swiper & reset index
  if (typeof swiper !== "undefined") {
    try {
      swiper.update();
      swiper.slideTo(0);
      swiper.params.loop = true;

      // update indicator immediately with new slide count
      updatePage(swiper.realIndex, swiper.slides.length);

    } catch(e){}
  }

  console.log("rebuildSlides: visible products =", visibleProducts.length, "slides =", groups.length);
}



/* ----------------- apply filters ----------------- */
function applyFilters() {
  const source = ensureProductsSource();

  const minPrice = parseFloat(document.getElementById("min-price")?.value) || 0;
  const maxPrice = parseFloat(document.getElementById("max-price")?.value) || Infinity;

  const selectedTags = Array.from(document.querySelectorAll(".tag-btn.active"))
    .map(b => normalize(b.dataset.tag));

  const activeCategoryRaw = document.querySelector(".categories a.active")?.dataset.category;
  const activeCategory = normalize(activeCategoryRaw || "all");

  const searchValue = (document.getElementById("searchInput")?.value || "").toLowerCase();

  const products = Array.from(source.querySelectorAll(".product"));

  /* ---  Reset to ALL if no filters active (START) --- */
  const noActiveFilters =
    searchValue.trim() === "" &&
    selectedTags.length === 0 &&
    activeCategory === "all" &&
    minPrice === 0 &&
    maxPrice === Infinity;

  if (noActiveFilters) {
    products.forEach(p => {
      p.dataset.filtered = "1";
      p.style.display = "";
      p.setAttribute("aria-hidden", "false");
    });

    rebuildSlidesFromFiltered(6);
    console.log("applyFilters: reset to ALL (no filters active)");
    return; // stop here so filtering below is skipped
  }
  /* ---  Reset to ALL if no filters active (END) --- */

  // --- normal filtering ---
  products.forEach(product => {
    const price = parseFloat(product.dataset.price || 0);
    const tags = product.dataset.tags
      ? product.dataset.tags.split(",").map(t => normalize(t))
      : [];
    const category = normalize(product.dataset.category || "");
    const productName = (product.querySelector(".product-item-name h4")?.innerText || "").trim().toLowerCase();

    const visible = (price >= minPrice && price <= maxPrice)
      && (selectedTags.length === 0 || selectedTags.some(tag => tags.includes(tag)))
      && (activeCategory === "all" || category === activeCategory)
      && productName.includes(searchValue);

    product.dataset.filtered = visible ? "1" : "0";
    product.style.display = visible ? "" : "none";
    product.setAttribute("aria-hidden", visible ? "false" : "true");
  });

  // debug logs
  const catCounts = {};
  const visibleNames = [];
  products.forEach(p => {
    const c = normalize(p.dataset.category || "uncategorized");
    if (p.dataset.filtered === "1") {
      catCounts[c] = (catCounts[c] || 0) + 1;
      const h4 = p.querySelector(".product-item-name h4");
      visibleNames.push(`[${c}] ${h4 ? h4.innerText.trim() : "?"}]`);
    }
  });
  console.log("applyFilters: activeCategory =", activeCategory, "visibleCountsByCategory:", catCounts);
  console.log("Visible products:", visibleNames);

  rebuildSlidesFromFiltered(6);
}



/* ----------------- Init ----------------- */
ensureProductsSource();
applyFilters();

/* ----------------- Debug categories ----------------- */
function debugCategories() {
  const source = ensureProductsSource();
  const products = Array.from(source.querySelectorAll(".product"));

  const allCats = {};
  products.forEach(p => {
    const cat = normalize(p.dataset.category || "uncategorized");
    allCats[cat] = (allCats[cat] || 0) + 1;
  });

  console.log("All product categories + counts:", allCats);

  const categoryLinks = Array.from(document.querySelectorAll(".categories a"))
    .map(a => normalize(a.dataset.category));
  console.log("Categories in menu:", categoryLinks);
}










// --- event bindings ---

// Price filter
document.getElementById("filter-btn")?.addEventListener("click", applyFilters);

// Tag filter
document.querySelectorAll(".tag-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    applyFilters();
  });
});


// Category filter
document.querySelectorAll(".categories a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".categories a").forEach(l =>
      l.classList.remove("active")
    );
    link.classList.add("active");

    // ---  Reset everything if "All" is clicked ---
    if (normalize(link.dataset.category) === "all") {
      // clear search
      const searchInput = document.getElementById("searchInput");
      if (searchInput) searchInput.value = "";

      // clear tag filters
      document.querySelectorAll(".tag-btn.active").forEach(btn =>
        btn.classList.remove("active")
      );

      // reset price filters
      if (document.getElementById("min-price")) document.getElementById("min-price").value = "0";
      if (document.getElementById("max-price")) document.getElementById("max-price").value = "100";
    }

    applyFilters();
  });
});


// Search filter
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", applyFilters);
  }
});


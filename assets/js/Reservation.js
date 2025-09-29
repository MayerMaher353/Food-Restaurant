// ================== Header Scroll ==================
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

// ================== Footer Gallery Swiper ==================
const gallerySlider = new Swiper(".gallery-container", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 13,
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  wrapperClass: "gallery-wrapper",
  slideClass: "gallery-item",
});

// ================== Product Swiper ==================
const myProductSwiper = new Swiper('.myProductSwiper', {
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    1200: { slidesPerView: 'auto', slidesPerGroup: 2 },
    992: { slidesPerView: 'auto', slidesPerGroup: 2 },
    768: { slidesPerView: 'auto', slidesPerGroup: 1 },
    480: { slidesPerView: 'auto', slidesPerGroup: 1 },
    0: { slidesPerView: 'auto', slidesPerGroup: 1 },
  },
});

// ================== Filter ==================
document.getElementById("filter-btn").addEventListener("click", () => {
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const price = parseFloat(product.dataset.price);
    product.style.display = (price >= minPrice && price <= maxPrice) ? "block" : "none";
  });

  myProductSwiper.update();
});

// ================== Tags Filter ==================
const tagButtons = document.querySelectorAll(".tag-btn");

tagButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    const selectedTags = Array.from(document.querySelectorAll(".tag-btn.active"))
                              .map(b => b.dataset.tag);

    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
      const price = parseFloat(product.dataset.price);
      const tags = product.dataset.tags ? product.dataset.tags.split(",") : [];
      const priceMatch = price >= minPrice && price <= maxPrice;
      const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => tags.includes(tag));

      product.style.display = (priceMatch && tagMatch) ? "block" : "none";
    });

    myProductSwiper.update();
  });
});

// ================== Category Filter ==================
const categoryLinks = document.querySelectorAll(".categories a");

categoryLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const selectedCategory = link.dataset.category;
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
      const productCategory = product.dataset.category;
      product.style.display = (selectedCategory === "All" || productCategory === selectedCategory) ? "block" : "none";
    });

    myProductSwiper.update();
  });
});

// ================== Search ==================
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".product");

  searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {
      const productName = product.querySelector(".product-item-name h4").innerText.toLowerCase();
      product.style.display = productName.includes(searchValue) ? "block" : "none";
    });

    myProductSwiper.update();
  });
});

 


  // Logo change on scroll
    window.addEventListener("scroll", function () {
      const header = document.getElementById("main-header");
      const logo = document.getElementById("logo");

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        logo.src = "./assets/images/logo/logo-sm.png"; // dark logo
      } else {
        header.classList.remove("scrolled");
        logo.src = "./assets/images/logo/logo-sm-white.png";
      }
    });
    

    // Swiper 
    const swiper = new Swiper('.gallery-container', {
      slidesPerView: 3,
      spaceBetween: 15,
      loop: true,
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },
    });
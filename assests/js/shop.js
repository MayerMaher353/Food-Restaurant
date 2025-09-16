
 // start header scrolled
 window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    const logo = document.getElementById("logo");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      logo.src = "./assests/images/logo/logo-sm.png"; // dark logo
    } else {
      header.classList.remove("scrolled");
      logo.src = "./assests/images/logo/logo-sm-white.png"; // light logo
    }
  });

// end header scrolled


//galary footer swiper
const gallerySlider = new Swiper(".gallery-container", {
  loop: true,
  slidesPerView: "auto",   // 👈 auto respects fixed CSS
  spaceBetween: 13,
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  wrapperClass: "gallery-wrapper",
  slideClass: "gallery-item",
});







// start swiper
const swiper = new Swiper('.myProductSwiper', {
  slidesPerView: 'auto',  // auto width based on product
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


//filter 
document.getElementById("filter-btn").addEventListener("click", () => {
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const price = parseFloat(product.dataset.price);

    if (price >= minPrice && price <= maxPrice) {
      product.style.display = "block";  // show product
    } else {
      product.style.display = "none";   // hide product
    }
  });

  // If using Swiper, update slides after filtering
  if (typeof myProductSwiper !== "undefined") {
    myProductSwiper.update(); 
  }
});

const tagButtons = document.querySelectorAll(".tag-btn");

tagButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active"); // toggle button style

    // get all active tags
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

      product.style.display = priceMatch && tagMatch ? "block" : "none";
    });

    if (typeof myProductSwiper !== "undefined") {
      myProductSwiper.update();
    }
  });
});


//category filter
const categoryLinks = document.querySelectorAll(".categories a");

categoryLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // prevent page jump
    const selectedCategory = link.dataset.category;

    const products = document.querySelectorAll(".product");

    products.forEach(product => {
      const productCategory = product.dataset.category;

      if (selectedCategory === "All" || productCategory === selectedCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

    if (typeof myProductSwiper !== "undefined") {
      myProductSwiper.update();
    }
  });
});

//search
// shop.js

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const products = document.querySelectorAll(".product");

  searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {
      const productName = product.querySelector(".product-item-name h4").innerText.toLowerCase();

      if (productName.includes(searchValue)) {
        product.style.display = "block"; // show product
      } else {
        product.style.display = "none"; // hide product
      }
    });
  });
});

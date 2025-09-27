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

const swiper = new Swiper(".swiper-1", {
  slidesPerView: 1, // default = 3 slides
  spaceBetween: 30,
  autoHeight: true,
  loop: false,
  speed: 700,
  threshold: 15,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Makes dots clickable
    renderBullet: function (index, className) {
      const labels = [
        "ALL DISHES",
        "SALTWATER FISH",
        "FARMED FISH",
        "CRUSTACEANS",
      ];
      return `<span class="${className}">${labels[index]}</span>`;
    },
  },
});

const swiperExtra = new Swiper(".swiper-extra", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  loop: false,
  speed: 700,
  threshold: 15,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const labels = ["DRINKS", "DESERTS", "SOUPS", "SALADS"];
      return `<span class="${className}">${labels[index]}</span>`;
    },
  },
});

const swiper2 = new Swiper(".swiper-2", {
  slidesPerView: 3, // default = 3 slides
  spaceBetween: 30,
  loop: false,
  speed: 1200,
  threshold: 15,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    992: { slidesPerView: 3 },
  },
});

//galary footer swiper
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
$(document).ready(function () {
  $("select").niceSelect();
});
const openBtn = document.getElementById("open-reservation");
const modal = document.getElementById("reservation-window");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

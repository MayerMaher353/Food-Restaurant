function adjustBackgroundPosition() {
  const header = document.querySelector("header");
  const background = document.querySelector(".background-image .background");

  if (header && background) {
    const headerHeight = header.offsetHeight;
    background.style.marginTop = -headerHeight + "px";
    background.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  }
}

window.addEventListener("load", adjustBackgroundPosition);

window.addEventListener("resize", adjustBackgroundPosition);

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

let autoSwiped = false;
const gallerySection = document.querySelector(".gallery-container");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !autoSwiped) {
        autoSwiped = true; // prevent repeating
        setTimeout(() => {
          gallerySlider.slideNext(600);
          // 600ms = smooth transition speed
        }, 1000); // wait 1 second before sliding
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(gallerySection);

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

let autoSwiped = false; 
const gallerySection = document.querySelector(".gallery-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !autoSwiped) {
      autoSwiped = true; // prevent repeating
      setTimeout(() => {
        gallerySlider.slideNext(600); 
        // 600ms = smooth transition speed
      }, 1000); // wait 1 second before sliding
    }
  });
}, { threshold: 0.5 }); 

observer.observe(gallerySection);
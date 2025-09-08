const swiper = new Swiper('.swiper', {
    slidesPerView: 3,       // default = 3 slides
    spaceBetween: 30,
    loop: true, // Makes it infinite loop
    centeredSlides:true,
    speed:1200, 
    threshold:15,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Makes dots clickable
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { slidesPerView: 1 },      // mobile
        992: { slidesPerView: 3 }     // laptop and above
    },
    on: {
     slideChangeTransitionStart: function () {
       document.querySelectorAll('.quotes').forEach(q => {
          q.classList.remove('quotes-animate');
       });
       const activeQuote = swiper.slides[swiper.activeIndex].querySelector('.quotes');
        if (activeQuote) {
          activeQuote.classList.add('quotes-animate');
        }
     },
     slideChange: function () {
          document.querySelectorAll('.swiper-pagination-bullet').forEach(b => {
            b.classList.remove('pulse');
          });

          const active = document.querySelector('.swiper-pagination-bullet-active');
          if (active) {
            void active.offsetWidth;
            active.classList.add('pulse');
          }
     }
    },
});
const slides = document.querySelectorAll('.swiper-slide');
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  document.querySelector('.swiper-wrapper').appendChild(clone);
});
function animateCounter(id, target, duration) {
    const counter = document.getElementById(id);
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      counter.textContent = start;
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);
}
animateCounter("counter1", 200, 2000);
animateCounter("counter2", 400, 2000);
animateCounter("counter3", 100, 2000);
animateCounter("counter4", 40, 2000);

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
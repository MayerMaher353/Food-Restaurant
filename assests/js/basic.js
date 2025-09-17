const boxes=document.querySelectorAll('.ele-features');
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      boxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');
    });
 });


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
function animateCounter(id, target, duration) {
  const counter = document.getElementById(id);
  let start = 0;
  const fps = 60; // frames per second
  const totalSteps = Math.round((duration / 1000) * fps);
  const increment = target / totalSteps;

  let step = 0;
  const timer = setInterval(() => {
    step++;
    start += increment;

    if (step >= totalSteps) {
      start = target;
      clearInterval(timer);
    }

    if (Number.isInteger(target)) {
      counter.textContent = Math.floor(start);
    } else {
      counter.textContent = start.toFixed(1);
    }
  }, 1000 / fps);
}
animateCounter("counter1", 200, 2000);
animateCounter("counter2", 400, 2000);
animateCounter("counter3", 100, 2000);
animateCounter("counter4", 40, 2000);
animateCounter("feature-count1",100,2000);
animateCounter("feature-count2",50,2000);
animateCounter("feature-count3",4.9,2000);
animateCounter("feature-count4",25,2000);

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
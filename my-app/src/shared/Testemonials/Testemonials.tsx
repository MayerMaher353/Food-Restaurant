import React, { useEffect, useRef } from "react";
import "./css/Testemonials.css";
import "./css/TestemonialsResponsive.css";
import image1 from "../../assets/images/face-1.jpg.webp";
import image2 from "../../assets/images/face-2.jpg.webp";
import image3 from "../../assets/images/face-3.jpg.webp";
import image4 from "../../assets/images/face-4.jpg.webp";
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

const Testimonials: React.FC = () => {
  const handleSlideChange = (swiper: any) => {
    document.querySelectorAll(".quotes").forEach((q) => {
      q.classList.remove("quotes-animate");
    });
    const activeQuote =
      swiper.slides[swiper.activeIndex].querySelector(".quotes");
    if (activeQuote) activeQuote.classList.add("quotes-animate");

    document.querySelectorAll(".swiper-pagination-bullet").forEach((b) => {
      b.classList.remove("pulse");
    });
    const active = document.querySelector(".swiper-pagination-bullet-active");
    if (active) {
      void (active as HTMLElement).offsetWidth;
      active.classList.add("pulse");
    }
  };
  const swiperRef = useRef<any>(null);
  function animateCounter(id: string, target: number, duration: number) {
    const counter = document.getElementById(id);
    if (!counter) return;

    let start = 0;
    const fps = 60;
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

      counter.textContent = Number.isInteger(target)
        ? Math.floor(start).toString()
        : start.toFixed(1);
    }, 1000 / fps);
  }

  useEffect(() => {
    animateCounter("counter1", 200, 3000);
    animateCounter("counter2", 400, 3000);
    animateCounter("counter3", 100, 3000);
    animateCounter("counter4", 40, 3000);
  }, []);

  return (
    <section className="testimonials">
      <div className="title">
        <p>TESTIMONIALS</p>
        <h1>What Our Visitors Say</h1>
        <p>
          Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae
          dignissimos fugiat sit nam.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Keyboard]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              speed={1200}
              keyboard={{ enabled: true, onlyInViewport: false }}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                992: { slidesPerView: 3 },
              }}
              onSlideChange={handleSlideChange}
              className="swiper"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="quotes">
                  <i>"</i>
                </div>
                <h3>It was very delicious!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, eligendi dolorem? Voluptates rem magnam nesciunt
                  ullam hic error sed, minus, accusantium inventore ex
                  reprehenderit ipsum aperiam libero ut, laudantium delectus
                  deleniti debitis quas dolore quos. Accusamus ea saepe, veniam.
                  Nemo.
                </p>
                <div className="data">
                  <img src={image1} alt="Customer 1" />
                  <p>EMMA NEWMAN</p>
                  <p>02.02.21</p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="quotes">
                  <i>"</i>
                </div>
                <h3>I'm delighted!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, eligendi dolorem? Voluptates rem magnam nesciunt
                  ullam hic error sed, minus, accusantium inventore ex
                  reprehenderit ipsum aperiam libero ut, laudantium delectus
                  deleniti debitis quas dolore quos. Accusamus ea saepe, veniam.
                  Nemo.
                </p>
                <div className="data">
                  <img src={image2} alt="Customer 2" />
                  <p>VIKTORIA FREEMAN</p>
                  <p>02.02.21</p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="quotes">
                  <i>"</i>
                </div>
                <h3>I will visit again.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, eligendi dolorem? Voluptates rem magnam nesciunt
                  ullam hic error sed, minus, accusantium inventore ex
                  reprehenderit ipsum aperiam libero ut, laudantium delectus
                  deleniti debitis quas dolore quos. Accusamus ea saepe, veniam.
                  Nemo.
                </p>
                <div className="data">
                  <img src={image3} alt="Customer 3" />
                  <p>PAUL TRUEMAN</p>
                  <p>02.02.21</p>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="quotes">
                  <i>"</i>
                </div>
                <h3>The best restaurant!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Similique, eligendi dolorem? Voluptates rem magnam nesciunt
                  ullam hic error sed, minus, accusantium inventore ex
                  reprehenderit ipsum aperiam libero ut, laudantium delectus
                  deleniti debitis quas dolore quos. Accusamus ea saepe, veniam.
                  Nemo.
                </p>
                <div className="data">
                  <img src={image4} alt="Customer 4" />
                  <p>OSCAR OLDMAN</p>
                  <p>02.02.21</p>
                </div>
              </SwiperSlide>
              
              <div className="slider">
                <a href="/about-us">MORE ABOUT US</a>
                <div className="swiper-pagination"></div>
                <div className="button">
                  <p>SLIDER NAVIGATION</p>
                  <div className="swiper-button-prev">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="swiper-button-next">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="top">
                <h1 id="counter1">0</h1>
                <h1>+</h1>
              </div>
              <p>VISITORS DAILY</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="top">
                <h1 id="counter2">0</h1>
                <h1>+</h1>
              </div>
              <p>DELIVERIES MONTHLY</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="top">
                <h1 id="counter3">0</h1>
                <h1>%</h1>
              </div>
              <p>POSITIVE FEEDBACK</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="top">
                <h1 id="counter4">0</h1>
                <h1>+</h1>
              </div>
              <p>AWARDS AND HONORS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

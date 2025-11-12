import React, { useEffect } from "react";
import "./css/Reservation.css";
import "../../assets/css/responsive.css";



import logoSmWhite from "../../assets/images/logo/logo-sm-white.png";
import logoSm from "../../assets/images/logo/logo-sm.png";
import reservedImg from "../../assets/images/reservation-bg2.jpg.webp";

const ReservationPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("main-header");
      const logo = document.getElementById("logo") as HTMLImageElement;
      if (!header || !logo) return;

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        logo.src = logoSm; 
      } else {
        header.classList.remove("scrolled");
        logo.src = logoSmWhite; 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* start of the header */}
      <header className="px-3" id="main-header">
        <div className="container-fluid px-2">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid logo-nav d-flex">
              {/* logo */}
              <a className="navbar-brand logo d-flex align-items-center" href="#">
                <div className="logo-holder">
                  <img id="logo" src={logoSmWhite} alt="Logo" />
                </div>
              </a>
              {/* toggle button for small screens */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
                aria-controls="mainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* nav links */}
              <div className="collapse navbar-collapse nav-links" id="mainNavbar">
                <button
                  type="button"
                  className="btn-close exit-menu ms-auto d-lg-none"
                  data-bs-toggle="collapse"
                  data-bs-target="#mainNavbar"
                  aria-label="Close"
                >
                  <i className="fas fa-xmark"></i>
                </button>
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links gap-4">
                  <li className="nav-item d-flex align-items-center home">
                    <i className="fas fa-house me-1"></i>
                    <a className="nav-link after-home" href="index.html">
                      Home
                    </a>
                  </li>
                  {/* Pages */}
                  <li className="nav-item  shop-link dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="categoriesMenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="categoriesMenu">
                      <li>
                        <a className="dropdown-item" href="about-us.html">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="history.html">
                          History
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="faq.html">
                          FAQ
                        </a>

                      </li>

                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="menu.html">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="Reservation.html">
                      Order
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="newsletter.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="shop.html">
                      shop
                    </a>
                  </li>
                </ul>
              </div>
              {/* button + cart */}
              <div className="d-flex align-items-center header-right-side">
                <button onClick={() => (window.location.href = "/reservation")}>RESERVATION</button>

                <div className="icon-shopping position-relative">
                  <a href="#">
                    <i className="fas fa-cart-shopping"></i>
                  </a>
                  <span
                    id="cart-count"
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  >
                    0
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end of the header */}

      {/* Background Section */}
      <div
        className="row g-0 background-image"
        style={{ backgroundImage: `url(${reservedImg})` }}
      >
        <div className="col-12 background d-flex justify-content-center align-items-center pt-0 position-relative">
          <div className="overlay position-absolute top-0 start-0"></div>
          <div className="background-text position-absolute z-2 text-center">
            <h2>Reservation</h2>
          </div>
        </div>
      </div>

      {/* Reservation Form */}
      <section className="tst-content-frame--start tst-p-60-0">
        <div className="container text-center">
          <h3 className="tst-title--h tst-mb-30">Book a Table</h3>
          <p className="tst-text tst-mb-60">
            CALL US +1 777 000 111 OR COMPLETE THE FORM BELOW
          </p>

          <div className="reservation-form">
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <select required>
                <option value="">Person</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 or more</option>
              </select>
              <input type="date" required />
              <select required>
                <option value="">Time</option>
                <option value="12pm">12:00 PM</option>
                <option value="1pm">1:00 PM</option>
                <option value="2pm">2:00 PM</option>
                <option value="3pm">3:00 PM</option>
                <option value="4pm">4:00 PM</option>
                <option value="5pm">5:00 PM</option>
              </select>
              <textarea placeholder="Message"></textarea>
              <button type="submit">RESERVE A TABLE</button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default ReservationPage;

import React, { useEffect, useRef } from "react";
import "./css/header.css";
import logoWhite from "../../assets/images/logo/logo-sm-white.png";
import logoDark from "../../assets/images/logo/logo-sm.png";

const SharedHeader =()=> {
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const logo = logoRef.current;

      if (!header || !logo) return;

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        logo.src = logoDark; // dark logo
      } else {
        header.classList.remove("scrolled");
        logo.src = logoWhite; // light logo
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="px-3" id="main-header" ref={headerRef}>
      <div className="container-fluid px-2">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid logo-nav d-flex">
            {/* logo */}
            <a className="navbar-brand logo d-flex align-items-center" href="#">
              <div className="logo-holder">
                <img
                  id="logo"
                  ref={logoRef}
                  src={logoWhite}
                  alt="Logo"
                />
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
                <li className="nav-item shop-link dropdown">
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
                      <a className="dropdown-item" href="about-us">
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
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            {/* button + cart */}
            <div className="d-flex align-items-center header-right-side">
              <button onClick={() => (window.location.href = "Reservation.html")}>
                RESERVATION
              </button>
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
  );
};

export default SharedHeader;

import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // added useLocation
import "./css/header.css";
import logoWhite from "../../assets/images/logo/logo-sm-white.png";
import logoDark from "../../assets/images/logo/logo-sm.png";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

// Function to determine if a NavLink is active and apply the 'after-home' class
const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? "after-home" : ""}`;

const SharedHeader = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const { toggleCart, cartItems } = useContext(CartContext);

  //  Detect current route
  const location = useLocation();

  //  Determine if current page is checkout or cart
  const isSpecialPage =
    location.pathname === "/checkout" || location.pathname === "/cart";

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      const logo = logoRef.current;

      if (!header || !logo) return;

      //  For checkout/cart → always scrolled + dark logo
      if (isSpecialPage) {
        header.classList.add("scrolled");
        logo.src = logoDark;
        return;
      }

      //  Normal scroll behavior for other pages
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        logo.src = logoDark;
      } else {
        header.classList.remove("scrolled");
        logo.src = logoWhite;
      }
    };

    //  Run on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSpecialPage]);

  return (
    <header className="px-3" id="main-header" ref={headerRef}>
      <div className="container-fluid px-2">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid logo-nav d-flex">
            {/* Logo - Uses Link, as it's not part of the active menu items */}
            <Link className="navbar-brand logo d-flex align-items-center" to="/">
              <div className="logo-holder">
                <img
                  id="logo"
                  ref={logoRef}
                  src={isSpecialPage ? logoDark : logoWhite} // initial logo for special pages
                  alt="Logo"
                />
              </div>
            </Link>

            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Links */}
            <div className="collapse navbar-collapse nav-links" id="mainNavbar">
              <button
                type="button"
                className="btn-close exit-menu ms-auto d-lg-none"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavbar"
              >
                <i className="fas fa-xmark"></i>
              </button>

              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links gap-4">
                <li className="nav-item d-flex align-items-center home">
                  <i className="fas fa-house me-1"></i>
                  <NavLink className={getNavLinkClassName} to="/" end>
                    Home
                  </NavLink>
                </li>

                <li className="nav-item shop-link dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="categoriesMenu"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ourHistory">
                        History
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/menu">
                    Menu
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/reservation">
                    Order
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/contact">
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/shop">
                    Shop
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center header-right-side">
              <Link to="/reservation">
                <button>RESERVATION</button>
              </Link>
           <Link to="/signUp">
      <i className="fa-solid fa-user user-icon"></i>
    </Link>
              <div
                className="icon-shopping position-relative"
                onClick={toggleCart}
                style={{ cursor: "pointer" }}
              >
      
                <i className="fas fa-cart-shopping"></i>
                <span
                  id="cart-count"
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                >
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
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

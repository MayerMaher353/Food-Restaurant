import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom"; // NavLink is now imported
import "./css/header.css";
import logoWhite from "../../assets/images/logo/logo-sm-white.png";
import logoDark from "../../assets/images/logo/logo-sm.png";

// Function to determine if a NavLink is active and apply the 'after-home' class
const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? 'after-home' : ''}`;

const SharedHeader = () => {
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
            
            {/* Logo - Uses Link, as it's not part of the active menu items */}
            <Link className="navbar-brand logo d-flex align-items-center" to="/">
              <div className="logo-holder">
                <img id="logo" ref={logoRef} src={logoWhite} alt="Logo" />
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
                
                {/* HOME LINK - Uses NavLink and 'end' prop for exact match */}
                <li className="nav-item d-flex align-items-center home">
                  <i className="fas fa-house me-1"></i>
                  <NavLink 
                    className={getNavLinkClassName} // Uses the shared function
                    to="/"
                    end // Ensures 'after-home' is only active on the exact root path
                  >
                    Home
                  </NavLink>
                </li>

                {/* PAGES DROPDOWN - Remains an <a> tag and Link for dropdown items */}
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
                    {/* These links don't usually need NavLink active state */}
                    <li><Link className="dropdown-item" to="/about-us">About Us</Link></li>
                    <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
                    <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                    <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                    <li><Link className="dropdown-item" to="/ourHistory">History</Link></li>
                  </ul>
                </li>

                {/* MENU LINK - Uses NavLink */}
                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/menu">
                    Menu
                  </NavLink>
                </li>

                {/* ORDER LINK - Uses NavLink */}
                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/reservation">
                    Order
                  </NavLink>
                </li>

                {/* CONTACT LINK - Uses NavLink */}
                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/contact">
                    Contact
                  </NavLink>
                </li>

                {/* SHOP LINK - Uses NavLink */}
                <li className="nav-item">
                  <NavLink className={getNavLinkClassName} to="/shop">
                    Shop
                  </NavLink>
                </li>

              </ul>
            </div>

            {/* Button + Cart - Uses Link, not NavLink */}
            <div className="d-flex align-items-center header-right-side">
              <Link to="/reservation">
                <button>RESERVATION</button>
              </Link>

              <div className="icon-shopping position-relative">
                <Link to="/cart">
                  <i className="fas fa-cart-shopping"></i>
                </Link>
                <span id="cart-count" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">0</span>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default SharedHeader;
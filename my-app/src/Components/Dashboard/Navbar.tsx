import React from "react";
import "../Dashboard/css/MyStore.css";
import "../Dashboard/css/create.css";
import "../Dashboard/css/style.css";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({toggleSidebar }) => (
  <nav>
    <i className="bx bx-menu" onClick={toggleSidebar}></i>
    <a href="#" className="nav-link">Categories</a>
    <label htmlFor="switch-mode" className="switch-mode"></label>
  </nav>
);

export default Navbar;
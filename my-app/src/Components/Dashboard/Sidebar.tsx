import React from "react";
import { useNavigate } from "react-router-dom";
import "../Dashboard/css/MyStore.css";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
   
    localStorage.removeItem("authToken");
    


    navigate("/");
  };

  return (
    <section id="sidebar" className={isOpen ? "" : "hide"}>
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">AdminHub</span>
      </a>

      <ul className="side-menu top">
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("products-section");
            }}
          >
            <i className="bx bxs-shopping-bag-alt"></i> Products
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery-section");
            }}
          >
            <i className="bx bxs-image"></i> Gallery Management
          </a>
        </li>
        
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("reservation-section");
            }}
          >
            <i className="bx bxs-cog"></i> Reservation
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact-section");
            }}
          >
            <i className="bx bxs-cog"></i> Contact
          </a>
        </li>
      </ul>

      <ul className="side-menu">
        <li>
          <button className="logout" onClick={handleLogout}>
            <i className="bx bxs-log-out-circle"></i> Logout
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;

import React from "react";
import "../Dashboard/css/MyStore.css";
import "../Dashboard/css/create.css";
import "../Dashboard/css/style.css";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => (
  <section id="sidebar" className={isOpen ? "open" : "closed"}>
    <a href="#" className="brand">
      <i className="bx bxs-smile"></i>
      <span className="text">AdminHub</span>
    </a>
    <ul className="side-menu top">
      <li className="active"><a href="#"><i className="bx bxs-dashboard"></i> Dashboard</a></li>
      <li><a href="#"><i className="bx bxs-shopping-bag-alt"></i> shop management</a></li>
      <li><a href="#"><i className="bx bxs-message-dots"></i> gallery management</a></li>
      <li><a href="#"><i className="bx bxs-group"></i> order</a></li>
      <li><a href="#"><i className="bx bxs-cog"></i> reservation</a></li>
      <li><a href="#"><i className="bx bxs-cog"></i> contact</a></li>
    </ul>
    <ul className="side-menu">
      <li><a href="#" className="logout"><i className="bx bxs-log-out-circle"></i> Logout</a></li>
    </ul>
  </section>
);

export default Sidebar;
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"; 
import ProductsList from "./ProductsList";
import GalleryManagement from "../Dashboard/GalleryManagement";
import ReservationAdminPanel from "./resevation";
import AdminContacts from "../Dashboard/AdminContacts"; 
import { PRODUCTS } from "../../constants/product-array";
import { ORDERS } from "../../constants/orders-array";
import type { Product } from "../../types/product";
import type { Order } from "../../types/orders Types";
import "../Dashboard/css/create.css";
import "../Dashboard/css/MyStore.css";
import "../Dashboard/css/style.css";
import "../Dashboard/css/order.css";
import "./css/resevation.css";
import "./css/AdminContacts.css";

const HomeDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [orders, setOrders] = useState<Order[]>(ORDERS);
  const [visibleCount, setVisibleCount] = useState(12);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const addProduct = (product: Product) => setProducts([product, ...products]);
  const loadMore = () => setVisibleCount(prev => prev + 12);
  const deleteProduct = (id: number) => setProducts(products.filter(p => p.id !== id));
  const updateProduct = (updated: Product) =>
    setProducts(products.map(p => (p.id === updated.id ? updated : p)));

  const updateOrderStatus = (id: number, status: string) =>
    setOrders(orders.map(order => (order.id === id ? { ...order, status } : order)));
  const deleteOrder = (id: number) => setOrders(orders.filter(order => order.id !== id));

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="dashboard">
      <Sidebar isOpen={sidebarOpen} />
      <section id="content">
        <Navbar toggleSidebar={toggleSidebar} />
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li><a className="active" href="#">Home</a></li>
              </ul>
            </div>
          </div>

          {/* Products Section */}
          <div id="products-section">
            <ProductsList
              products={products}
              visibleCount={visibleCount}
              loadMore={loadMore}
              onDelete={deleteProduct}
              onUpdate={updateProduct}
            />
          </div>

          {/* Gallery Section */}
          <div id="gallery-section">
            <GalleryManagement />
          </div>

        {/* Orders Section */}
<div id="orders-section" className="orders-list">
  <h2>Manage Orders</h2>
  <table className="orders-table">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Customer</th>
        <th>Items</th>
        <th>Total</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {orders.map(order => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.customerName}</td>
          <td>{order.items.map(item => `${item.name} (x${item.quantity})`).join(", ")}</td>
          <td>${order.total.toFixed(2)}</td>
          <td>
            <select
              className={`status-${order.status.toLowerCase()}`} 
              value={order.status}
              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </td>
          <td>
            <button onClick={() => deleteOrder(order.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


          {/* Reservation Section */}
          <div id="reservation-section">
            <ReservationAdminPanel />
          </div>

          {/* Contact Section */}
          <div id="contact-section">
            <AdminContacts />
          </div>

        </main>
      </section>
    </div>
  );
};

export default HomeDashboard;

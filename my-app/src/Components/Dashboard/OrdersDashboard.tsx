import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { ORDERS } from "../../constants/orders-array";
import type { Order } from "../../types/orders Types"; 

import "../Dashboard/css/order.css";

const OrdersDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(ORDERS);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);


  const updateOrderStatus = (id: number, status: string) =>
    setOrders(orders.map(order => (order.id === id ? { ...order, status } : order)));

  const deleteOrder = (id: number) => setOrders(orders.filter(order => order.id !== id));

  return (
    <div className="dashboard">
      <Sidebar isOpen={sidebarOpen}  />
      <section id="content">
        <Navbar toggleSidebar={toggleSidebar} />
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Orders Dashboard</h1>
              <ul className="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><i className='bx bx-chevron-right'></i></li>
                <li><a className="active" href="#">Orders</a></li>
              </ul>
            </div>
          </div>
          <div className="orders-list">
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
                    <td>{order.items.map(item => item.name).join(", ")}</td>
                    <td>${order.total}</td>
                    <td>
                      <select
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
        </main>
      </section>
    </div>
  );
};

export default OrdersDashboard;
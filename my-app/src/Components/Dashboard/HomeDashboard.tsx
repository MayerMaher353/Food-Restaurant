import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"; 
import ProductsList from "./ProductsList";
import GalleryManagement from "../Dashboard/GalleryManagement";
import ReservationAdminPanel from "./resevation";
import AdminContacts from "../Dashboard/AdminContacts";
import { PRODUCTS } from "../../constants/product-array";
import CreateProductForm from "./CreateProductForm";
import type { Product } from "../../types/product";
import "../Dashboard/css/create.css";
import "../Dashboard/css/MyStore.css";
import "../Dashboard/css/style.css";
import "./css/resevation.css";
import "./css/AdminContacts.css";

const HomeDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [visibleCount, setVisibleCount] = useState(12);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const addProduct = (product: Product) => setProducts([product, ...products]);
  const loadMore = () => setVisibleCount(prev => prev + 12);
  const deleteProduct = (id: number) => setProducts(products.filter(p => p.id !== id));
  const updateProduct = (updated: Product) =>
    setProducts(products.map(p => (p.id === updated.id ? updated : p)));

  

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
  <CreateProductForm onAddProduct={addProduct} nextId={products.length + 1} />
        
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

        {/* Orders feature removed */}


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

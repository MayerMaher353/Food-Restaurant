import React, { useState } from "react";
import { PRODUCTS as initialProducts } from "../../constants/product-array";
import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";
import "../Dashboard/css/MyStore.css"; 

const ShopManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const [newProduct, setNewProduct] = useState<Product>({
    id: Date.now(),
    name: "",
    price: 0,
    originalPrice: 0,
    category: "",
    tags: [],
    img: "",
    images: [],
  });

  const handleDelete = (id: number) => setProducts(products.filter(p => p.id !== id));
  const handleUpdate = (updatedProduct: Product) =>
    setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.img) return;
    setProducts([newProduct, ...products]);
    setNewProduct({
      id: Date.now(),
      name: "",
      price: 0,
      originalPrice: 0,
      category: "",
      tags: [],
      img: "",
      images: [],
    });
  };

  const filteredProducts = products.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter ? p.category === categoryFilter : true)
  );

  return (
    <div className="shop-management form-table-container">
      <h2>Shop Management</h2>

      {/* Search & Filter */}
      <div className="form-row">
        <label>Search:</label>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label>Category:</label>
        <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Seafood">Seafood</option>
          <option value="Soup">Soup</option>
          <option value="Salad">Salad</option>
          <option value="Drink">Drink</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {/* Add New Product */}
      <h2>Add New Product</h2>
      <div className="form-row">
        <label>Name:</label>
        <input
          type="text"
          value={newProduct.name}
          onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
        />
      </div>
      <div className="form-row">
        <label>Price:</label>
        <input
          type="number"
          value={newProduct.price}
          onChange={e => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
        />
      </div>
      <div className="form-row">
        <label>Original Price:</label>
        <input
          type="number"
          value={newProduct.originalPrice}
          onChange={e =>
            setNewProduct({ ...newProduct, originalPrice: Number(e.target.value) })
          }
        />
      </div>
      <div className="form-row">
        <label>Category:</label>
        <input
          type="text"
          value={newProduct.category}
          onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
        />
      </div>
      <div className="form-row">
        <label>Tags:</label>
        <input
          type="text"
          value={newProduct.tags.join(", ")}
          onChange={e =>
            setNewProduct({ ...newProduct, tags: e.target.value.split(",").map(t => t.trim()) })
          }
        />
      </div>
      <div className="form-row">
        <label>Image URL:</label>
        <input
          type="text"
          value={newProduct.img}
          onChange={e => setNewProduct({ ...newProduct, img: e.target.value })}
        />
      </div>
      <button className="submit-btn" onClick={handleAddProduct}>
        Add Product
      </button>

      {/* Products Grid */}
      <div className="product-grid" style={{ marginTop: "20px" }}>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopManagement;

import React from "react";
import type { Product } from "../../types/product";
import ProductCard from "./ProductCard";
import "../Dashboard/css/MyStore.css";
import "../Dashboard/css/create.css";
import "../Dashboard/css/style.css";

interface ProductsListProps {
  products: Product[];
  visibleCount: number;
  loadMore: () => void;
  onDelete: (id: number) => void;
  onUpdate: (product: Product) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, visibleCount, loadMore, onDelete, onUpdate }) => (
  <section className="My-Store">
    <h1>Available Products</h1>
    <div className="product-container">
      {products.slice(0, visibleCount).map((p, i) => (
        <ProductCard key={p.id} product={p} index={i} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
    {visibleCount < products.length && (
      <button id="load-more" onClick={loadMore}>Get More</button>
    )}
  </section>
);

export default ProductsList;
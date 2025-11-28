import React, { useState, type ChangeEvent } from "react";
import type { Product } from "../../types/product";
import "../Dashboard/css/MyStore.css";
import "../Dashboard/css/create.css";
import "../Dashboard/css/style.css";

interface ProductCardProps {
  product: Product;
  index: number;
  onDelete: (id: number) => void;
  onUpdate: (updated: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  onDelete,
  onUpdate,
}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const saveChanges = () => {
    onUpdate(editedProduct);
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      {!isEditing ? (
        <>
          <div className="slider">
            <img src={product.img} alt={product.name} />
            {/* إذا عندك أكثر من صورة ممكن هنا تعمل mapping */}
            {/* <button onClick={prevSlide}>&#10094;</button>
            <button onClick={nextSlide}>&#10095;</button> */}
          </div>
          <h3>{product.name}</h3>
          <p>
            <strong>Price:</strong> {product.price} EGP
          </p>
          <p>
            <strong>Original Price:</strong> {product.originalPrice} EGP
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Tags:</strong> {product.tags.join(", ")}
          </p>
          <div className="product-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </div>
        </>
      ) : (
        <div className="edit-form">

  {/* Product Name */}
  <label>Name</label>
  <input
    type="text"
    name="name"
    value={editedProduct.name}
    onChange={handleInputChange}
  />

  {/* Price */}
  <label>Price</label>
  <input
    type="number"
    name="price"
    value={editedProduct.price}
    onChange={handleInputChange}
  />

  {/* Original Price */}
  <label>Original Price</label>
  <input
    type="number"
    name="originalPrice"
    value={editedProduct.originalPrice}
    onChange={handleInputChange}
  />

  {/* Category */}
  <label>Category</label>
  <select
    name="category"
    value={editedProduct.category}
    onChange={handleInputChange}
  >
    <option value="">-- Select Category --</option>
    <option value="Seafood">Seafood</option>
    <option value="Soup">Soup</option>
    <option value="Salad">Salad</option>
    <option value="Drink">Drink</option>
    <option value="Dessert">Dessert</option>
  </select>

  {/* Tags */}
  <label>Tags</label>
  <input
    type="text"
    name="tags"
    value={editedProduct.tags.join(", ")}
    onChange={(e) =>
      setEditedProduct(prev => ({
        ...prev,
        tags: e.target.value.split(",").map(tag => tag.trim())
      }))
    }
    placeholder="tag1, tag2, tag3"
  />

  {/* Change Image */}
  <label>Change Image</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        setEditedProduct(prev => ({
          ...prev,
          img: URL.createObjectURL(file)
        }));
      }
    }}
  />

  {/* Preview */}
  <div className="preview">
    <img
      src={editedProduct.img}
      alt="preview"
      style={{ width: "100px", borderRadius: "8px", marginTop: "10px" }}
    />
  </div>

  <button onClick={saveChanges}>Save</button>
  <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
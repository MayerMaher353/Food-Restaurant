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
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product>({ ...product });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider images
  const images = editedProduct.images && editedProduct.images.length > 0
    ? editedProduct.images
    : [editedProduct.img];

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + images.length) % images.length);

  // Handle form input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({
      ...prev,
      [name]: name === "price" || name === "originalPrice" ? Number(value) : value,
    }));
  };

  // Save edited product
  const saveChanges = () => {
    onUpdate(editedProduct);
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      {!isEditing ? (
        <>
          <div className="slider">
            <img src={images[currentSlide]} alt={editedProduct.name} />
            {images.length > 1 && (
              <>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
              </>
            )}
          </div>
          <h3>{editedProduct.name}</h3>
          <p><strong>Price:</strong> {editedProduct.price} EGP</p>
          <p><strong>Original Price:</strong> {editedProduct.originalPrice} EGP</p>
          <p><strong>Category:</strong> {editedProduct.category}</p>
          <p><strong>Tags:</strong> {editedProduct.tags.join(", ")}</p>
          <div className="product-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(editedProduct.id)}>Delete</button>
          </div>
        </>
      ) : (
        <div className="edit-form">
          {/* Name */}
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
            onChange={e =>
              setEditedProduct(prev => ({
                ...prev,
                tags: e.target.value.split(",").map(tag => tag.trim())
              }))
            }
            placeholder="tag1, tag2, tag3"
          />

          {/* Change Images */}
          <label>Change Image(s)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={e => {
              const files = e.target.files;
              if (files && files.length > 0) {
                const newImages = Array.from(files).map(file => URL.createObjectURL(file));
                setEditedProduct(prev => ({
                  ...prev,
                  images: newImages,
                  img: newImages[0],
                }));
                setCurrentSlide(0);
              }
            }}
          />

          {/* Preview */}
          <div className="preview">
            {editedProduct.images && editedProduct.images.length > 0 ? (
              editedProduct.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`preview-${idx}`}
                  style={{ width: "80px", borderRadius: "8px", marginRight: "5px" }}
                />
              ))
            ) : (
              <img
                src={editedProduct.img}
                alt="preview"
                style={{ width: "80px", borderRadius: "8px", marginRight: "5px" }}
              />
            )}
          </div>

          <button onClick={saveChanges}>Save</button>
          <button onClick={() => {
            setIsEditing(false);
            setEditedProduct({ ...product }); 
          }}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

import React, { useState, type ChangeEvent } from "react";
import type { Product } from "../../types/product";
import "../Dashboard/css/MyStore.css";
import "../Dashboard/css/create.css";
import "../Dashboard/css/style.css";

interface CreateProductFormProps {
  onAddProduct: (product: Product) => void;
  nextId: number;
}

const CreateProductForm: React.FC<CreateProductFormProps> = ({ onAddProduct, nextId }) => {
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setSelectedImages(files);
      setCurrentSlide(0);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % selectedImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;

    const imageUrls = selectedImages.map((file) =>
      URL.createObjectURL(file)
    );

    onAddProduct({
      id: nextId,
      name: newProduct.name!,
      price: Number(newProduct.price),
      originalPrice: Number(newProduct.originalPrice || newProduct.price),
      category: newProduct.category || "General",
      tags: newProduct.tags || [],
      img: imageUrls[0] || "",
      images: imageUrls,    
    });

    setNewProduct({});
    setSelectedImages([]);
    setCurrentSlide(0);
  };

  return (
    <div className="form-table-container">
      <h2>Create Product</h2>

      {/* Category */}
      <div className="form-row">
        <label>Category</label>
        <select
          name="category"
          value={newProduct.category || ""}
          onChange={handleInputChange}
        >
          <option value="">-- Select Category --</option>
          <option value="Seafood">Seafood</option>
          <option value="Soup">Soup</option>
          <option value="Salad">Salad</option>
          <option value="Drink">Drink</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {/* Name */}
      <div className="form-row">
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={newProduct.name || ""}
          onChange={handleInputChange}
          placeholder="Enter product name"
        />
      </div>

      {/* Price */}
      <div className="form-row">
        <label>Product Price</label>
        <input
          type="number"
          name="price"
          value={newProduct.price || ""}
          onChange={handleInputChange}
          placeholder="Enter price"
        />
      </div>

      {/* Original Price */}
      <div className="form-row">
        <label>Original Price</label>
        <input
          type="number"
          name="originalPrice"
          value={newProduct.originalPrice || ""}
          onChange={handleInputChange}
          placeholder="Enter original price"
        />
      </div>

      {/* Tags */}
      <div className="form-row">
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          value={(newProduct.tags as string[])?.join(", ") || ""}
          onChange={(e) =>
            setNewProduct((prev) => ({
              ...prev,
              tags: e.target.value.split(",").map((t) => t.trim()),
            }))
          }
          placeholder="tag1, tag2, tag3"
        />
      </div>

      {/* Images */}
      <div className="form-row">
        <label>Product Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {/* SLIDER PREVIEW */}
      {selectedImages.length > 0 && (
        <div className="form-row">
          <div className="slider slider-special">
            <img
              src={URL.createObjectURL(selectedImages[currentSlide])}
              alt="preview"
            />

            {selectedImages.length > 1 && (
              <>
                <button type="button" className="prev" onClick={prevSlide}>
                  &#10094;
                </button>

                <button type="button" className="next" onClick={nextSlide}>
                  &#10095;
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="form-row">
        <button type="button" className="submit-btn" onClick={addProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default CreateProductForm;

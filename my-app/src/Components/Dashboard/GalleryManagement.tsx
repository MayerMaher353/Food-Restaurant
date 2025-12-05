import React, { useState } from "react";
import "./css/Gallery Management.css";
import shop1 from "../../assets/images/shop img/shop1.jpg";
import shop2 from "../../assets/images/shop img/desert-2.jpg";
import shop3 from "../../assets/images/shop img/soup-4.jpg";

interface GalleryItem {
  id: number;
  title: string;
  images: string[];
}

const initialGallery: GalleryItem[] = [
  { id: 1, title: "Seafood", images: [shop1, shop2] },
  { id: 2, title: "Soup", images: [shop2, shop3] },
];

const GalleryManagement: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery);
  const [newTitle, setNewTitle] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [currentSlide, setCurrentSlide] = useState<Record<number, number>>({});

  const generateId = () => Date.now() + Math.random();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(files);
  };

  const handleAdd = () => {
    if (!newTitle.trim() || selectedFiles.length === 0) {
      alert("Please provide a title and select at least one image.");
      return;
    }
    const newGalleryItem: GalleryItem = {
      id: generateId(),
      title: newTitle,
      images: selectedFiles.map(file => URL.createObjectURL(file)),
    };
    setGallery((prev) => [newGalleryItem, ...prev]);
    setNewTitle("");
    setSelectedFiles([]);
  };

  const handleDelete = (id: number) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));
  };

  const nextSlide = (id: number, imagesLength: number) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + 1) % imagesLength,
    }));
  };

  const prevSlide = (id: number, imagesLength: number) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  return (
    <div className="gallery-management">
      <h2 className="title">Gallery Management</h2>

      {/* Add New Gallery Item */}
      <div className="add-item">
        <h3>Add New Gallery Item</h3>
        <div className="input-group">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          {selectedFiles.length > 0 && (
            <p>{selectedFiles.length} file(s) selected</p>
          )}
        </div>
        <button className="btn-add" onClick={handleAdd}>
          Add Item
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {gallery.map((item) => {
          const currentIndex = currentSlide[item.id] ?? 0;
          const hasMultipleImages = item.images.length > 1;
          return (
            <div key={item.id} className="gallery-card">
              <div className="slider slider-special">
                <img
                  src={item.images[currentIndex]}
                  alt={item.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/path/to/placeholder.jpg";
                  }}
                />
                {hasMultipleImages && (
                  <>
                    <button
                      className="prev"
                      onClick={() => prevSlide(item.id, item.images.length)}
                      aria-label="Previous image"
                    >
                      &#10094;
                    </button>
                    <button
                      className="next"
                      onClick={() => nextSlide(item.id, item.images.length)}
                      aria-label="Next image"
                    >
                      &#10095;
                    </button>
                  </>
                )}
                {hasMultipleImages && (
                  <div className="indicators">
                    {item.images.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() =>
                          setCurrentSlide((prev) => ({
                            ...prev,
                            [item.id]: index,
                          }))
                        }
                      />
                    ))}
                  </div>
                )}
              </div>
              <h3>{item.title}</h3>
              <div className="gallery-actions">
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryManagement;

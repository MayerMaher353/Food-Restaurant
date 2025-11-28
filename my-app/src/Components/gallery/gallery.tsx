import { useState } from "react";
import "./css/gallery.css";
import img1 from "../../assets/images/galley-images/gallery-one.jpg";
import img2 from "../../assets/images/galley-images/gallery-two.jpg";
import img3 from "../../assets/images/galley-images/gallery-three.jpg";
import img4 from "../../assets/images/galley-images/gallery-four.jpg";
import img5 from "../../assets/images/galley-images/gallery-five.jpg";
import img6 from "../../assets/images/galley-images/gallery-six.jpg";
import img7 from "../../assets/images/galley-images/gallery-seven.jpg";
import img8 from "../../assets/images/galley-images/gallery-eight.jpg";
import img9 from "../../assets/images/galley-images/gallery-nine.jpg";
import img10 from "../../assets/images/galley-images/gallery-ten.jpg";
import img11 from "../../assets/images/galley-images/gallery-eleven.jpg";
import img12 from "../../assets/images/galley-images/gallery-twelve.jpg";

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [popup, setPopup] = useState({
    open: false,
    img: "",
    title: "",
  });

  const items = [
    { src: img1, title: "Cooked Fish", category: "dishes" },
    { src: img2, title: "Salmon tomatoes", category: "dishes" },
    { src: img3, title: "Salmon", category: "dishes" },
    { src: img4, title: "Fish Soup", category: "dishes" },
    { src: img5, title: "Crawfish", category: "dishes" },
    { src: img6, title: "Casserole", category: "dishes" },
    { src: img7, title: "Fish Soup", category: "dishes" },
    { src: img8, title: "Fish Burger", category: "dishes" },
    { src: img9, title: "Cola", category: "drinks" },
    { src: img10, title: "Desert", category: "desserts" },
    { src: img11, title: "Bear", category: "drinks" },
    { src: img12, title: "Juices", category: "drinks" },
  ];

  const filtered =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="gallery-page">
      {/* ====== Hero Section ====== */}
      <div className="text-center gallery-txt-center">
        <div className="tst-suptitle tst-suptitle-center tst-mb-15">
          <span>GALLERY</span>
        </div>
        <h3 className="tst-title--h tst-mb-30">Our Best Moments</h3>
        <p className=" tst-title--desc description-gallery">
          <span>
            Porro eveniet, autem ipsam corrupti consectetur cum. <br />
            Repudiandae dignissimos fugiat sit nam.
          </span>
        </p>
      </div>

      {/* ================= Filter Buttons ================= */}
      <div className="gallery-links">
        {["all", "drinks", "dishes", "desserts"].map((btn) => (
          <button
            key={btn}
            data-filter={btn}
            className={filter === btn ? "active" : ""}
            onClick={() => setFilter(btn)}
          >
            {btn.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ===================== Gallery ===================== */}
      <div className="container all">
        <div className="row gallery-image">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-sm-12 gallery-item-wrapper"
              data-category={item.category}
              onClick={() =>
                setPopup({ open: true, img: item.src, title: item.title })
              }
            >
              <div className="overley-one">
                <h5 className="category">{item.category}</h5>
                <h3 className="type">{item.title}</h3>
              </div>
              <img src={item.src} alt={item.title} className="gallery-img" />
            </div>
          ))}
        </div>
      </div>

      {/* =================== POPUP =================== */}
      {popup.open && (
        <div
          id="image-popup"
          className="popup-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setPopup((prev) => ({ ...prev, open: false }));
            }
          }}
        >
          <span
            id="close-popup"
            className="popup-close"
            onClick={() => setPopup((prev) => ({ ...prev, open: false }))}
          >
            &times;
          </span>

          <img id="popup-img" src={popup.img} alt="" className="popup-img" />

          <div id="popup-title" className="popup-title">
            {popup.title}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
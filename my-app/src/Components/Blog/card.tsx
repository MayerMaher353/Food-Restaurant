import React, { useState } from "react";
import "../../Components/blog/css/card.css";
import "../../Components/blog/css/responsive.css";
import img1 from"../../assets/images/blog-card1.webp";
import img2 from "../../assets/images/blog-card2.webp";
import img3 from "../../assets/images/blogcaard3.webp";
import img4 from "../../assets/images/blog-card4.jpg";
import img5 from "../../assets/images/blog-card5.jpg";
import img6 from "../../assets/images/blog-card6.jpg";
import img7 from "../../assets/images/blog-card7.jpg";
import img8 from "../../assets/images/blog-card8.jpg";
import img9 from "../../assets/images/blog-card9.jpg";

const BlogSection = () => {
  const blogs = [
    { id: 1, img: img1, category: "Dinner", title: "Business Breakfast" },
    { id: 2, img: img2, category: "Desserts", title: "Pancakes in Chocolate" },
    { id: 3, img: img3, category: "DINNER", title: "Tuna & Tomatoes" },
    { id: 4, img: img4, category: "DINNER", title: "Creamy Chicken Alfredo" },
    { id: 5, img: img5, category: "SEAFOOD", title: "Air Fryer Salmon" },
    { id: 6, img: img6, category: "DRINKS", title: "Supporting food flavors" },
    { id: 7, img: img7, category: "Desserts", title: "Supporting food flavors" },
    { id: 8, img: img8, category: "Salads", title: "Air Fryer Salmon" },
    { id: 9, img: img9, category: "Dinner", title: "Grilled Chicken" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage === 1 ? 6 : blogs.length;
  const visibleBlogs = blogs.slice(0, endIndex);

  const handlePageClick = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    if (currentPage === 1) setCurrentPage(2);
    else setCurrentPage(1);
  };

  return (
    <section className="blog-section container py-5">
      <div className="text-center">
        <div className="hero  tst-suptitle tst-suptitle-center tst-mb-15">
          <span>Newsletter</span>
        </div>
        <h3 className="tst-title--h tst-mb-30">Latest publications</h3>
        <p className="tst-text tst-title--desc description-blog tst-mb-60">
          Porro eveniet, autem ipsam corrupti consectetur cum. <br />
          Repudiandae dignissimos fugiat sit nam.
        </p>
      </div>

      <div className="row g-4">
        {visibleBlogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <div className="blog-card">
              <img src={blog.img} alt={blog.title} />
              <div className="blog-content">
                <span className="category">{blog.category}</span>
                <h5 className="blog-title">{blog.title}</h5>
                <p className="blog-text">
                  Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis amet temporibus, consequuntur dolorem dicta...
                </p>
                <a href="#" className="read-more">Read More</a>
                <div className="author">
                  <span className="oleksandr"><i className="bi bi-person-circle"></i> OLEKSANDR</span>
                  <span className="text-muted">May 1, 2021</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="links mt-5">
        <div className="link" style={{ display: "inline-block", margin: "0 10px" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(1);
            }}
            className={currentPage === 1 ? "active" : ""}
          >
            1
          </a>
        </div>
        <div className="link" style={{ display: "inline-block", margin: "0 10px" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(2);
            }}
            className={currentPage === 2 ? "active" : ""}
          >
            2
          </a>
        </div>
        <div className="link" style={{ display: "inline-block", margin: "0 10px" }}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNextClick();
            }}
            data-page="next"
          >
            {currentPage === 1 ? "Next" : "Prev"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
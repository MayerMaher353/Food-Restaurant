import React from "react";
import "./css/our history.css";

interface BlogCardProps {
  imgSrc: string;
  category: string;
  title: string;
  text: string;
  author: string;
  date: string;
}

const blogCards: BlogCardProps[] = [
  { imgSrc: "./assets/images/blog-card1.webp", category: "Deserts, Salads", title: "Business Breakfast", text: "Consectetur adipisicing elit...", author: "Oleksandr", date: "May 1, 2021" },
  { imgSrc: "./assets/images/blog-card2.webp", category: "Deserts", title: "Pancakes in Chocolate", text: "Consectetur adipisicing elit...", author: "Oleksandr", date: "May 1, 2021" },
  { imgSrc: "./assets/images/blogcaard3.webp", category: "Deserts", title: "Tuna & Tomatoes", text: "Consectetur adipisicing elit...", author: "Oleksandr", date: "May 1, 2021" },
];

const Blog: React.FC = () => (
  <div className="block blog-block container py-5 container-app">
    <div className="row g-4">
      {blogCards.map((card, idx) => (
        <div key={idx} className="col-md-4">
          <div className="block blog-card-wrapper">
            <div className="blog-card">
              <img src={card.imgSrc} alt={card.title} />
              <div className="blog-content">
                <span className="category">{card.category}</span>
                <h5 className="blog-title">{card.title}</h5>
                <p className="blog-text">{card.text}</p>
                <a href="#" className="read-more">Read More</a>
                <div className="author">
                  <span><i className="bi bi-person-circle"></i> {card.author}</span>
                  <span className="text-muted">{card.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;

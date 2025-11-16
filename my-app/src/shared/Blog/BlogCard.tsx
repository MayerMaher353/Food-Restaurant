
import "../../assets/css/global.css";
import img1 from "../../assets/images/blog-card1.webp";
import img2 from "../../assets/images/blog-card2.webp";
import img3 from "../../assets/images/blogcaard3.webp";
import img4 from "../../assets/images/lazy.jpg";
import "./css/blogcard.css";
export default function BlogSection() {
  const blogs = [
    {
      image: img1,
      category: "Deserts, Salads",
      title: "Business Breakfast",
      text: "Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis amet temporibus...",
      author: "Oleksandr",
      date: "May 1, 2021",
    },
    {
      image: img2,
      category: "Deserts",
      title: "Pancakes in Chocolate",
      text: "Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis amet temporibus...",
      author: "Oleksandr",
      date: "May 1, 2021",
    },
    {
      image: img3,
      category: "Deserts",
      title: "Tuna & Tomatoes",
      text: "Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis amet temporibus...",
      author: "Oleksandr",
      date: "May 1, 2021",
    },
  ];

  return (
    <div>
      {/* Newsletter Section */}
     <div>
  <div className="block newsletter-block text-center app-txt-center">
    <div className="tst-suptitle tst-suptitle-center tst-mb-15">
      <span>Newsletter</span>
    </div>
    <h3 className="tst-title--h tst-mb-30">
      <span>Use the Tips <br />and Recipes of Our Chefs</span>
    </h3>
    <p className="newsletter-text tst-title--desc tst-mb-60">
      <span>
        Porro eveniet, autem ipsam corrupti consectetur cum. <br />
        Repudiandae dignissimos fugiat sit nam.
      </span>
    </p>
  </div>
</div>


      {/* Blog Cards Wrapper */}
      <div className="block blog-block container py-5 container-app">
        <div className="row g-4">
          {blogs.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="block blog-card-wrapper">
                <div className="blog-card">
                  <img src={item.image} alt={item.title} />
                  <div className="blog-content">
                    <span className="category">{item.category}</span>
                    <h5 className="blog-title">{item.title}</h5>
                    <p className="blog-text">{item.text}</p>
                    <a href="/blog" className="read-more">Read More</a>

                    {/* lazy */}
                    <div className="author d-flex align-items-center">
                      <span className="d-flex align-items-center">
                        <img
                          src={img4}
                          alt="Icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginRight: "5px"
                          }}
                        />
                        {item.author}
                      </span>
                      <span className="text-muted ms-3">{item.date}</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Footer */}
        <div className="block blog-footer-block d-flex justify-content-between align-items-center mt-4 flex-wrap">
          <p className="text-muted mb-0">
            Read the news of our restaurant, recipes for delicious fears, tips for
            your home kitchen in our blog!
          </p>
          <a href="/blog" className="tst-btn">All Publications</a>
        </div>
      </div>
    </div>
  );
}

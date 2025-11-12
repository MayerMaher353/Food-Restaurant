
import "./css/pricing.css";
import image from "../../assets/images/about-us/blog-card2.webp";
const pricingHero = () => {
  return (
    <div className="shop-hero">
      <img className="bgImg" src={image} />
      <div className="shop-overlay"></div>
      <div className="container">
        <div className="main-text">
          <h1>PRICING PLANS</h1>
        </div>
      </div>
    </div>
  );
};

export default pricingHero;

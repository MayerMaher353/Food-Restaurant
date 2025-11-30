
import image1 from "../../assets/images/about-us/a4-140x140.png";
import image2 from "../../assets/images/about-us/a3-140x140.png";
import image3 from "../../assets/images/about-us/a2-140x140.png";
import "./css/pricing.css";
const pricingSection = () => {
  return (
       <div className="pricing">
    <div className="pricing-title">
      <p>PRICING</p>
      <h1>Our Pricing Table</h1>
      <p>
        Porro eveniet, autem ipsam corrupti consectetur cum.<br /> Repudiandae
        dignissimos fugiat sit nam.
      </p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="content">
            <img src={image1} />
            <h4>Basic Package</h4>
            <div><span>$</span><span>49</span><span>per day</span></div>
            <p>Menu for every taste</p>
            <p>A Well-Balanced Menu</p>
            <p>Portion Control</p>
            <p className="deleted"><del>Always fresh ingredients</del></p>
            <p className="deleted"><del>Experienced chefs</del></p>
            <a href="/reservation">ORDER NOW</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 special">
          <div className="content">
            <img src={image2} />
            <h4>Popular Package</h4>
            <div><span>$</span><span>79</span><span>per day</span></div>
            <p>Menu for every taste</p>
            <p>A Well-Balanced Menu</p>
            <p>Portion Control</p>
            <p>Always fresh ingredients</p>
            <p className="deleted"><del>Experienced chefs</del></p>
            <a href="/reservation">ORDER NOW</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="content">
            <img src={image3} />
            <h4>Premium Package</h4>
            <div><span>$</span><span>99</span><span>per day</span></div>
            <p>Menu for every taste</p>
            <p>A Well-Balanced Menu</p>
            <p>Portion Control</p>
            <p>Always fresh ingredients</p>
            <p className="deleted"><del>Experienced chefs</del></p>
            <a href="/reservation">ORDER NOW</a>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default pricingSection;
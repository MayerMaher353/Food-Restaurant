import heroImage from "../../assets/images/1343322.png";

import "./css/contact.css";

function Contacthero() {
  return (
    <>
      {/* Note: The main container class 'shop-hero' is kept for CSS consistency */}
      <div className="contact-hero">
        <img className="bgImg" src={heroImage} alt="About Us Background" />
        <div className="shop-overlay"></div>
        <div className="container">
          <div className="main-text">
            <h1>CONTACT</h1>
            <p>Canada, Toronto, North Avenue 31B</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacthero;

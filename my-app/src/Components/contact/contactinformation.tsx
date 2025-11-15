import React from "react";


import emailIcon from "../../assets/images/icon-contact-email-256x256.png";
import phoneIcon from "../../assets/images/icon-contact-tel-256x256.png";
import addressIcon from "../../assets/images/icon-contact-adr-256x256.png";

import "./css/contact.css";

const ContactInfo = () => {
  return (
    <>
      {/* contact information */}
      <div className="text-center my-10 features">
        <h5>GET IN TOUCH</h5>
        <h2>Contact Information</h2>
        <p className="p-features">
          Porro eveniet, autem ipsam vitae consequatur!
        </p>
      </div>

      <div className="row text-center icons-features">
        <div className="col-md-4 mb-4">
          <img src={emailIcon} className="feature-icon" alt="email icon" />
          <h5 className="h5-features">Write Us</h5>
          <p className="p-features">
            info@tastyc.com <br />
            reservation@tastyc.com
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <img src={phoneIcon} className="feature-icon" alt="phone icon" />
          <h5 className="h5-features">Call Us</h5>
          <p className="p-features">
            +76 (094) 754 43 71 <br /> +76 (093) 753 43 72
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <img src={addressIcon} className="feature-icon" alt="address icon" />
          <h5 className="h5-features">Visit Us</h5>
          <p className="p-features">Canada, Toronto, North Avenue 31B</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;

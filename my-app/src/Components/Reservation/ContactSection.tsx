

import "./css/Reservation.css";
function ContactSection() {
  return (
    <section className="contact-section py-5">
      <div className="container text-center">
        <h6 className="contact-subtitle">Have a Questions?</h6>
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur harum expedita.
        </p>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="contact-box">
              <i className="fa-solid fa-envelope-open-text contact-icon"></i>
              <h5>Email</h5>
              <p>info@tastyc.com</p>
              <p>reservation@tastyc.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-box">
              <i className="fa-solid fa-phone-volume contact-icon"></i>
              <h5>Phone</h5>
              <p>+76 (094) 754 43 71</p>
              <p>+76 (093) 753 43 72</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-box">
              <i className="fa-solid fa-map-location-dot contact-icon"></i>
              <h5>Location</h5>
              <p>Canada, Toronto, North Avenue 31B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

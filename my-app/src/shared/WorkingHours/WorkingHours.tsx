import React from "react";
import "./css/WorkingHours.css";
import image from '../../assets/images/hours_bg.jpg';
import "./css/WorkingHoursResponsive.css"
const WorkingHours = () => {
  return (
    <>
      <div className="working-hours">
        <img src={image} alt="" />
        <div className="working-hours-overlay"></div>
        <div className="container">
          <div className="row working-hours-row">
            <div className="working-hours-content col-lg-8 col-md-8 col-sm-12">
              <h6>RESERVATION</h6>
              <h1>WORKING HOURS</h1>
              <p>Roloem, beatae dolorum, praesentium itaque et quam quaerat.</p>
              <div className="working-hours-btn-wrapper">
                <a href="/Reservation" className="booking-table-btn">
                  BOOK A TABLE
                </a>
                <a href="/contact" className="contact-us-btn">
                  CONTACT US
                </a>
              </div>
            </div>
            <div className="working-hours-time col-lg-4 col-md-4 col-sm-12">
              <h6>SUNDAY TO TUESDAY</h6>
              <ul>
                <li>
                  09 <span>:</span> 00
                </li>
                <li>
                  22 <span>:</span> 00
                </li>
              </ul>
              <h6>FRIDAY TO SATURDAY</h6>
              <ul>
                <li>
                  11 <span>:</span> 00
                </li>
                <li>
                  19 <span>:</span> 00
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingHours;

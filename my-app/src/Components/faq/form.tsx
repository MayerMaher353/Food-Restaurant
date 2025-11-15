import React from "react";

import "./css/faq.css";

function form() {
  return (
    <>
      {/* start questions */}
      <section className="question">
        {/* start title */}
        <div className="question-title">
          <p>HAVE A QUESTION?</p>
          <h1>Write Us a Message</h1>
          <p>Porro eveniet, autem ipsam vitae consequatur!</p>
        </div>
        {/* end title */}

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input type="text" placeholder="Phone" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input type="text" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea placeholder="Message" rows="4"></textarea>
            </div>
            <div className="col-12">
              <button type="submit">SEND A MESSAGE</button>
            </div>
          </div>
        </div>
      </section>
      {/* end questions */}
    </>
  );
}

export default form;

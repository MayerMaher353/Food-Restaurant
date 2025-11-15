
import React, { useState } from "react";
import "../OurHistory/css/our history.css";

const ReservationForm: React.FC = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    person: "",
    date: "",
    time: "",
    message: "",
  });

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reservation data:", formData);
    alert("Reservation submitted!");
    
  };

  return (
     <section className="tst-content-frame--start tst-p-60-0">
    <div className="container text-center">
      {/* Section title */}
      <div className="tst-suptitle tst-suptitle-center tst-mb-15">
        <span>Reservation</span>
      </div>
      <h3 className="tst-title--h tst-mb-30">
        <span>Book a Table</span>
      </h3>
      <p className="reservation-text tst-mb-60">
        <span>CALL US +1 777 000 111 OR COMPLETE THE FORM BELOW</span>
      </p>
    </div>


      {/* Reservation form */}
      <div className="reservation-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

        
          <select name="person" value={formData.person} onChange={handleChange} required>
            <option value="">Person</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5 People</option>
            <option value="6">6 or more</option>
          </select>

          
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Time picker */}
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Time</option>
            <option value="12pm">12:00 PM</option>
            <option value="1pm">1:00 PM</option>
            <option value="2pm">2:00 PM</option>
            <option value="3pm">3:00 PM</option>
            <option value="4pm">4:00 PM</option>
            <option value="5pm">5:00 PM</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">RESERVE A TABLE</button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;

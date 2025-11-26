import React, { useState } from "react";
import "../OurHistory/css/our history.css";
import "./css/Reservation.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  person: string;
  date: string;
  time: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    person: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // إزالة الخطأ عند الكتابة
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.person.trim()) newErrors.person = "Select number of persons";
    if (!formData.date.trim()) newErrors.date = "Date is required";
    if (!formData.time.trim()) newErrors.time = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/v1/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Reservation submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          person: "",
          date: "",
          time: "",
          message: "",
        });
        setErrors({});
      } else if (data.errors) {
        setErrors(data.errors);
      } else {
        alert("Failed to submit reservation: " + (data.error || "Unknown error"));
      }
    } catch (err: any) {
      console.error(err);
      alert("Failed to submit reservation. Try again.");
    }
    setLoading(false);
  };

  return (
    <section className="tst-content-frame--start tst-p-60-0">
      <div className="container text-center">
        <h3 className="tst-title--h tst-mb-30">Book a Table</h3>
      </div>

      <div className="reservation-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <select name="person" value={formData.person} onChange={handleChange}>
              <option value="">Person</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 or more</option>
            </select>
            {errors.person && <span className="error">{errors.person}</span>}
          </div>

          <div className="form-group">
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>

          <div className="form-group">
            <select name="time" value={formData.time} onChange={handleChange}>
              <option value="">Time</option>
              <option value="12pm">12:00 PM</option>
              <option value="1pm">1:00 PM</option>
              <option value="2pm">2:00 PM</option>
              <option value="3pm">3:00 PM</option>
              <option value="4pm">4:00 PM</option>
              <option value="5pm">5:00 PM</option>
            </select>
            {errors.time && <span className="error">{errors.time}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "RESERVE A TABLE"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;

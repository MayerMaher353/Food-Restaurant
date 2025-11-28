import React, { useState} from "react";
import type {ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/signUp.css";
import dashboard from "../../pages/dashboard";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  phone?: string;
}

const SignUpComponent: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
      alert("Sign Up Successful!");
      navigate("/signIn");
    }
  };

  return (
    <section className="main-sign-up">
      <div className="sign-up">
        <div className="container">
          <form className="row" onSubmit={handleSubmit} noValidate>
            <div className="col"><h1>Create Account</h1></div>

            <div className="col">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="col">
              <input
                type="email"
                name="email"
                placeholder="Example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="col">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="col">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="col ele">
              <button type="submit" className="sign-up-btn">Sign Up</button>
            </div>

            <div className="col">
              <p>
                Already Have An Account?{" "}
                <Link to="/signIn" className="to-sign-in">Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpComponent;

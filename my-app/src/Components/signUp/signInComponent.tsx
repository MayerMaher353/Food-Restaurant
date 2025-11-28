import React, { useState} from "react";
import type {ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/signUp.css";

interface FormData {
 
  email: string;
  password: string;

}

interface FormErrors {

  email?: string;
  password?: string;
  
}

const SignUpComponent: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    
    email: "",
    password: "",
   
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

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

  

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
      alert("Sign in Successful!");
      navigate("/DashboardAdmin");
    }
  };

  return (
    <section className="main-sign-up">
      <div className="sign-up">
        <div className="container">
          <form className="row" onSubmit={handleSubmit} noValidate>
            <div className="col"><h1>Welcome back</h1></div>

            

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

           

            <div className="col ele">
                 
              <button type="submit" className="sign-up-btn">Sign IN</button>
             
            </div>

           

          
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpComponent;
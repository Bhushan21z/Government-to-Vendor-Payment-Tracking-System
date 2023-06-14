import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link , Outlet} from "react-router-dom";

function GovernmentSignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {  email, password } = formData;
    console.log( email, password); 
    fetch("https://kind-pink-hermit-crab-toga.cyclic.app/add-government/login-government", {
      method: "POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json())
    .then((data) => {
        console.log(data, "governmentRegister");
    })
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="heading">Sign In</h2>
        <div className="form-field">
            <label htmlFor="name">Email</label>
            <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email id"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
            <label htmlFor="name">Password</label>
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <p className="alreadysignin">Register Government Account <Link to="/governmentregister">sign up?</Link></p>
        </form>
        <Outlet />
    </>
  );
}

export default GovernmentSignInForm;

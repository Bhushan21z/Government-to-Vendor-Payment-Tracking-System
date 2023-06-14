import React, { useState } from "react";
import "./RegistrationForm.css";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { Link , Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GovernmentRegistrationForm() {
  const navigate = useNavigate();
  const { currentAccount, connectWallet, formData1, handleChange1, setformData1, RegisterGovernment } = useContext(TransactionContext);
  const generateUpiPin = () => {
    const pin = Math.floor(Math.random() * 900000) + 100000;
    return pin.toString();
  };
 
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    upipin: generateUpiPin(),
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setformData1((prevState) => ({ ...prevState, [name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { address, name, email, upipin, password } = formData;
    console.log(metamask, name, email, upipin, password); 
    console.log(formData1);
    
    fetch("https://kind-pink-hermit-crab-toga.cyclic.app/add-government/register", { 
      method: "POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        address,
        name,
        email,
        upipin,
        password,
      }),
    }).then((res) => res.json())
    .then(async (data) => {
        console.log(data);
        if(data.Status === "ok"){
          await RegisterGovernment();
          alert("Registered Successful!");
          navigate("/central");
        }
    })

  };


  // const handleSubmit = async (e) => {
  //   console.log(formData1);
  //   e.preventDefault();
  //   RegisterGovernment();
  //   //await GovernmentDetails();
  //   //console.log(govDetails);
  //   //sendTransaction();
  // };

  return (
    <>
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className="heading">Registration Form</h2>
      <div className="form-field">
        <label htmlFor="name">Metamask ID</label>
        <input
          type="text"
          id="metamask"
          name="address"
          placeholder="Enter metamask id"
          value={formData.metamask}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="fname"
          name="name"
          placeholder="Enter Gov Name"
          value={formData.fname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="upipin">UPI pin</label>
        <input
          type="text"
          id="upipin"
          name="upipin"
          placeholder="Enter UPI pin"
          value={formData.upipin}
          onChange={handleInputChange}
          required
          disabled
        />
        <p><i>save the UPI pin, you can change it later</i></p>
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
      <button type="submit">Register</button>
      <p className="alreadysignin">Already registered <Link to ="/governmentsignin" >sign in?</Link></p>

    </form>
  <Outlet />
  </>
  );
}

export default GovernmentRegistrationForm;

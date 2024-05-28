import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/physicologo.png";

import "./styles.css";

function Register() {
  const navigate = useNavigate();

  const data = {
    username: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(data);
  const [userToken, setUserToken] = useState(null);

  const handleData = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !user.name ||
      !user.password ||
      !user.email ||
      !user.tcno ||
      !user.diploma
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/doctor/admin/register",
        user
      );
      console.log(response);
      alert("User registered successfully");
      navigate("/");
    } catch (error) {
      alert("ERROR WHILE REGISTERING...");
    }
  };

  return (
    <div className="page">
      <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
        <img className="physicoLogo" src={img1}></img>

        <div className="registerForm register rounded">
          <h2 className="mb-3">Register</h2>
          <form>
            <div className="form-group mb-2">
              <label htmlFor="username" className="form-label">
                Name and Surname
              </label>
              <input
                id="name"
                onChange={handleData}
                type="username"
                className="form-control"
              ></input>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="number" className="form-label">
                Personal Identification Number
              </label>
              <input
                id="tcno"
                onChange={handleData}
                type="number"
                className="form-control"
              ></input>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                onChange={handleData}
                type="email"
                className="form-control"
              ></input>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                onChange={handleData}
                type="password"
                className="form-control"
              ></input>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="image" className="form-label">
                Medical Certificate
              </label>
              <input
                id="diploma"
                onChange={handleData}
                type="file"
                className="form-control"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="btn btn-success mt-2 block w-100"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

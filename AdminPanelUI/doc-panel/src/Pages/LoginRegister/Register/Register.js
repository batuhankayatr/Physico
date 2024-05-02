import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/physicologo.png";

import "./styles.css";

function Register() {
  const navigate = useNavigate();

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
              <input type="username" className="form-control"></input>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="number" className="form-label">
                Personal Identification Number
              </label>
              <input type="number" className="form-control"></input>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="username" className="form-label">
                Name and Surname
              </label>
              <input type="username" className="form-control"></input>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control"></input>
            </div>

            <div className="form-group mb-2">
              <label htmlFor="image" className="form-label">
                Medical Certificate
              </label>
              <input type="file" className="form-control" id="image" />
            </div>

            <button
              onClick={() => navigate("/")}
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

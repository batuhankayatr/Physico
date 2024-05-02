import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../../../assets/physicologo.png";

import "./styles.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
        <img className="physicoLogo" src={img1}></img>

        <div className="loginForm login rounded">
          <h2 className="mb-3">Login</h2>
          <form>
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
            <div className="form-group form-check mb-2">
              <input type="checkbox" className="form-check-input"></input>

              <label htmlFor="checkbox" className="form-check-label">
                Remember Me
              </label>
            </div>

            <div className="form-group  mb-2">
              <p>
                <a onClick={() => navigate("/register")}>
                  Don't have an account?
                </a>
              </p>
            </div>
            <button
              onClick={() => navigate("/adminpanel")}
              className="btn btn-success mt-2 block w-100"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

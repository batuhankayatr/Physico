import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import img1 from "../../../assets/physicologo.png";

import "../Login/login.css";
import { useDispatch } from "react-redux";
import { addUserData } from "../../../Redux/userData";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post("http://localhost:5000/api/doctor/admin/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        if (token) {
          dispatch(
            addUserData({
              id: response.data._id,
              email: response.data.email,
              name: response.data.name,
              pic: response.data.pic,
            })
          );
          localStorage.setItem("token", token);
          setUserToken(token);
          navigate("/choosepatient");
          console.log(token);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Username or password is incorrect.");
        } else {
          console.error(error);
        }
      });
  };

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
                type="password"
                onChange={handleData}
                className="form-control"
              ></input>
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
              onClick={handleSubmit}
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

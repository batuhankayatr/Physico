import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreatePatient() {
  const {userData} = useSelector((state) => state.userData);

  const data = {
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    sex: "",
    doctorId: userData.id,
  };
  const [user, setUser] = useState(data);

  const handleData = (e) => {
    setUser({
      ...user,
      doctorId: userData.id,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/patient/register", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, user);
      });
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100 gradient-bg">
      <div className="row">
        <div
          id="sideBar"
          className="col-4 col-md-2 bg-dark vh-100 position-fixed"
        >
          <Sidebar />
        </div>
        <div className="col-4 col-md-2"></div>
        <div className="col">
          <div className="container">
            <div className="card-body">
              <form>
                <div className="form-group mb-4">
                  <label htmlFor="name">Name</label>
                  <input
                    onChange={handleData}
                    type="text"
                    className="form-control col-md-8"
                    id="name"
                    placeholder="Enter Patient Name"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="age">Age</label>
                  <input
                    onChange={handleData}
                    type="number"
                    className="form-control col-md-8"
                    id="age"
                    placeholder="Enter Patient Age"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={handleData}
                    type="email"
                    className="form-control col-md-8"
                    id="email"
                    placeholder="Enter Patient Email"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={handleData}
                    type="password"
                    className="form-control col-md-8"
                    id="password"
                    placeholder="Create Patient Password"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="weight">Weight (kg)</label>
                  <input
                    onChange={handleData}
                    type="number"
                    className="form-control col-md-8"
                    id="weight"
                    placeholder="Enter Patient Weight"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="height">Height (cm)</label>
                  <input
                    onChange={handleData}
                    type="number"
                    className="form-control col-md-8"
                    id="height"
                    placeholder="Enter Patient Height"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="sex">Sex</label>
                  <select
                    onChange={handleData}
                    className="form-control col-md-8"
                    id="sex"
                  >
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePatient;

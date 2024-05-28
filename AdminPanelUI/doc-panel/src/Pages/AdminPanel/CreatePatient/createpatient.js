import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function CreatePatient() {
  const navigate = useNavigate();

  const data = {
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    sex: "",
  };
  const [user, setUser] = useState(data);

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
      .post("http://localhost:5000/api/patient/register", user)
      .then((response) => {
        console.log(response);
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
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div
          id="sideBar"
          className="col-4 col-md-2 bg-dark vh-100 position-fixed"
        >
          <Sidebar />
        </div>

        <div className="col-4 col-md-2"></div>
        <div className="col">
          <div className="container mt-5 d-flex justify-content-center">
            <div className="card w-75">
              <div className="card-body">
                <form>
                  <div className="form-group mb-4">
                    <label htmlFor="name">Ad</label>
                    <input
                      onChange={handleData}
                      type="text"
                      className="form-control col-md-8"
                      id="name"
                      placeholder="Adınızı giriniz"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="age">Yaş</label>
                    <input
                      onChange={handleData}
                      type="number"
                      className="form-control col-md-8"
                      id="age"
                      placeholder="Yaşınızı giriniz"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={handleData}
                      type="email"
                      className="form-control col-md-8"
                      id="email"
                      placeholder="Email adresinizi giriniz"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password">Parola</label>
                    <input
                      onChange={handleData}
                      type="password"
                      className="form-control col-md-8"
                      id="password"
                      placeholder="Parolanızı giriniz"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="weight">Kilo (kg)</label>
                    <input
                      onChange={handleData}
                      type="number"
                      className="form-control col-md-8"
                      id="weight"
                      placeholder="Kilonuzu giriniz"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="height">Boy (cm)</label>
                    <input
                      onChange={handleData}
                      type="number"
                      className="form-control col-md-8"
                      id="height"
                      placeholder="Boyunuzu giriniz"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="sex">Cinsiyet</label>
                    <select
                      onChange={handleData}
                      className="form-control col-md-8"
                      id="sex"
                    >
                      <option>Erkek</option>
                      <option>Kadın</option>
                    </select>
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePatient;

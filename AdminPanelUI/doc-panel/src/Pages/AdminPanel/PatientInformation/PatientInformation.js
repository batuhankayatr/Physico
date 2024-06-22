import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "../PatientInformation/patientinformation.css";
import { useSelector } from "react-redux";

function PatientInformation() {
  const patient = useSelector((state) => state.CurrentPatient);
  console.log(patient);
  return (
    <div className="container-fluid bg-secondary min-vh-100 gradient-bg">
      <div className="row">
        <div id="sideBar" className="col-4 col-md-2 bg-dark vh-100 position-fixed">
          <Sidebar />
        </div>
        <div className="col-4 col-md-2"></div>
        <div className="col">
          <div>
            <div className="container">
              <div className="row ">
                <div className="col-xl-6 col-lg-6">
                  <div className="card l-bg-blue-dark">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Patient</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            {patient.CurrentPatient.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="card l-bg-cherry">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fas fa-weight"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Weight</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            {patient.CurrentPatient.weight}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="card l-bg-orange-dark">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fas fa-ruler-vertical"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Height</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            {patient.CurrentPatient.height}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="card l-bg-green-dark">
                    <div className="card-statistic-3 p-4">
                      <div className="card-icon card-icon-large">
                        <i className="fas fa-birthday-cake"></i>
                      </div>
                      <div className="mb-4">
                        <h5 className="card-title mb-0">Age</h5>
                      </div>
                      <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                          <h2 className="d-flex align-items-center mb-0">
                            {patient.CurrentPatient.age}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientInformation;

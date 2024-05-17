import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Sidebar/Sidebar";
import "../PatientProgram/patientProgram.css";

function PatientProgram() {
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
          <div className="container mt-4">
            <div className="row">
              <div className="col">
                <div className="content-top">
                  <div class="mt-3">
                    <label class="form-label">Exercise Name</label>
                    <input type="text" class="form-control" asp-for="Title" />
                  </div>

                  <div class="mt-3">
                    <label class="form-label">Exercise Description</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="mt-3">
                    <label class="form-label">Set Information</label>
                    <input type="number" class="form-control" />
                  </div>
                  <div class="mt-3">
                    <label class="form-label">Rep Information</label>
                    <input type="number" class="form-control" />
                  </div>

                  <div class="mt-3">
                    <label class="form-label">Video Link </label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="mt-3">
                    <button type="submit" class="btn btn-primary">
                      Add Exercise
                    </button>
                  </div>
                </div>
                <hr />
                <div className="content-bottom">
                  <div
                    id="existing-exercises"
                    className="card"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-header">Existing Exercises</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Bench Press</li>
                      <li className="list-group-item">Leg Extension</li>
                      <li className="list-group-item">Triceps Pushdown</li>
                    </ul>
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

export default PatientProgram;

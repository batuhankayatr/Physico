import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function PatientProgram() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="left-container">Sol Container</div>
        </div>
        <div className="col-md-6">
          <div className="right-container">
            <div className="card shadow-card">Test</div>
            <div className="card shadow-card">Test1</div>
            <div className="card shadow-card">Test2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProgram;

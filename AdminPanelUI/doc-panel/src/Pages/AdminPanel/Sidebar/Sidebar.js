import React from "react";
import "./styles.css";

function Sidebar() {
  return (
    <>
      <div id="sideBarMain" className="bg-dark sidebar p-2">
        <div className="me-2">
          <i
            className="fas fa-user-md me-3"
            style={{ color: "#abcf97" }}
          ></i>
          <span className="doctorSpan text-light brand-name">
            Doc Panel
          </span>
        </div>
        <hr />
        <div className="optionsDiv">
          <a
            href="/PatientInformation"
            className="list-group-item list-group-item-action mb-3"
          >
            <i className="listIcon bi bi-info-square-fill me-3 fs-6"></i>
            <span className="fs-6">Patient's Information</span>
          </a>
          <a
            href="/PatientProgram"
            className="list-group-item list-group-item-action py-2 mb-3"
          >
            <i className="listIcon bi bi-book-fill me-3"></i>
            <span>Patient's Program</span>
          </a>
          <a
            href="/ChatPatient"
            className="list-group-item list-group-item-action py-2 mb-3"
          >
            <i className="listIcon bi bi-chat-fill me-3"></i>
            <span>Chat with Patient</span>
          </a>
          <a
            href="/ChoosePatient"
            className="list-group-item list-group-item-action py-2 mb-3"
          >
            <i className="listIcon bi bi-person-check-fill me-3"></i>
            <span>Choose Patient</span>
          </a>
          <a
            href="/CreatePatient"
            className="list-group-item list-group-item-action py-2 mb-3"
          >
            <i id="createP" className="listIcon bi bi-plus-circle-fill me-3"></i>
            <span style={{ color: "#DC5F00" }}>Create Patient</span>
          </a>
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;

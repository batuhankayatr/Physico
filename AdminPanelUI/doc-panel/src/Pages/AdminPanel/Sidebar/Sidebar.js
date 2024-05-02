import React from "react";
import "./styles.css";

function Sidebar() {
  return (
    <>
      {" "}
      <div id="sideBarMain" className="bg-dark sidebar p-2">
        <div className="me-2">
          <i
            className="fas fa-user-md fa-lg me-3"
            style={{ color: "#abcf97" }}
          ></i>
          <span className="doctorSpan text-light brand-name fs-4">
            Doctor Panel
          </span>
        </div>
        <hr />
        <div className="optionsDiv">
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 mb-3"
          >
            <i class="listIcon bi bi-info-square-fill me-3"></i>
            <span>Patient Information</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 mb-3"
          >
            <i class="listIcon bi bi-book-fill me-3"></i>
            <span>Patient's Program</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 mb-3"
          >
            <i class="listIcon bi bi-chat-fill me-3"></i>
            <span>Chat with Patient</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

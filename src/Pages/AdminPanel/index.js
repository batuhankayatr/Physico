import React from "react";

import Sidebar from "./Sidebar/Sidebar";

import Home from "./Home/Home";

function AdminPanel() {
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
          <Home />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

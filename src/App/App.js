import React, { useState } from "react";
import Sidebar from "../Pages/AdminPanel/Sidebar/Sidebar";
import Home from "../Pages/AdminPanel/Home/Home";
import Login from "../Pages/LoginRegister/Login/Login";
import Register from "../Pages/LoginRegister/Register/Register";
import AdminPanel from "../Pages/AdminPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

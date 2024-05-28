import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Sidebar from "../Pages/AdminPanel/Sidebar/Sidebar";
import Home from "../Pages/AdminPanel/Home/Home";
import Login from "../Pages/LoginRegister/Login/Login";
import Register from "../Pages/LoginRegister/Register/Register";
import AdminPanel from "../Pages/AdminPanel";
import ChoosePatient from "../Pages/ChoosePatient/ChoosePatient";
import PatientProgram from "../Pages/AdminPanel/PatientProgram/PatientProgram";
import ChatPatient from "../Pages/AdminPanel/ChatPatient/ChatPatient";
import PatientInformation from "../Pages/AdminPanel/PatientInformation/PatientInformation";
import ChatParent from "../Pages/AdminPanel/ChatPatient/chatParent";
import CreatePatient from "../Pages/AdminPanel/CreatePatient/createpatient";
import "./styles.css";
import { store, persistor } from "../Redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chatpatient" element={<ChatPatient />} />
            <Route
              path="/PatientInformation"
              element={<PatientInformation />}
            />
            <Route path="/chatpatient" element={<ChatParent />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/createpatient" element={<CreatePatient />} />
            <Route path="/choosepatient" element={<ChoosePatient />} />
            <Route path="/patientprogram" element={<PatientProgram />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

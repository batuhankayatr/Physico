import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ChoosePatient/style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPatient } from "../../Redux/CurrentPatient";

function ChoosePatient() {
  const { userData } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const doctorId = userData.id;
        console.log(doctorId);
        console.log(userData);

        const response = await axios.get(
          `http://localhost:5000/api/doctor/listPatients/${doctorId}/`
        );
        console.log(response.data);
        setPatients(response.data); // assuming response.data is an array of patients
      } catch (error) {
        console.error(error);
      }
    };

    if (userData.id) {
      fetchPatients();
    }
  }, [userData]);

  const patientsToRender = patients.data ? patients.data : [];

  const navigateToPatientDetails = (patient) => {
    dispatch(
      addCurrentPatient({
        id: patient._id,
        name: patient.name,
        pic: patient.pic,
        age: patient.age,
        weight: patient.weight,
        height: patient.height,
        email: patient.email,
        sex: patient.sex,
      })
    )
    navigate("/patientinformation");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col" className="align-middle">
                Patient's Photo
              </th>
              <th scope="col" className="align-middle">
                Patient Name
              </th>
              <th scope="col" className="align-middle">
                Patient Id
              </th>
              <th scope="col" className="align-middle">
                Go to Patient Details
              </th>
            </tr>
          </thead>
          <tbody>
            {patientsToRender.map((patient, index) => (
              <tr key={index}>
                <td className="align-middle">
                  <img
                    className="patient-photo"
                    src={patient.pic[patient.name] || "defaultPhoto.jpg"}
                    alt={patient.name}
                  />
                </td>
                <td className="align-middle">{patient.name}</td>
                <td className="align-middle">{patient._id}</td>
                <td className="align-middle">
                  <h4>
                    <a
                      onClick={() => navigateToPatientDetails(patient)}
                    >
                      <i className="bi bi-arrow-right-square-fill"></i>
                    </a>
                  </h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChoosePatient;

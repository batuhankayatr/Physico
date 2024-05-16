import React from "react";
import "../ChoosePatient/style.css";
import till from "../../assets/tillLindemann.jpg";
import rob from "../../assets/rob.jpg";
import richard from "../../assets/richard.jpg";

function ChoosePatient() {
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
            <tr>
              <td className="align-middle">
                <img
                  className="patient-photo"
                  src={till}
                  alt="Till Lindemann"
                />
              </td>
              <td className="align-middle">Till Lindemann</td>
              <td className="align-middle">
                a05f2ad0-ef24-4b41-83d9-a43ec8430283
              </td>
              <th scope="col" className="align-middle">
                <h4>
                  <a>
                    <i class="bi bi-arrow-right-square-fill"></i>
                  </a>
                </h4>
              </th>
            </tr>

            <tr>
              <td className="align-middle">
                <img
                  className="patient-photo"
                  src={rob}
                  alt="Robert Trujillo"
                />
              </td>
              <td className="align-middle">Robert Trujillo</td>
              <td className="align-middle">
                1b3c447f-6c82-4291-93e6-a33f00ed9d1c
              </td>
              <th scope="col" className="align-middle">
                <h4>
                  <i class="bi bi-arrow-right-square-fill"></i>
                </h4>
              </th>
            </tr>

            <tr>
              <td className="align-middle">
                <img
                  className="patient-photo"
                  src={richard}
                  alt="Richard Kruspe"
                />
              </td>
              <td className="align-middle">Richard Kruspe</td>
              <td className="align-middle">
                cdc3275b-4725-430c-9d55-33738699d748
              </td>
              <th scope="col" className="align-middle">
                <h4>
                  <i class="bi bi-arrow-right-square-fill"></i>
                </h4>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChoosePatient;

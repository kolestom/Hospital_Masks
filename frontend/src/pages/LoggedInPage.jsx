import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Hospital from "../components/Hospital";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
import "./LoggedInPage.css";

const LoggedInPage = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const [allHospitals, setAllHospitals] = useState([]);
  const [selectedHospitalID, setSelectedHospitalID] = useState(null);
  const [unnecessaryHospitalID, setUnnecessaryHospitalID] = useState();

  console.log(loggedInUser);

  let userHospitals = [];
  for (let hospi of allHospitals) {
    for (let userhospi of loggedInUser.hospitalIds) {
      if (userhospi === hospi.id) {
        userHospitals.push(hospi);
      }
    }
  }
  let newHospitals = allHospitals.filter(
    (hospi) => !loggedInUser.hospitalIds.includes(hospi.id)
  );

  const addNewHospital = async (e) => {
    console.log(selectedHospitalID);
    if (selectedHospitalID) {
      const response = await axios.put(
        "http://localhost:7777/api/users/update",
        {
          hospitalId: selectedHospitalID,
          username: loggedInUser.username,
        }
      );
      console.log(response.data);
      setLoggedInUser(response.data[0]);
    }
  };

  const removeHospital = async () => {
    console.log(unnecessaryHospitalID);
    if (unnecessaryHospitalID) {
      const response = await axios.put(
        "http://localhost:7777/api/users/update_remove",
        {
          hospitalId: unnecessaryHospitalID,
          username: loggedInUser.username,
        }
      );
      setLoggedInUser(response.data[0]);
    }
  };

  useEffect(() => {
    const getHospitals = async () => {
      const response = await axios.get(
        "http://localhost:7777/api/orders/allhospitals"
      );
      setAllHospitals(response.data);
    };
    getHospitals();
  }, []);

  return (
    <div id="loggedinpage">
      <h1>Available hospitals</h1>

      <div id="addnewhospital">
        <select
          onChange={(e) => {
            setSelectedHospitalID(
              e.target.value === "Choose a new hospital!"
                ? null
                : e.target.value
            );
          }}
        >
          <option value={null}>Choose a new hospital!</option>
          {newHospitals.map((hospital) => (
            <option key={hospital.id} value={hospital.id}>
              {hospital.name}
            </option>
          ))}
        </select>
        <button onClick={addNewHospital}>Add new hospital</button>
      </div>

      <div id="removehospital">
        <select
          onChange={(e) => {
            console.log(e.target.value);
            setUnnecessaryHospitalID(
              e.target.value === "Choose a hospital!" ? null : e.target.value
            );
          }}
        >
          <option value={null}>Choose a hospital!</option>
          {userHospitals.map((hospital) => (
            <option key={hospital.id} value={hospital.id}>
              {hospital.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            removeHospital();
          }}
        >
          Remove a hospital
        </button>
      </div>
      <div id="hospital-wrapper">
        {userHospitals.length === 0 && (
          <p>There is no available hospital yet...</p>
        )}
        {userHospitals &&
          userHospitals.map((hospi) => (
            <Hospital key={hospi.id} hospital={hospi} />
          ))}
      </div>
    </div>
  );
};

export default LoggedInPage;

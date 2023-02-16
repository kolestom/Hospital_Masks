import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import Hospital from "../components/Hospital"
import axios from "axios"
import { useContext } from "react"
import AuthContext from "../AuthContext"
import { Link } from "react-router-dom"
import "./LoggedInPage.css";

const LoggedInPage = () => {

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext)
  const [ allHospitals, setAllHospitals] = useState([])
  const [selectedHospitalID,setSelectedHospitalID] = useState(null)



  console.log(loggedInUser);

  let usersHospitals = []
  for (let hospi of allHospitals ) {
    for (let userhospi of loggedInUser.hospitalIds) {
      if (userhospi === hospi.id) {
        usersHospitals.push(hospi)
      }
    }
  }
  let newHospitals = allHospitals.filter(hospi=>!loggedInUser.hospitalIds.includes(hospi.id))
  

  const addNewHospital = async (e) => {
    console.log(selectedHospitalID)
    if (selectedHospitalID) {
      const response = await axios.put('http://localhost:7777/api/users/update', {
        hospitalId: selectedHospitalID, username: loggedInUser.username 
      })
      console.log(response.data)
      setLoggedInUser(response.data[0])
    }
  }

  useEffect(() => {
    const getHospitals = async () => {
      const response = await axios.get("http://localhost:7777/api/orders/allhospitals")
      setAllHospitals(response.data)
    }
    getHospitals()
  }, [])


  // if (!authenticated) {
  //   return <Navigate replace to="/" />
  // } else {
    return (
      <div id="loggedinpage">
        <div id="hospital-wrapper">
          {usersHospitals && usersHospitals.map(hospi => <Hospital key={hospi.id} hospital={hospi}/>)}
        </div>
        <div id="addnewhospital">
          <select onChange={e=>setSelectedHospitalID(e.target.value==="Choose a new hospital!" ? null : e.target.value)}>
            <option value={null}>Choose a new hospital!</option>
            {newHospitals.map(hospital=><option key={hospital.id} value={hospital.id}>{hospital.name}</option>)}
          </select>
          <button onClick={addNewHospital}>Add new hospital</button>
        </div>
      </div>
    )
  }

  
// }
export default LoggedInPage
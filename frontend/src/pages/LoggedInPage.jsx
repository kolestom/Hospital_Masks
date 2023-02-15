import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import Hospital from "../components/Hospital"
import axios from "axios"
import { useContext } from "react"
import AuthContext from "../AuthContext"
import { Link } from "react-router-dom"


//kell ide hospitals es post response.data.hospitalIds

const LoggedInPage = () => {

  const { loggedInUser } = useContext(AuthContext)

  const [ allHospitals, setAllHospitals] = useState([])

  console.log(loggedInUser);

  let usersHospitals = []
  for (let hospi of allHospitals ) {
    for (let userhospi of loggedInUser.hospitalIds) {
      if (userhospi === hospi.id) {
        usersHospitals.push(hospi)
      }
    }
  }

  useEffect(() => {
    const getHospitals = async () => {
      const response = await axios.get("http://localhost:7777/api/orders/allhospitals")
      setAllHospitals(response.data)
    }
    getHospitals()
  }, [])

  console.log(allHospitals);


  // if (!authenticated) {
  //   return <Navigate replace to="/" />
  // } else {
    return (
      <>
      {usersHospitals && usersHospitals.map(hospi => <Hospital key={hospi.id} hospital={hospi}/>)}
      
      </>
    )
  }

  
// }
export default LoggedInPage
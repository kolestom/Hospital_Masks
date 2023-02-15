import { useState } from "react"
import { Navigate } from "react-router-dom"
import Hospital from "../components/Hospital"


//kell ide hospitals es post response.data.hospitalIds

const LoggedInPage = () => {


  const [ allHospitals, setAllHospitals] = useState([])

  // if (!authenticated) {
  //   return <Navigate replace to="/" />
  // } else {
    return (
      <>
      <h1>harcsa</h1>
      </>
    )
  }

  
// }
export default LoggedInPage
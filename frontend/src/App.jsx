import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Outlet, Router , RouterProvider , useRouteLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  
  
  const [ loggedInUser, setLoggedInUser] = useState({name: "Joozsi", age:35})
  const [ allHospitals, setAllHospitals] = useState([])

  console.log(loggedInUser)
  
  return (
    <>
    <div className="App">
      <nav>
        <div>
          <Link to="registration" >Registration</Link>
        </div>
        <div>
          <Link to="login">Login</Link>
          <button>Sign Out</button>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default App

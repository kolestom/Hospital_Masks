import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { Outlet, Router , RouterProvider , useRouteLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AuthProvider } from './AuthContext'

function App() {
  
  
   
  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App

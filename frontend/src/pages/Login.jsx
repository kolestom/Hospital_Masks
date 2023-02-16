import { useState, useContext } from "react";
import axios from 'axios'
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext"
import "./Login.css";


const Login = () => {
  
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  // const loggedInUser = location.state.loggedInUser

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false)
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:7777/api/users/login", { 
        username, 
        password 
      });

      setUsername("")
      setPassword("")
      console.log(response);
      if (response.status === 200) {
        console.log("bejott");
        setLoggedInUser(response.data)
        setAuthenticated(true)
        navigate("/loggedin")
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  console.log(loggedInUser)
  console.log(authenticated);

  return (
    <div id="login-page">
    <form id="login-form" onSubmit={handleSubmit}>
      <div id="label">
      <label htmlFor="">Log In</label>
      </div>
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button type="submit">Login</button>
    </form>
    </div>
  )
}
export default Login;
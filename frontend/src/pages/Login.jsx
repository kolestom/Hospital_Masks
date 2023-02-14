import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:7777/api/login", { 
        username, 
        password 
      });
      setUsername("")
      setPassword("")
      console.log(response.data);
      <Link></Link>
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>

    </>
  )
}
export default Login;
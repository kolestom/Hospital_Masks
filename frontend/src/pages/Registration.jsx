import { useState, useEffect  } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [registrationButton, setRegistrationButton] = useState(true)
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const validateUserData = () => {
    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) && username && password && name) {
      setRegistrationButton(false)
    } else {
      setRegistrationButton(true)
    }
  }

  useEffect(() => {
    validateUserData()
  }, [email, username, password, name])

  const registrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7777/api/users/register", {
        username,
        name,
        email,
        password
      });
      setName("")
      setUsername("")
      setEmail("")
      setPassword("")
      alert(`${response.data} You can log in now.`)
      navigate('/login')

    } catch (err) {
      alert("Username already exists!")
    }
  };

  return (
    <div id="registration-page">
      <div id="registration-wrapper">
      <h2>Registration</h2>
      <p>name: </p>
      <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>username: </p>
      <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <p>email: </p>
      <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <p>password: </p>
      <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} /><br/>
      <button disabled={registrationButton} onClick={registrationSubmit}>Registration</button>
      </div>
    </div>
  )
}
export default Registration
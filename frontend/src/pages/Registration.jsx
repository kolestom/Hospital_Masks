import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

const Registration = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [registrationButton, setRegistrationButton] = useState(true)
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const addName = (e) => {
    setName(e.target.value)
  }

  const addUserName = (e) => {
    setUsername(e.target.value)
  }
  console.log(username);

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

  const addEmail = (e) => {
    setEmail(e.target.value)
  }

  console.log(email);

  const addPassword = (e) => {
    setPassword(e.target.value)
  }

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
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
    <p>name: </p>
    <input type="text" placeholder="Name" value={name} onChange={addName}/>
    <p>username: </p>
    <input type="text" placeholder="Username" value={username} onChange={addUserName}/>
    <p>email: </p>
    <input type="email" placeholder="Email" value={email} onChange={addEmail}/>
    <p>password: </p>
    <input type="password" placeholder="Password" value={password} onChange={addPassword} />
    <button disabled={registrationButton} onClick={registrationSubmit}>Registration</button>
    </>
  )
}
export default Registration
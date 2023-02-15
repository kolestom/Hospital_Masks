import { useState } from "react";
import { createContext } from "react";
const AuthContext = createContext()

export function AuthProvider ({children}) {

  const [ loggedInUser, setLoggedInUser] = useState([])

 
  console.log(loggedInUser)

  return (
    <AuthContext.Provider value={{loggedInUser, setLoggedInUser}}>
      {children}
    </AuthContext.Provider>
  )

}



export default AuthContext;
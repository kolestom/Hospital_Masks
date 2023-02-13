import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const handleClick = async () => {
    const resp = await axios.get('http://localhost:7777')
    console.log(resp.data)
  }


  return (
    <div className="App">
      <button onClick={handleClick}>Birizga</button>
    </div>
  )
}

export default App

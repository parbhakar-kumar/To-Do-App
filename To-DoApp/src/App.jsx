import { useState } from 'react'
import React from 'react'
import './App.css'
import RegistrationForm from './component/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <RegistrationForm/>
  )
}

export default App

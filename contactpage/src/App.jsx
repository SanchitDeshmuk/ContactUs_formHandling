import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navigationbar/Navbar'
import Contactheader from './components/contactheader/Contactheader'
import Contactfrom from './components/contactform/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Contactheader/>
     <Contactfrom/>
    </>
  )
}

export default App

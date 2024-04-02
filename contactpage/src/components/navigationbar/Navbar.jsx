import React from 'react'
import style from './navbarstyle.module.css'

function Navbar() {
  return (
    <>
    <nav>
    <img src="/images/logo.png" alt="" />  
      <div className={`${style.box}`}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </nav>
    </>
  )
}

export default Navbar
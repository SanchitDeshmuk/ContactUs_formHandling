import React from 'react'
import style from './button.module.css'
import { MdMessage } from "react-icons/md";

function Button({icon,text,...rest}) {
  return (
    <>
    
    <button className={`${style.btn}`} {...rest}>
    {icon}
    <h3>{text}</h3>
    </button>

    </>
  )
}

export default Button
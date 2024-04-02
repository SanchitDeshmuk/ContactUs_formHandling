import React, { useState } from 'react'
import style from './contactformStyle.module.css'
import Button from '../button/Button'
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

function Contactfrom() {

  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [text,settext] = useState("")

  const onSubmit = (e)=>{
    e.preventDefault()
    setname(e.target[0].value)
    setemail(e.target[1].value)
    settext(e.target[2].value)
  }

  return (
    <>
    <div className={`${style.container}`}>

      <div className="box_1">
        <div className={`${style.box_1_a}`}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
        <Button text="VIA CALL" icon= {<IoCallOutline />} />
        </div>

        <div className={`${style.emailbtn}`}>
        <MdOutlineMessage/>
        <h3>VIA EMAIL FORM</h3>
        </div>

        <form onSubmit={onSubmit}>
          <div className={`${style.formContainer}`}>
          <label htmlFor="name">Name</label>
          <input type="text" name='name'/>
          </div>

          <div className={`${style.formContainer}`}>
          <label htmlFor="email">Email</label>
          <input type="text" name='email'/>
          </div>

          <div className={`${style.formContainer}`}>
          <label htmlFor="text">Text</label>
          <textarea className={`${style.textareacontainer}`} name="text" cols="30" rows="10" />
          </div>

          <div className={`${style.submitbuttonstyle}`}>
          <Button text="SUBMIT"/>
          </div>
          
        </form>

        <div>{name + " " + email +" " + text} </div>

      </div>

      <div className="box_2">
        <img src="/images/service.png" alt="Service_image" />
      </div>

    </div>

    </>
  )
}

export default Contactfrom
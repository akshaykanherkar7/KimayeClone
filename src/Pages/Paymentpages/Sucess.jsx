import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Styles from "./Checkout.module.css"
const Sucess = () => {
  const [contact,SetContact]=useState([])
  useEffect(()=>{
    const contacts=JSON.parse(localStorage.getItem("form"))
SetContact(contacts)
  },[])
    return (
    <div className={Styles.body}>
           <div className={Styles.recpCont}>
            <div className={Styles.recpCont1}>
                    <div className={Styles.recComplete}>
                    <i class="fas fa-check-circle fa-5x"></i>
                    </div>
                    <h1 style={{fontSize:"30px",marginBottom:"10px"}}>Order Confirm!!!</h1>
                   <h2 style={{fontSize:"20px",marginBottom:"15px"}}><span>Name:-</span> {contact.fristname+" "+contact.lastname}</h2>
                    {/* <h2 className={Styles.amount}></h2> */}
            </div>
            <button className={Styles.btn}>Go TO Home</button>
           
           </div>
    </div>
  )
}

export default Sucess
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Styles from "./Checkout.module.css"

const Sucess = () => {
  const navigate=useNavigate();
  const [contact,SetContact]=useState([])
  useEffect(()=>{
    const contacts=JSON.parse(localStorage.getItem("firstname"))
    const contacts1=JSON.parse(localStorage.getItem("lastname"))
    let Name = contacts+" "+contacts1; 
SetContact(Name)
  },[])
    return (
    <div className={Styles.body}>
           <div className={Styles.recpCont}>
            <div className={Styles.recpCont1}>
                    <div className={Styles.recComplete}>
                    <i class="fas fa-check-circle fa-5x"></i>
                    </div>
                    <h1 style={{fontSize:"30px",marginBottom:"10px"}}>Order Confirm!!!</h1>
                   <h2 style={{fontSize:"20px",marginBottom:"15px",color:"black"}}><span>Name:-</span> {contact}</h2>
                   <p style={{marginTop:"-10px" ,marginBottom:"10px",fontSize:"20px",color:"black"}}>Order No:-11061998</p>
                    {/* <h2 className={Styles.amount}></h2> */}
            </div>
            
            <button className={Styles.btn} onClick={()=>navigate("/")}>Go TO Home</button>
           
           </div>
    </div>
  )
}

export default Sucess
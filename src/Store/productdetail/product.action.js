import React from 'react'
import { GET_PRODUCT,Sendtocart} from './product.action.type'
import axios from "axios"

export const get_product = (creds)=>(dispatch)=>{
  axios.get(`http://localhost:8080/${creds.categeory}`)
  .then((r)=>{
    let a = r.data.filter((b)=>b.title===creds.title)
    // console.log("its",a)
    dispatch({type:GET_PRODUCT,payload:a[0]})})
}

export const cartdelivery = (cart)=>(dispatch)=>{
  dispatch({type:Sendtocart,payload:cart})
}
import React from 'react'
import { Cartdata, CountDec, CountInc, Getarray, GET_PRODUCT,Sendtocart,Countupdate} from './product.action.type'
import axios from "axios"

export const get_product = (creds)=>(dispatch)=>{
  
  axios.get(`http://localhost:8080/${creds.categeory}`)
    .then((r)=>{
      console.log("r.data",r.data)
      let a = r.data.filter((b)=>b.title===creds.title)
      // console.log("its",a)
      dispatch({type:GET_PRODUCT,payload:a[0]})})
  
  
}

export const countinc = ()=>(dispatch)=>{
  dispatch({type:CountInc})
}
export const countdec = ()=>(dispatch)=>{
  dispatch({type:CountDec})
}

export const cartdelivery = (cart)=>(dispatch)=>{
  dispatch({type:Sendtocart,payload:cart})
}
export const getarray=(creds)=>(dispatch)=>{
  axios.get(`http://localhost:8080/${creds.categeory}`)
    .then((r)=>{
      
      // console.log("its",a)
      dispatch({type:Getarray,payload:r.data})})
}

export const cartdata = (item)=>(dispatch)=>{
  console.log(item)
  dispatch({type:Cartdata,payload:item})
}
export const countupdate = (c)=>(dispatch)=>{
  dispatch({type:Countupdate,payload:c})

}
import React from 'react'
import { GET_PRODUCT } from './product.action.type'

export const get_product = (creds)=>(dispatch)=>{
  axios.get(`http://localhost:8080/allfruits?product-title=${creds}`).then((r)=>(dispatch({type:GET_PRODUCT,payload:r.data})))
}
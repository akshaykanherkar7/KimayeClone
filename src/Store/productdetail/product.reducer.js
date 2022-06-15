import React from 'react'
import { GET_PRODUCT } from './product.action.type';
let initalstate= {
  data:{}
}
export const productreducer = (state=initalstate,{type,payload})=>{
  switch(type)
  {
    case GET_PRODUCT:{
      return {...state,data:{...state.data,payload}}
    }
    default:{
      return state;
    }
  }
}
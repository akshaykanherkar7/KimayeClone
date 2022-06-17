import React from 'react'
import { cartdata, countinc } from './product.action';
import { Cartdata, CountDec, CountInc, Countupdate, Getarray, GET_PRODUCT, MoneyInc, Sendtocart } from './product.action.type';
let initalstate= {
  data:{},
  count:1,
  array:[],
  Cartdata:[],
  Countupdate:[],
  
}
export const productreducer = (state=initalstate,{type,payload})=>{
  switch(type)
  {
    case GET_PRODUCT:{
      return {...state,data:payload}
    }
    case CountInc:{
      let a = state.count;
      return {...state,count:a+1}

    }
    case CountDec:{
      return {...state,count:state.count-1}
    }
    case Getarray:{
      return {...state,array:payload}
    }
    case Cartdata:{
      return {...state,Cartdata:[...state.Cartdata,payload]}
    }
    case Countupdate:{
      return {...state,Countupdate:[...state.Countupdate,payload]}
    }
    case Sendtocart:{
      localStorage.setItem("cartitem",JSON.stringify(payload))
    }
    default:{
      return state;
    }
  }
}
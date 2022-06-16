import React from 'react'
import { countinc } from './product.action';
import { CountDec, CountInc, GET_PRODUCT, MoneyInc } from './product.action.type';
let initalstate= {
  data:{},
  count:0,
  
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
    default:{
      return state;
    }
  }
}
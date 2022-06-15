import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import { get_product } from '../../Store/productdetail/product.action';

export const productdetail = () => {
  let dispatch = useDispatch();
  let {data} = useSelector((state)=>state.product);
  let id =1;

  useEffect(()=>{
    dispatch (get_product(id))

  },[])



  
  return (
    <div>productdetail</div>
  )
}

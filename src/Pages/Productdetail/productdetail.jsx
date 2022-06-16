import { color } from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import { countdec, countinc, get_product } from '../../Store/productdetail/product.action';
import styles from "./style.module.css"

export const Productdetail = () => {
  let dispatch = useDispatch();
  let {data} = useSelector((state)=>state.product);
  let {count} = useSelector((state)=>state.product)
  let producttitle = "Kimaye Litchi-Kesar Combo";
  let categeory = "fruitcombos";
  let mm = useRef();
  let getcred = {
    categeory:categeory,
    title:producttitle,
  }
 
  useEffect(()=>{
    dispatch (get_product(getcred))
    
    
    

  },[])
  let fivestar = ()=>{
  
    if(data.title==undefined)
    {
      console.log(1);
       mm.current = Math.floor(Math.random(0,5)*5)+1;
       
      
    }
    let arr = [];
      // console.log(m);
      for(let i=0;i<mm.current;i++)
      {
        arr.push(<p><i class="fa-solid fa-star"></i></p>)
      }
      return arr;
    
  }
  let item=()=>{
   
    if(data.title!==undefined)
    {
      let abc = data.title.split(" ")
      console.log(abc);
      abc.shift();
      abc.pop();
      return abc
    

    }
    
  }
  let handleclick =(a)=>{
    if(a=="inc")
    {
      dispatch(countinc())
    }
    else{
      if(count!=0) dispatch(countdec())
    }
  }
  // item();

  
 

// console.log(data);

  
  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.upper1}>
          <img src={data.image} />
        </div>
        <div className={styles.upper2}>
          <h1 >{data.title}</h1>
          <div style={{display:"flex",color:"gold"}}>
            {/* <p><i class="fa-solid fa-star"></i></p> */}
            {fivestar()}
          </div>
          <h3></h3>
          <p className={styles.dis}>
            This Item Contains
          </p>
          <li style={{marginTop:"20px"}}>{item()}</li>
          <h2 style={{marginTop:"20px"}}><i class="fa-solid fa-indian-rupee-sign"></i> {data.price}</h2>
          <div style={{display:"flex",gap:"20px"}}>
            <div style={{display:"flex",gap:"10px"}}>
              <button className={styles.btncash} onClick={()=>handleclick("inc")} >+</button>
              {count}
              <button className={styles.btncash} onClick={()=>handleclick("dec")} >-</button>
            </div>
            <button style={{border:"1px solid grey",borderRadius:"5px",width:"80px",height:"35px"}}>Add to cart</button>
          </div>
        </div>

      </div>
      <div className={styles.rot}>
        <div className={styles.angle}><i class="fa-solid fa-angle-left"></i></div>
        <div className={styles.notangle}></div>
        <div className={styles.notangle}></div>
        <div className={styles.notangle}></div>
        <div className={styles.angle1}><i class="fa-solid fa-angle-right"></i></div>
      </div>
      
    </div>
  )
}

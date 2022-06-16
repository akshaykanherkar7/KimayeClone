import { color } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import { get_product } from '../../Store/productdetail/product.action';
import styles from "./style.module.css"

export const Productdetail = () => {
  let dispatch = useDispatch();
  let {data} = useSelector((state)=>state.product);
  let producttitle = "Kimaye Litchi-Kesar Combo";
  let categeory = "fruitcombos";
  let getcred = {
    categeory:categeory,
    title:producttitle,
  }

  useEffect(()=>{
    dispatch (get_product(getcred))

  },[])
  let fivestar = ()=>{
    let m = Math.floor(Math.random(0,5)*5)+1
    let arr = [];
    // console.log(m);
    for(let i=0;i<m;i++)
    {
      arr.push(<p><i class="fa-solid fa-star"></i></p>)
    }
    return arr;
  }
 

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
        </div>

      </div>
      
    </div>
  )
}

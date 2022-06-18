import { color } from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import { cartdata, cartdelivery, countdec, countinc, countupdate, getarray, get_product } from '../../Store/productdetail/product.action';
import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button
} from '@chakra-ui/react'

const Productdetail = () => {
  let dispatch = useDispatch();
  let {data} = useSelector((state)=>state.product);
  let {count} = useSelector((state)=>state.product)
  let producttitle = "Kimaye Litchi-Kesar Combo";
  let {array} = useSelector((state)=>state.product);
  let {Cartdata} = useSelector((state)=>state.product);
  let [arrshow,setArrshow] = useState([])
  let categeory = "fruitcombos";
  let {Countupdate} = useSelector((state)=>state.product)
  let mm = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  let getcred = {
    categeory:categeory,
    title:producttitle,
  }
 
  useEffect(()=>{
    dispatch (get_product(getcred))
    dispatch(getarray(getcred));
    
    
    
    

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
      if(count!=1) dispatch(countdec())
    }
  }
  
  let handlecart = ()=>{
    if(data!=undefined)
    {
      console.log("data",data)
      dispatch(cartdata(data));
      dispatch(countupdate(count))
    }
    
    onOpen();
  }
  let sendtokart=()=>{
    let a = {data:Cartdata,number:Countupdate}
    dispatch(cartdelivery(a))
  }
  
  
  
  // if(array==undefined)
  // {
  //   let ar=[]
  //   for(let i=0;i<3;i++)
  //   {
  //     ar.push(array[i])
  //   }
  //   setArrshow(ar);
  // }
    
  
  // item();
 

// console.log(data);
console.log(Cartdata,"cartdata")

  
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
            <button style={{border:"1px solid grey",borderRadius:"5px",width:"80px",height:"35px"}} ref={btnRef} colorScheme='teal' onClick={handlecart} >Add to cart</button>
          </div>
        </div>
        <>
        
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Cart Details</DrawerHeader>
  
            <DrawerBody>
              {Cartdata.map((l,index)=>(
                <div style={{marginTop:"10px"}}>
                  <div style={{display:"flex",gap:"10px"}}>
                 <img src={l.image} alt="" style={{width:"80px",height:"50px"}} />
                 <h3>{Number(l.price)*Number(Countupdate[index])}</h3>

                  </div>
                </div>
              ))}
              <Link to="/Checkout1"> <button style={{width:"150px",height:"30px",border:"1px solid red",marginTop:"20px"}} onClick={sendtokart} >Checkout</button></Link>
             
              
              
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>

      </div>
      <div className={styles.rot}>
        <div className={styles.angle}><i class="fa-solid fa-angle-left"></i></div>
        <div style={{display:"flex"}}>
          {arrshow.map((l)=>{
            <div className={styles.notangle}>
              {l}
            </div>
          })}
        </div>
        
        <div className={styles.angle1}><i class="fa-solid fa-angle-right"></i></div>
      </div>
      
    </div>
  )
}

export default Productdetail

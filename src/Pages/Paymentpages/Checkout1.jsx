import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Styles from "./Checkout.module.css"

const Checkout1 = () => {
  const [form,setForm]=useState({
    fristname:"",
    lastname:"",
    Address:"",
    city:"",
    state:"",
    pincode:"",
    number:"",
  })

  const [cart,setCart]=useState([])
  
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    
    
  }
const handleonclick=(e)=>{

  let {name,value}=e.target

  setForm({
    ...form,
    [name]:value,
  })
}
const handlebtn=(form)=>{

  
  localStorage.setItem("form",JSON.stringify(form));
}
useEffect(()=>{
  
  const carts=JSON.parse(localStorage.getItem("cartitem"))
setCart(carts)

},[setCart])




if(cart.data!==undefined)
{
var x=0;
var y=0;
for(let i=0;i<cart.data.length;i++)
{
  
  x=x+cart.number[i]*cart.data[i].price
 
}

}
if(x>=500)
{
  y=y+x;
}
else{
  y=y+x+40
}


 return (
    <div className={Styles.main}>
  <div className={Styles.box1}>
      <div>
       <img
           width="240px"
            height="60px"
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo.png?14577"
            alt="kimaye"
          />
          
          {/* <h2>Cart > information > Shipping > payment</h2> */}
          <div>
            {/* {account information } */}
          </div>
          <br />
          <h1 style={{fontSize:"20px"}}>Contact information</h1>
      <form  onSubmit={handlesubmit}>
           <h1 style={{fontSize:"20px"}}>Shipping address</h1>
               <br />
                <div id="upbox">
                    <div>
                        <h4>Frist Name</h4>
                      
                        <input type="text" name="fristname" placeholder="   Enter Frist Name" onChange={handleonclick}/>
                    </div>
                    <br />
                    <div>
                        <h4>Last Name</h4>
                     
                        <input type="text" name="lastname" placeholder="   Enter Last Name" onChange={handleonclick} />
                    </div>
                 </div>
                 <br />
         <div >
            <h4>Address</h4>
            <input type="text" name="Address" placeholder='    Enter Address..' onChange={handleonclick}/>
        </div>
       <br />
        <div >
           <div>
               <h4>City</h4>
               <input type="text" name="city" placeholder='    Enter City name' onChange={handleonclick}/>
           </div>
           <br />
        <div>
            <h4>State</h4>
            <select name="state"  onChange={handleonclick}>
                <option value="">select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Goa">Goa</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Manipur">Manipur</option>
                <option value="Nagaland">Nagaland</option>
            </select>
             </div>
             <div >
                <br />
                <h4>Pin Code</h4>
                <input type="number" name="pincode" onChange={handleonclick}/>
            </div>
             </div>
             <br />
             <div>
                <h4>Phone Number</h4>
                <input type="number" name="number" onChange={handleonclick}/>
            </div>
            <div>
        <div/>
        <br />
       <Link to="/paymentpage">   <button style={{ backgroundColor: "green", color:"white"}} className={Styles.button} onClick={()=>handlebtn(form)}>Continue to Shipping</button> </Link>
     <span className={Styles.span}>Return To Cart</span>
    </div>
    </form>
   
    <br />
    <br />
<hr style={{ width: "550px"}}/>
<div>
<span  className={Styles.span}>Refund policy </span> <span  className={Styles.span}>Shipping policy </span>
<span  className={Styles.span}>Privacy policy</span> <span  className={Styles.span}>Term of Service</span>
</div>

    </div>
  
       </div> 
       {/* --------------------------------------------- */}
          <div className={Styles.box2}>
          <div>
            <div>
            
    {cart.data && cart.data.map((el)=>{
     return <div className={Styles.cart}>
      <div>
      <img src={el.image} />
      </div>
       <div>
       <p>{el.title}</p>
      </div>
      <div>
        Qty:1
      </div>
       <div>
       <p>₹{el.price}</p>
       </div>
      </div>
    })}
            </div>
             <hr  />
             <br />
             <input type="text" placeholder='  Gift card or discount code' name="coupen"  style={{width:"300px"}}/>
             <button style={{width:"100px",backgroundColor:"gray",color:"white",marginLeft:"20px"}}>Apply</button>
             <br />
             <br />
             <hr />
               <br />
               <div className={Styles.total}>
              <div>
                 <h2> Subtotal</h2>
                 <h2>₹{x}</h2>
                 </div>
              <div>
                <h2>Shipping Charges</h2>
                <p>{500>=x ?  "₹40" :"Free above the 500 repis" }</p>
              </div>
              <br />
              <hr />
              <div>
                <h1>Total</h1>
                <h1><span>INR </span>
                ₹{y} </h1>
              </div>
               </div>

          </div>

         
          </div>
      

        </div>
    
  )
}

export default Checkout1
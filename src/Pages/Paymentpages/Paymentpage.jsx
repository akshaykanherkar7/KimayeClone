import React, { useState } from 'react'
import { useEffect } from 'react'
import Styles from "./Checkout.module.css"
import { Link, useNavigate } from 'react-router-dom'
export const Paymentpage = () => {
  
  const [contact,SetContact]=useState([])
  const [cart,setCart]=useState([])
  const [gift,setGift]=useState("")
  const [btn,setBtn]=useState("")
  const navigate=useNavigate()
  useEffect(()=>{
const contact= JSON.parse(localStorage.getItem("form"))
if(contact)
{
  SetContact(contact)
}

  },[])
  useEffect(()=>{
  
    const carts=JSON.parse(localStorage.getItem("cartitem"))
  setCart(carts)
  
  },[setCart])
  
  const hadlegift=(e)=>{
    const {value}=e.target
    setGift(value)
  }
  const handlegiftclick=()=>{
  setBtn(gift)
  }
  
  
  if(cart.data!==undefined)
  {
    
  var x=0;
  var y=0;
  for(let i=0;i<cart.data.length;i++)
  {
     
    if(btn==="MASAI30")
  {
    
    x=x+(cart.number[i]*cart.data[i].price)-((cart.number[i]*cart.data[i].price*30)/100)
    
  }
  else{
    x=x+cart.number[i]*cart.data[i].price
  }
   
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
            <div className={Styles.detail}  style={{backgroundColor:"white"}}>
                <div>
                <p style={{fontSize:"20px",color:"gray"}}>Contact</p>
                <p>{contact.fristname +"   "+ contact.lastname }</p>
                </div>
               <div>
              <p style={{fontSize:"20px",color:"gray"}}>Ship to</p>
              <p>{contact.Address}</p>
               </div>
               <div>
                <p style={{fontSize:"20px",color:"gray"}}>Method</p>
                <p>{500>=x ?  "Your order is below ₹500" :"Free Shipping " }</p>
               </div>
             </div>
      
      <h1 style={{fontSize:"30px",marginTop:"10px"}}>Payment </h1>
      <p style={{fontSize:"16px",marginBottom:"10px"}}>All transaction are secure and encrypted</p>
      <div className={Styles.pay}>
        <div className={Styles.second}>
        <input type="radio" name="rediobtn1" value="credit card" className={Styles.radiobtn} />
       <br />
        <i style={{fontSize: "20px",}} class="fa-solid fa-credit-card card"></i> &ensp; &ensp;
        <h2 style={{fontSize:"20px",marginTop:"-5px"}}>Credit Card</h2>
        </div>
       <div className={Styles.third}>
       <h4>Name on credit card</h4>
        <input type="text" placeholder='  Enter the name of card holder' />
        <p>credit card number</p>
        <input type="number" placeholder='  Enter the number' />
        </div>
        <div className={Styles.expiration}>
                         <div><p style={{fontSize:"15px"}}>Expiration</p></div>
                         <div><p>cvv</p></div>   
                     <div><input style={{height: "30px", width: "260px", border: "1px solid grey",textAlign: "center",borderRadius: "3px"}} type="text" placeholder="MM/YY" id="expiry"/></div>
                     <div><input  style={{height: "30px", width: "260px", border: "1px solid grey",textAlign: "center",borderRadius: "3px"}} type="number" id="cvv" placeholder="CVV"/></div> 
                     </div>
               </div>
               <div className={Styles.cash} style={{backgroundColor:"white"}}>
                  <input type="radio"  className={Styles.radiobtn}/>
                  <p style={{fontSize:"16px"}}>Cash On Delivery</p>
               </div>
               <div className={Styles.phone}>
               <div  style={{backgroundColor:"white"}} >
                         <input type="radio" name="rediobtn" value="Use a different billing address" className={Styles.radiobtn} />
                         <img style={{height:"30px",width:"90px"}} src="https://content.timesjobs.com/photo/76439597/people-movement/paytm-sets-up-its-biggest-campus-in-noida-plans-similar-expansion-in-bengaluru-to-accommodate-its-growing-teams.jpg" alt=""/>
                     </div>
                     <div  style={{backgroundColor:"white"}}>
                         <input type="radio" name="rediobtn" value="Use a different billing address" id="radiobtn2" className={Styles.radiobtn}  />
                         <img style={{height:"30px",width:"90px"}} src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg" alt=""/>
                     </div>
               </div>

               <h1 style={{fontSize:"25px",marginTop:"10px"}}>Billing Address</h1>
              <p>Select the address that matches your card or payment method</p>
               <div className={Styles.billing} style={{backgroundColor:"white"}}>
                <div>
                  <input type="radio" className={Styles.radiobtn}  value="Same as shipping address"/>
                  <p>Same as shipping address</p>
                </div>
               
                <div>
                <input type="radio" className={Styles.radiobtn}  value="	Use a different billing address" onChange={()=>navigate("/checkout")}/>
                  <p>	Use a different billing address</p>
                </div>
                
               </div>
               <Link to="/Sucess">  <button className={Styles.save}> CONFIRM ORDER</button></Link>
             
              
  <hr style={{ width: "550px"}}/>
  <div>
  <span className={Styles.span}>Refund policy </span> <span  className={Styles.span}>Shipping policy </span>
  <span  className={Styles.span}>Privacy policy</span> <span  className={Styles.span}>Term of Service</span>
  </div>
  
      </div>
    
         </div> 
         {/* --------------------------------------------- */}
            <div className={Styles.box2}>
            <div>
              <div>
              {cart.data && cart.data.map((el,index)=>{
     return <div className={Styles.cart}>
      <div>
      <img src={el.image} alt="image" />
      </div>
       <div>
       <p>{el.title}</p>
       Qty: {cart.number[index]}Kg
      </div>
      
       <div>
       <p>₹{el.price}</p>
       </div>
      </div>
    })}
              </div>
               <hr  />
               <br />
               <input type="text" placeholder='  Gift card or discount code' name="coupen"  style={{width:"300px"}} onChange={hadlegift}/>
               <button style={{width:"100px",backgroundColor:"gray",color:"white",marginLeft:"20px"}} className={Styles.button} onClick={handlegiftclick}>Apply</button>
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
                  <p>{500>=x ?  "₹40" :"Free above the ₹500 " }</p>
                </div>
                <br />
                <hr />
                <div>
                  <h1>Total</h1>
                  <h1><span>INR</span>
                  ₹{y}</h1>
                </div>
                 </div>
  
            </div>
  
           
            </div>
        
  
          </div>
      
  )
}

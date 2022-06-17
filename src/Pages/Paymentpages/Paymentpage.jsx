import React, { useState } from 'react'
import { useEffect } from 'react'
import Styles from "./Checkout.module.css"
export const Paymentpage = () => {
  
  const [contact,SetContact]=useState([])


  useEffect(()=>{
const contact= JSON.parse(localStorage.getItem("form"))
if(contact)
{
  SetContact(contact)
}

  },[])
  
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
                <p>Free Shipping</p>
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
                <input type="radio" className={Styles.radiobtn}  value="	Use a different billing address"/>
                  <p>	Use a different billing address</p>
                </div>
                
               </div>
               <button className={Styles.save}> CONFIRM ORDER</button>
              
  <hr style={{ width: "550px"}}/>
  <div>
  <span>Refund policy </span> <span>Shipping policy </span>
  <span>Privacy policy</span> <span>Term of Service</span>
  </div>
  
      </div>
    
         </div> 
         {/* --------------------------------------------- */}
            <div className={Styles.box2}>
            <div>
              <div>
                  {/* {here  map the product} */}
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
                   <h2>300rupes</h2>
                   </div>
                <div>
                  <h2>Shipping Charges</h2>
                  <p>Free above the 500 repis</p>
                </div>
                <br />
                <hr />
                <div>
                  <h1>Total</h1>
                  <h1><span>INR</span>
                      8000</h1>
                </div>
                 </div>
  
            </div>
  
           
            </div>
        
  
          </div>
      
  )
}

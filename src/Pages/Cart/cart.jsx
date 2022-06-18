import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../Cart/cart.module.css"
const Cart = () => {
  // let prod = JSON.parse(localStorage.getItem("cartitem")) || [];
  const [prod, setProd] = useState(
    JSON.parse(localStorage.getItem("cartitem")) || []
  );

  const navigate=useNavigate()
  //   let product = [
  //     {
  //       image_url:
  //         "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_219x.progressive.jpg?v=1654851019",
  //       name: "Kimaye Cherry- Blueberry Combo",
  //       weight: "250g",
  //       price: 140,
  //       quantity: 2,
  //     },
  //     {
  //       image_url:
  //         "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/image_219x.progressive.jpg?v=1620889338",
  //       name: "Kimaye Jamun (250 gm)",
  //       weight: "500g",
  //       price: 250,
  //       quantity: 7,
  //     },
  //     {
  //       image_url:
  //         "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/image_219x.progressive.jpg?v=1620889338",
  //       name: "Kimaye Jamun (250 gm)",
  //       weight: "500g",
  //       price: 250,
  //       quantity: 7,
  //     },
  //     {
  //       image_url:
  //         "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/image_219x.progressive.jpg?v=1620889338",
  //       name: "Kimaye Jamun (250 gm)",
  //       weight: "500g",
  //       price: 250,
  //       quantity: 7,
  //     },
  //   ];
  //   localStorage.setItem("ProdData", JSON.stringify(product));

  let SubTotal = 0;
  for (let i = 0; i < prod.data.length; i++) {
    SubTotal += prod.data[i].price * prod.number[i];
  }
  console.log(prod);

  
  const handelInc = (cartQty, index, prod) => {
    console.log(cartQty);
    for (let i = 0; i < prod.number.length; i++) {
      if (i === index) {
        prod.number[i] = prod.number[i] + 1;
      }
    }
    setProd({...prod,number:[...prod.number]})
    localStorage.setItem("cartitem",JSON.stringify(prod))
  };
  const handelDec = (cartQty,index,prod) => {
    console.log(cartQty);
    for (let i = 0; i < prod.number.length; i++) {
      if (i === index) {
        prod.number[i] = prod.number[i] -1;
      }
    }
    setProd({ ...prod, number: [...prod.number] });
    localStorage.setItem("cartitem",JSON.stringify(prod))
  };

  return (
    <>
      <div className={style.cartBody}>
        <div className={style.carthead}>
          <h1>CART</h1>
        </div>
        <div className={style.productlist}>
          <table>
            <thead>
              <tr className={style.tablehead}>
                <th></th>
                <th></th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {prod.data.map((el, index) => {
                return (
                  <tr key={index} style={{ marginBottom: "100px" }}>
                    <td>
                      <div className={style.delbtn}>
                        <button>x</button>
                      </div>
                    </td>
                    <td>
                      <div className={style.pImg}>
                        <img src={el.image} alt=""></img>
                      </div>
                    </td>
                    <td>
                      <div className={style.productData}>
                        <div>
                          <p>{el.title}</p>
                          {/* <p>{el.}</p> */}
                        </div>
                      </div>
                    </td>
                    <td>{el.price}</td>
                    <td>
                      <div className={style.qty}>
                        <button
                          onClick={() =>
                            handelDec(prod.number[index], index, prod)
                          }
                        >
                          -
                        </button>
                        <p>{prod.number[index]}</p>
                        <button
                          onClick={() =>
                            handelInc(prod.number[index], index, prod)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <h3>{el.price * prod.number[index]}</h3>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Input div */}

        <div>
          <p>Pick a Delivery date:</p>
          <input className={style.dateInput} type="date" name="input" />
          <p>Choose a time:</p>
          <select className={style.selectInput}>
            <option>Select a time</option>
          </select>
        </div>
        <div>
          <h2 className={style.loc}>
            Your current delivery location is Mumbai
          </h2>
        </div>

        {/* Checkout div */}
        <div className={style.checkoutDiv}>
          <div className={style.specialInstruction}>
            <h1>Special Instruction</h1>
            <div>
              <textarea></textarea>
            </div>
          </div>
          <div className={style.cartTotal}>
            <h1>CART TOTALS</h1>
            <div className={style.totalDiv}>
              <div className={style.totalPrice}>
                <h4>SubTotal</h4>
                <p>{SubTotal}</p>
              </div>
              <hr></hr>
              <div className={style.totalPrice}>
                <h2>Total</h2>
                <h2>{SubTotal}</h2>
              </div>
            </div>
            <div className={style.congoDiv}>
              <h4>CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!</h4>
            </div>
            <div className={style.checkoutBtn}>
              <button
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className={style.continueShopping}>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

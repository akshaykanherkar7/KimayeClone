import { color } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  cartdata,
  cartdelivery,
  countdec,
  countinc,
  countupdate,
  getarray,
  get_product,
} from "../../Store/productdetail/product.action";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
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
  Button,
} from "@chakra-ui/react";

const Productdetail = () => {
  let dispatch = useDispatch();
  let { data } = useSelector((state) => state.product);
  let { count } = useSelector((state) => state.product);
  let producttitle = "Kimaye Litchi-Kesar Combo";
  let { array } = useSelector((state) => state.product);
  let { Cartdata } = useSelector((state) => state.product);
  let [arrshow, setArrshow] = useState([]);
  let categeory = "fruitcombos";
  let { Countupdate } = useSelector((state) => state.product);
  // let [mm,setMm] = useState(1);
  let mm = useRef();
  let af = useRef(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  let history = window.location.href;
  let { pathname } = useLocation();
  console.log(pathname, "param");
  //carousel

  // const [data, setData] = useState([]);

  let getcred = {
    categeory: categeory,
    title: producttitle,
  };

  useEffect(() => {
    // let last = pathname.substring(pathname.lastIndexOf('/')-1)
    let l = pathname.split("/");
    let last = l[l.length - 2];
    console.log(last, "last");
    let a = JSON.parse(localStorage.getItem("products"));
    a = a.title;
    getcred.title = a;
    console.log("a", a);

    getcred.categeory = last;
    console.log("getcred", getcred);
    dispatch(get_product(getcred));
    dispatch(getarray(getcred));
    af.current = true;
  }, []);

  let fivestar = () => {
    if (af.current == true) {
      console.log(1);
      mm.current = Math.floor(Math.random(0, 5) * 5) + 1;
    }
    af.current = false;

    // mm.current = Math.floor(Math.random(0,5)*5)+1;
    //  setMm(ab);
    console.log("mmmmm", mm);
    let arr = [];

    for (let i = 0; i < mm.current; i++) {
      arr.push(
        <p>
          <i class="fa-solid fa-star"></i>
        </p>
      );
    }
    return arr;
  };
  let item = () => {
    if (data.title !== undefined) {
      let abc = data.title.split(" ");
      console.log(abc);
      abc.shift();
      abc.pop();
      return abc;
    }
  };
  let handleclick = (a) => {
    if (a == "inc") {
      dispatch(countinc());
    } else {
      if (count != 1) dispatch(countdec());
    }
  };

  let handlecart = () => {
    if (data != undefined) {
      console.log("data", data);
      dispatch(cartdata(data));
      dispatch(countupdate(count));
    }

    onOpen();
  };
  let sendtokart = () => {
    let a = { data: Cartdata, number: Countupdate };
    dispatch(cartdelivery(a));
  };

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
  // console.log(Cartdata,"cartdata")
  // useEffect(()=>{

  // })

  // console.log("getarray",array)
  let [rotarr, setRotarr] = useState([]);
  useEffect(() => {
    let ap = [];
    for (let i = 0; i < 3; i++) {
      ap.push(array[i]);
    }
    console.log(ap, "ap");
    setRotarr(ap);
    console.log(rotarr, "rotarr");
  }, []);

  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.upper1}>
          <img src={data.image} />
        </div>
        <div className={styles.upper2}>
          <h1>{data.title}</h1>
          <div style={{ display: "flex", color: "gold" }}>
            {/* <p><i class="fa-solid fa-star"></i></p> */}
            {fivestar()}
          </div>
          {/* <h3>This   is freshly picked from farm</h3> */}
          <p className={styles.dis}>This Item Contains</p>
          <li style={{ marginTop: "20px" }}>{item()}</li>
          <h2 style={{ marginTop: "20px" }}>
            <i class="fa-solid fa-indian-rupee-sign"></i> {data.price}
          </h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className={styles.btncash}
                onClick={() => handleclick("inc")}
              >
                +
              </button>
              {count}
              <button
                className={styles.btncash}
                onClick={() => handleclick("dec")}
              >
                -
              </button>
            </div>
            <button
              className={styles.button10}
              style={{
                border: "1px solid grey",
                borderRadius: "5px",
                width: "150px",
                height: "35px",
              }}
              ref={btnRef}
              colorScheme="teal"
              onClick={handlecart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Cart Details</DrawerHeader>

              <DrawerBody>
                {Cartdata.map((l, index) => (
                  <div style={{ marginTop: "10px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <img
                        src={l.image}
                        alt=""
                        style={{ width: "80px", height: "50px" }}
                      />
                      <h3>{Number(l.price) * Number(Countupdate[index])}</h3>
                    </div>
                  </div>
                ))}
                <Link to="/cart">
                  {" "}
                  <button
                    style={{
                      width: "150px",
                      height: "30px",
                      border: "1px solid red",
                      marginTop: "20px",
                    }}
                    onClick={sendtokart}
                  >
                    Checkout
                  </button>
                </Link>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      </div>
      <div className={styles.rot}>
        <div className={styles.divi}>
          <h1 className={styles.showoff}>
            This item contains {item()}
            <br /> which is freshly picked
            <br /> from farm. We don't <br /> use any preservative. <br />
            It is freshly picked and <br />
            delivered to you within <br /> 24 hr{" "}
          </h1>
        </div>
        <div style={{ width: "60%" }}>
          <img src={data.image} style={{ height: "100%", width: "100%" }} />
        </div>
      </div>
      <div
        style={{
          width: "90%",
          height: "400px",
          display: "flex",
          // border:"1px solid",
          margin: "auto",
          marginBottom: "50px",
        }}
      >
        <div style={{ width: "50%" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Jamun-nutritional_e50b00c6-9239-4a56-b0d2-3a96ac258b0e.progressive.jpg?v=1620889338"
            alt=""
          />
        </div>
        <div style={{ width: "50%" }}>
          <img
            src="http://justfunfacts.com/wp-content/uploads/2019/11/fruits.jpg"
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Productdetail;

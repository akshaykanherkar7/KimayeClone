import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFreshCuts } from "../../Store/Products/products.action";
import { useNavigate } from "react-router-dom";
import "./Common.css";



const FreshCuts = () => {
  
  const dispatch = useDispatch();
  const { freshcuts } = useSelector((state) => state.products);
  const navigate = useNavigate();
  //   console.log("freshcuts:", freshcuts);

  useEffect(() => {
    dispatch(getFreshCuts());
  }, [dispatch]);
  
  return (

    <div>
      <div
       className="Link"
        style={{
         
          display: "flex",
          //   border: "1px solid",
          width: "fit-content",
          gap: "20px",
          margin: "auto",
          marginTop: "25px",
        }}
      >

        <p onClick={() => navigate("/collections/all-fruits")}>ALL FRUITS</p>
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => navigate("/collections/fresh-cuts")}
        >
          {" "}
          FRESH CUTS
      
        </p>
        <p onClick={() => navigate("/collections/fruit-combos")}>
          {" "}
          FRUIT COMBOS
        </p>
        <p onClick={() => navigate("/collections/gifts-by-kimaye")}>
          GIFTS BY KIMAYE
        </p>
      </div>



      <div className="MapBox">
        {freshcuts.map((el) => (
          <div style={{ border: "1px solid" }}>
            <img src={el.image} alt="broken" />
            <h1
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {el.title}
            </h1>
            <h3
              style={{ textAlign: "center", color: "brown", fontSize: "25px" }}
            >
              ₹{el.price}
            </h3>
          </div>
        ))}
      </div>
      <div
       className="Link"
        style={{
          display: "flex",
          //   border: "1px solid",
          width: "fit-content",
          gap: "20px",
          margin: "auto",
          marginTop: "25px",
          marginBottom: "30px",
        
        }}
      >
        <p onClick={() => navigate("/collections/all-fruits")}>ALL FRUITS</p>
        <p

          style={{ textDecoration: "underline" }}
          onClick={() => navigate("/collections/fresh-cuts")}
        >
          {" "}
          FRESH CUTS
        </p>
        <p onClick={() => navigate("/collections/fruit-combos")}>
          {" "}
          FRUIT COMBOS
        </p>
        <p onClick={() => navigate("/collections/gifts-by-kimaye")}>
          GIFTS BY KIMAYE
        </p>
        
      </div>
    </div>
  );
};

export default FreshCuts;

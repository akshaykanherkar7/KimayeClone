import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFruitCombos } from "../../Store/Products/products.action";
import { useNavigate } from "react-router-dom";
import "./Common.css";

const FruitCombos = () => {
  
  const dispatch = useDispatch();
  const { fruitcombos } = useSelector((state) => state.products);
  const navigate = useNavigate();
  //   console.log("fruitcombos:", fruitcombos);

  useEffect(() => 
  {
    dispatch(getFruitCombos());
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
        <p onClick={() => navigate("/collections/fresh-cuts")}> FRESH CUTS</p>
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => navigate("/collections/fruit-combos")}
        >
          {" "}
          FRUIT COMBOS
        </p>
        <p onClick={() => navigate("/collections/gifts-by-kimaye")}>
          GIFTS BY KIMAYE
        </p>

      </div>
      <div className="MapBox">
        {fruitcombos.map((el) => (
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
        <p onClick={() => navigate("/collections/fresh-cuts")}> FRESH CUTS</p>
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => navigate("/collections/fruit-combos")}
        >
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

export default FruitCombos;

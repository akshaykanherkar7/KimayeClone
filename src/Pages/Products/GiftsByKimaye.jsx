import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGiftsByKimaye,
  sendProducts,
} from "../../Store/Products/products.action";
import { useNavigate } from "react-router-dom";
import "./Common.css";
import { Spinner, Stack } from "@chakra-ui/react";

const GiftsByKimaye = () => {
  const dispatch = useDispatch();
  const { giftsbykimaye, loading } = useSelector((state) => state.products);
  const navigate = useNavigate();
  //   console.log("giftsbykimaye:", giftsbykimaye);
  const handleSendProduct = (idx) => {
    dispatch(sendProducts(idx));
    navigate("/collections/giftsbykimaye/productdetail");
  };

  useEffect(() => {
    dispatch(getGiftsByKimaye());
  }, [dispatch]);

  if (loading)
    return (
      <div
        style={{
          width: "fit-content",
          margin: "auto",
          marginTop: "45px",
          marginBottom: "45px",
        }}
      >
        <Stack direction="row" spacing={4}>
          <Spinner size="xl" />
        </Stack>
      </div>
    );
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
        <p onClick={() => navigate("/collections/allfruits")}>ALL FRUITS</p>
        <p onClick={() => navigate("/collections/freshcuts")}> FRESH CUTS</p>
        <p onClick={() => navigate("/collections/fruitcombos")}>
          {" "}
          FRUIT COMBOS
        </p>
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => navigate("/collections/giftsbykimaye")}
        >
          GIFTS BY KIMAYE
        </p>
      </div>
      <div className="MapBox">
        {giftsbykimaye.map((el) => (
          <div
            //  style={{ border: "1px solid" }}
            onClick={() => handleSendProduct(el)}
          >
            <img
              className="Img"
              style={{ width: "100%", borderRadius: "30px", height: "80%" }}
              src={el.image}
              alt="broken"
            />
            <h1
              style={{
                textAlign: "center",
                fontSize: "20px",
                // fontWeight: "bold",
                marginTop: "15px",
              }}
            >
              {el.title}
            </h1>
            <h3
              style={{
                textAlign: "center",
                color: "brown",
                fontSize: "25px",
                marginTop: "10px",
              }}
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
        <p onClick={() => navigate("/collections/allfruits")}>ALL FRUITS</p>
        <p onClick={() => navigate("/collections/freshcuts")}> FRESH CUTS</p>
        <p onClick={() => navigate("/collections/fruitcombos")}>
          {" "}
          FRUIT COMBOS
        </p>
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => navigate("/collections/giftsbykimaye")}
        >
          GIFTS BY KIMAYE
        </p>
      </div>
    </div>
  );
};

export default GiftsByKimaye;

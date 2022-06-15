import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFruitCombos } from "../../Store/Products/products.action";

const FruitCombos = () => {
  const dispatch = useDispatch();
  const { fruitcombos } = useSelector((state) => state.products);
//   console.log("fruitcombos:", fruitcombos);

  useEffect(() => {
    dispatch(getFruitCombos());
  }, [dispatch]);
  return <div>FruitCombos</div>;
};

export default FruitCombos;

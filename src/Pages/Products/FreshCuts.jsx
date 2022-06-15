import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFreshCuts } from "../../Store/Products/products.action";

const FreshCuts = () => {
  const dispatch = useDispatch();
  const { freshcuts } = useSelector((state) => state.products);
//   console.log("freshcuts:", freshcuts);

  useEffect(() => {
    dispatch(getFreshCuts());
  }, [dispatch]);
  return <div>FreshCuts</div>;
};

export default FreshCuts;

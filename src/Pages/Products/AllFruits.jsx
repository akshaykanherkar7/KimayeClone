import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFruits } from "../../Store/Products/products.action";

const AllFruits = () => {
  const dispatch = useDispatch();
  const { allfruits } = useSelector((state) => state.products);
  //   console.log("allfruits:", allfruits);

  useEffect(() => {
    dispatch(getAllFruits());
  }, [dispatch]);

  return (
    <div>
      AllFruits
      {allfruits.map((el) => (
        <div>{el.price}</div>
      ))}
    </div>
  );
};

export default AllFruits;

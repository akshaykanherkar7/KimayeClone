import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGiftsByKimaye } from "../../Store/Products/products.action";

const GiftsByKimaye = () => {
  const dispatch = useDispatch();
  const { giftsbykimaye } = useSelector((state) => state.products);
  console.log("giftsbykimaye:", giftsbykimaye);

  useEffect(() => {
    dispatch(getGiftsByKimaye());
  }, [dispatch]);
  return <div>GiftsByKimaye</div>;
};

export default GiftsByKimaye;

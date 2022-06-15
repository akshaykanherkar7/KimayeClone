import axios from "axios";
import {
  GET_ALL_FRUITS,
  GET_FRESH_CUTS,
  GET_FRUIT_COMBOS,
  GET_GIFTS_BY_KIMAYE,
} from "./products.action.types";

export const getAllFruits = () => (dispatch) => {
  axios.get("http://localhost:8080/allfruits").then((res) => {
    dispatch({ type: GET_ALL_FRUITS, payload: res.data });
  });
};

export const getFreshCuts = () => (dispatch) => {
  axios.get("http://localhost:8080/freshcuts").then((res) => {
    dispatch({ type: GET_FRESH_CUTS, payload: res.data });
  });
};

export const getFruitCombos = () => (dispatch) => {
  axios.get("http://localhost:8080/fruitcombos").then((res) => {
    dispatch({ type: GET_FRUIT_COMBOS, payload: res.data });
  });
};

export const getGiftsByKimaye = () => (dispatch) => {
  axios.get("http://localhost:8080/giftsbykimaye").then((res) => {
    dispatch({ type: GET_GIFTS_BY_KIMAYE, payload: res.data });
  });
};

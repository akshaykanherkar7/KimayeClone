import axios from "axios";
import {
  GET_ALL_FRUITS,
  GET_FRESH_CUTS,
  GET_FRUIT_COMBOS,
  GET_GIFTS_BY_KIMAYE,
  GET_LOADING,
  SEND_PRODUCTS,
} from "./products.action.types";

export const getAllFruits = () => (dispatch) => {
  dispatch({ type: GET_LOADING });
  axios.get("http://localhost:8080/allfruits").then((res) => {
    setTimeout(() => {
      dispatch({ type: GET_ALL_FRUITS, payload: res.data });
    }, 500);
  });
};

export const getFreshCuts = () => (dispatch) => {
  dispatch({ type: GET_LOADING });
  axios.get("http://localhost:8080/freshcuts").then((res) => {
    setTimeout(() => {
      dispatch({ type: GET_FRESH_CUTS, payload: res.data });
    }, 500);
  });
};

export const getFruitCombos = () => (dispatch) => {
  dispatch({ type: GET_LOADING });
  axios.get("http://localhost:8080/fruitcombos").then((res) => {
    setTimeout(() => {
      dispatch({ type: GET_FRUIT_COMBOS, payload: res.data });
    }, 500);
  });
};

export const getGiftsByKimaye = () => (dispatch) => {
  dispatch({ type: GET_LOADING });
  axios.get("http://localhost:8080/giftsbykimaye").then((res) => {
    setTimeout(() => {
      dispatch({ type: GET_GIFTS_BY_KIMAYE, payload: res.data });
    }, 500);
  });
};

export const sendProducts = (data) => (dispatch) => {
  dispatch({ type: SEND_PRODUCTS, payload: data });
};

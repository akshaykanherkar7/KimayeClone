import {
  GET_ALL_FRUITS,
  GET_FRESH_CUTS,
  GET_FRUIT_COMBOS,
  GET_GIFTS_BY_KIMAYE,
  GET_LOADING,
  SEND_PRODUCTS,
} from "./products.action.types";

const initialState = {
  loading: false,
  allfruits: [],
  freshcuts: [],
  fruitcombos: [],
  giftsbykimaye: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOADING: {
      return {...state, loading: true}
    }
    case GET_ALL_FRUITS: {
      //   console.log(payload);
      return {
        ...state,
        loading:false,
        allfruits: payload,
      };
    }

    case GET_FRESH_CUTS: {
      return {
        ...state,
        loading:false,
        freshcuts: payload,
      };
    }

    case GET_FRUIT_COMBOS: {
      return {
        ...state,
        loading:false,
        fruitcombos: payload,
      };
    }

    case GET_GIFTS_BY_KIMAYE: {
      return {
        ...state,
        loading: false,
        giftsbykimaye: payload,
      };
    }

    case SEND_PRODUCTS: {
      // let data = [];
      // data.push(payload);
      localStorage.setItem("products", JSON.stringify(payload));
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

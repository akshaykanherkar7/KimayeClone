import {
  GET_ALL_FRUITS,
  GET_FRESH_CUTS,
  GET_FRUIT_COMBOS,
  GET_GIFTS_BY_KIMAYE,
} from "./products.action.types";

const initialState = {
  allfruits: [],
  freshcuts: [],
  fruitcombos: [],
  giftsbykimaye: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_FRUITS: {
      //   console.log(payload);
      return {
        ...state,
        allfruits: payload,
      };
    }

    case GET_FRESH_CUTS: {
      return {
        ...state,
        freshcuts: payload,
      };
    }

    case GET_FRUIT_COMBOS: {
      return {
        ...state,
        fruitcombos: payload,
      };
    }

    case GET_GIFTS_BY_KIMAYE: {
      return {
        ...state,
        giftsbykimaye: payload,
      };
    }

    default: {
      return state;
    }
  }
};

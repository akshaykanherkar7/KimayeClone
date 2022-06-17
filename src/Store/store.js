import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { productreducer } from "./productdetail/product.reducer";
import { productsReducer } from "./Products/products.reducer";

const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootreducer = combineReducers({
  product: productreducer, // by shashank
  products: productsReducer, // by Akshay
});

export const store = legacy_createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(thunk))
);

import React from 'react'
import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"
import thunk from "react-thunk"
import { productreducer } from './productdetail/product.reducer';

const composeEnhancer = window.__Redux_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootreducer= combineReducers({
    product:productreducer
})

export const store = legacy_createStore(rootreducer,composeEnhancer(applyMiddleware(thunk)));

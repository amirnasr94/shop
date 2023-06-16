import {configureStore,combineReducers} from "@reduxjs/toolkit";
import productSlice, { fetchProduct } from "../reduxReducer/productSlice";

const reducer = combineReducers({
    products: productSlice
})

export const store = configureStore({reducer});

store.dispatch(fetchProduct())
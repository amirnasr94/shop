import {configureStore,combineReducers} from "@reduxjs/toolkit";
import productSlice, { fetchProduct } from "../reduxReducer/productSlice";
import cartSlice, { computedTotal } from "../reduxReducer/cartSlice";

const reducer = combineReducers({
    products: productSlice,
    carts: cartSlice
})

export const store = configureStore({reducer});

store.dispatch(fetchProduct())
store.dispatch(computedTotal())
import { createSlice } from '@reduxjs/toolkit';
import { CartProducts,Product } from '../../constants/modal';

const initialState:CartProducts = {
    cartproduct: localStorage.getItem("cartProduct") ? JSON.parse(localStorage.getItem("cartProduct") || "[]") : [],
    cartTotalQty:0,
    cartTotalAmount:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const exsIndexProduct:number = state.cartproduct.findIndex((item) => item.id === action.payload.id);
            if (exsIndexProduct >= 0) {
                state.cartproduct[exsIndexProduct] = {
                    ...state.cartproduct[exsIndexProduct],
                    cartQty: state.cartproduct[exsIndexProduct].cartQty + 1
                }
            }else{
                const tepProduct:Product = {
                    ...action.payload,
                    cartQty:1
                }
                state.cartproduct.push(tepProduct);
            }
            localStorage.setItem("cartProduct",JSON.stringify(state.cartproduct));
        },
        computedTotal(state){
            // eslint-disable-next-line prefer-const
            let {total,qty} = state.cartproduct.reduce((cartTotal,cartItem) => {
                const {price,cartQty} = cartItem;
                const itemTotal = price * cartQty;
                cartTotal.total += itemTotal;
                cartTotal.qty += cartQty
                return cartTotal
            },{
                total:0,
                qty:0
            })
            total = parseFloat(total.toFixed());
            state.cartTotalQty = qty;
            state.cartTotalAmount = total;
        },
        decreamentNumProduct(state,action){
            const productIndex = state.cartproduct.findIndex(item => item.id === action.payload.id);
            const updatedProduct = {...action.payload};
            if (updatedProduct.cartQty > 1) updatedProduct.cartQty -= 1;
            state.cartproduct[productIndex] = updatedProduct;
            localStorage.setItem("cartProduct",JSON.stringify(state.cartproduct));
        },
        deletFromCart(state,action){
            const newCartProduct = state.cartproduct.filter(item => item.id !== action.payload);
            state.cartproduct = newCartProduct;
            localStorage.setItem("cartProduct",JSON.stringify(state.cartproduct));
        }
    }
})

export const {addToCart,computedTotal,deletFromCart,decreamentNumProduct} = cartSlice.actions;
export default cartSlice.reducer;
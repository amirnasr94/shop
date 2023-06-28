import { createSlice, current } from '@reduxjs/toolkit';
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
            console.log(current(state));
            
            const exsIndexProduct:number = state.cartproduct.findIndex((item) => item.id === action.payload.id);
            if (exsIndexProduct >= 0) {
                state.cartproduct[exsIndexProduct] = {
                    ...state.cartproduct[exsIndexProduct],
                    cartQty: state.cartproduct[exsIndexProduct].cartQty + 1
                }
            }else{
                const tepProduct:Product = {
                    ...action.payload,
                    cartQty:action.payload.cartQty
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
        decreaseNumProduct(state,action){
            //
        },
        deletFromCart(state,action){
            const newCartProduct = state.cartproduct.filter(item => item.id !== action.payload);
            state.cartproduct = newCartProduct;
            localStorage.setItem("cartProduct",JSON.stringify(state.cartproduct));
        }
    }
})

export const {addToCart,computedTotal,deletFromCart,decreaseNumProduct} = cartSlice.actions;
export default cartSlice.reducer;
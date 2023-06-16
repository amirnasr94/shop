import {createSlice,createAsyncThunk,createEntityAdapter,EntityState} from "@reduxjs/toolkit";
import { Product,ProductTools } from "../../constants/modal";
import axios from "axios";

export const fetchProduct = createAsyncThunk("products/fetchProduct",async () => {
    try {
        const {data} = await axios.get("http://localhost:9000/stickers/")
        return data;
    } catch (error) {
        console.error(error);
    }
});



const productAdaptor = createEntityAdapter<Product>({
    selectId: (product) => product.id,
    sortComparer:(a,b) => b.title.localeCompare(a.title)
});

const initialState:EntityState<Product> & ProductTools = productAdaptor.getInitialState({
    status:"idle",
    error:""
})

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(fetchProduct.pending,(state,action) => {
            state.status = "pending"
        })
        .addCase(fetchProduct.fulfilled,(state,action) => {
            state.status = "succeeded"
            productAdaptor.upsertMany(state,action.payload)
        })
        .addCase(fetchProduct.rejected,(state,action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});


export default productsSlice.reducer;
import { store } from "../redux/reduxStore/store"

export type Product = {
    id:number,
    name:string,
    image:string,
    description:string,
    extra_description:string,
    properties:object[],
    price:number,
    color:string[],
    score:number,
    specification:object[],
    stock:number,
    comments:object[]
    cartQty:number
}

export interface ProductTools {
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | undefined
}

export interface CartProducts {
    cartproduct: Product[],
    cartTotalQty:number,
    cartTotalAmount:number
}


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


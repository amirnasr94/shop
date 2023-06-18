export type Product = {
    id:string,
    title:string,
    price:number,
    description:string,
    sticker:string,
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
export type Product = {
    id:string,
    title:string,
    price:number,
    description:string,
    sticker:string,
}

export interface ProductTools {
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | undefined
}
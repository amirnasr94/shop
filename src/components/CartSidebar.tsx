import {FC} from "react";
import { Product } from "../constants/modal";

interface Props{
    show:boolean,
    handleShowSidebar:() =>void,
    carts:Product[];

}

const CartSidebar:FC<Props> = ({show,handleShowSidebar,carts}) => {
  return (
    <div className={`relative z-10 ${show ? "block" : "hidden"}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"  onClick={handleShowSidebar}></div>

        <div className="fixed inset-0 overflow-hidden ">
            <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-md">
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={handleShowSidebar}>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 border-b sm:px-6">
                        <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Cart</h2>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            {carts.map(item => (
                                <div key={item.id} className="w-full flex flex-row-reverse items-center text-clip shadow-sm rounded-sm p-2 mb-2">
                                    <div className="w-1/4">
                                        <img src={`http://localhost:9000/images/${item.sticker}`} alt="" className="w-20 h-20 rounded-sm shadow-md"/>
                                    </div>
                                    <div className="w-1/2">{item.title}</div>
                                    <div className="w-1/4">x<img src="" alt="" /></div>
                                </div>
                            ))}
                        </div>
                        <div className="relative mt-3 px-3">
                            <button className="w-full p-4 bg-slate-600 text-white text-center rounded-lg">Cart checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CartSidebar
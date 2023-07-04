import {FC} from "react";
import basket from "../assets/images/basket.svg";
import { useAppSelector } from "../hooks/customHooks";

interface Props{
    handleShowSidebar:() =>void
}
const Navbar:FC<Props> = ({handleShowSidebar}) => {
    const cart = useAppSelector(state => state.carts);
  return (
    <>
        <header className="w-full">
            <nav className="flex items-center justify-between px-6 lg:px-8" aria-label="Global">
            <div className="flex">
                <a href="#" className="-m-1.5 p-1.5 relative" onClick={handleShowSidebar}>
                    <img className="h-8 w-auto" src={basket} alt="basket-cart"/>
                    {cart.cartproduct.length > 0 ? (<span className="absolute w-4 h-4 bg-violet-700 rounded-full top-1 right-0 text-center text-xs text-white">{cart.cartproduct.length}</span>) : null}
                </a>
            </div>
            <div className="flex flex-1 justify-center">
                <h1 className="leading-relaxed font-extrabold text-4xl text-center text-purple-600 mt-4 py-2 sm:py-4">Shop</h1>
            </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar
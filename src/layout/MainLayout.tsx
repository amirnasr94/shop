import {FC, ReactNode,useState,useMemo} from "react";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { deletFromCart } from "../redux/reduxReducer/cartSlice";

interface Props{
    children: ReactNode
}

const MainLayout:FC<Props> = ({children}) => {
  const [showSidebar,setShowSidebar] = useState<boolean>(false);

  const carts = useAppSelector(state => state.carts.cartproduct);
  const dispatch = useAppDispatch();

  const handleShowSidebar = ():void => {
    setShowSidebar(!showSidebar)
  };

  const handleRemoveProduct = (proId:string):void => {
    dispatch(deletFromCart(proId));
  }

  const cartSidebar = useMemo(() => (
    <CartSidebar show={showSidebar} handleShowSidebar={handleShowSidebar} carts={carts} handleRemoveProduct={handleRemoveProduct}/>
  ),[showSidebar,carts]);

  return (
    <main className="w-full h-full">
      <Navbar handleShowSidebar={handleShowSidebar}/>
      {cartSidebar}
      {children}
    </main>
  )
}

export default MainLayout
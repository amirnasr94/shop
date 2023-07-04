import {FC, ReactNode,useState} from "react";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";
import { useAppSelector } from "../hooks/customHooks";

interface Props{
    children: ReactNode
}

const MainLayout:FC<Props> = ({children}) => {
  const [showSidebar,setShowSidebar] = useState<boolean>(false);

  const carts = useAppSelector(state => state.carts.cartproduct);

  const handleShowSidebar = ():void => {
    setShowSidebar(!showSidebar)
  }
  return (
    <main className="w-full h-full">
      <Navbar handleShowSidebar={handleShowSidebar}/>
      <CartSidebar show={showSidebar} handleShowSidebar={handleShowSidebar} carts={carts}/>
      {children}
    </main>
  )
}

export default MainLayout
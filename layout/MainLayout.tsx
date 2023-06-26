import {FC, ReactNode} from "react";
import Navbar from "../src/components/Navbar";

interface Props{
    children: ReactNode
}

const MainLayout:FC<Props> = ({children}) => {
  return (
    <div className="w-full h-full flex flex-col min-h-screen">
        <Navbar/>
        <main className="w-full h-full">{children}</main>
    </div>
  )
}

export default MainLayout
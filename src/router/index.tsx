import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import NotFound from "../components/NotFound";
import MainLayout from "../layout/MainLayout";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<NotFound/>
    },
    {
        path:"/shop/:productID",
        element:<MainLayout><ProductDetails/></MainLayout>,
    },
    {
        path:"/cart",
        element:<Cart/>
    }

])
import { useState, FC } from "react"
import { useAppDispatch } from "../hooks/customHooks";
import { addToCart } from "../redux/reduxReducer/cartSlice";
import { Product } from "../constants/modal";
import { useNavigate } from "react-router-dom";

interface Props {
    pro: Product
}

const NumberOfProductForm:FC<Props> = ({pro}) => {
    const [qty,setQty] = useState<number>(1);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    console.log("product:",pro);

    const handleAddToCart = (item:Product) => {
        dispatch(addToCart(item));
        // navigate("/cart")
    }

    const updateQty = () => {
        setQty(qty + 1);
    }
    
  return (
    <div>
        <input type="number" className="border border-purple-400" value={qty} onChange={updateQty}/>
        <button className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => handleAddToCart({...pro,cartQty:qty})}>Add To Cart</button>
    </div>
  )
}

export default NumberOfProductForm
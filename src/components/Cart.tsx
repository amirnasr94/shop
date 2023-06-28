import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { Product } from "../constants/modal";
import { addToCart, computedTotal, deletFromCart, decreamentNumProduct } from "../redux/reduxReducer/cartSlice";
import { useEffect } from "react";

const Cart = () => {
    const {cartproduct,cartTotalQty,cartTotalAmount} = useAppSelector(state => state.carts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(computedTotal())
    },[cartproduct,dispatch])

    const handleRemoveFromCart = (productId:string):void => {
        dispatch(deletFromCart(productId));
    }

    const handleIncreaseProNumber = (item:Product):void => {
        dispatch(addToCart(item))
    }
    const handleDecreaseProNumber = (item:Product):void => {
        dispatch(decreamentNumProduct(item))
    }

    console.log("cartproduct: ",cartproduct);
    console.log("cartTotalQty: ",cartTotalQty);
    console.log("cartTotalAmount: ",cartTotalAmount);
    
    
  return (
    <>
        <Helmet>
            <title>Cart</title>
        </Helmet>
        <section>
            <div>
                {cartproduct.length === 0 ? (
                    <div>
                        <h2>Cart is Epmty!</h2>
                    </div>
                ) : (
                    <div>
                        <div>
                            <table border={1}>
                                <thead>
                                    <th>R</th>
                                    <th>Product</th>
                                    <th>Image</th>
                                    <th>Number</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                </thead>
                                <tbody>
                                    {cartproduct.map((item,index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.title}</td>
                                            <td><img src={`http://localhost:9000/images/${item.sticker}`} alt="" className="w-24 h-24"/></td>
                                            <td><button className="w-10 bg-slate-600 rounded-sm text-white" onClick={() => handleDecreaseProNumber(item)}>-</button><input type="text" value={item.cartQty > 0 ? item.cartQty : 1} onChange={() => {
                                                //
                                            }} className="w-10 text-center" readOnly /><button className="w-10 bg-slate-600 rounded-sm text-white" onClick={() => handleIncreaseProNumber(item)}>+</button></td>
                                            <td>{item.price * item.cartQty}</td>
                                            <td><i className="fa fa-trash text-lg text-slate-700" role="button" onClick={() => handleRemoveFromCart(item.id)}></i></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <p>{cartTotalAmount}</p>
                        </div>
                    </div>
                )}

            </div>
        </section>
    </>
  )
}

export default Cart
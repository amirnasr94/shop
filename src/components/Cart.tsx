import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { Product } from "../constants/modal";
import { addToCart, computedTotal, deletFromCart, decreamentNumProduct } from "../redux/reduxReducer/cartSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import payPal from "../assets/images/paypa_icon.png";
import masterCard from "../assets/images/mastercard_icon.svg";
import visa from "../assets/images/visa_icon.svg";

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

    
  return (
    <>
        <Helmet>
            <title>Cart</title>
        </Helmet>
        <section className="h-full bg-slate-100">
            {cartproduct.length === 0 ? (
                <article className="text-center pt-20 h-max">
                    <h2 className="text-5xl font-bold mb-10">Cart is Epmty!</h2>
                    <Link to="/" className="w-52 inline-block bg-slate-600 p-3 rounded-md text-white">Back To Shop</Link>
                </article>
            ) : (
                <article className="h-full flex flex-1 flex-row-reverse">
                    <fieldset className="w-1/4 h-full relative bg-slate-600">
                        <div className="px-20 mt-28">
                            <h3 className="text-4xl text-yellow-600">Card Details</h3>
                                <form>
                                    <div className="text-gray-300">
                                        <div className="my-10">
                                            <p>Select Card Type:</p>
                                            <div className="flex">
                                                <img src={payPal} alt="paypal" className="w-1/3 px-4 cursor-pointer"/>
                                                <img src={masterCard} alt="master-card" className="w-1/3 px-4 cursor-pointer"/>
                                                <img src={visa} alt="visa" className="w-1/3 px-4 cursor-pointer"/>
                                            </div>
                                        </div>
                                        <div className="my-10">
                                            <p>Card Number:</p>
                                            <input type="text"  className="w-full bg-transparent border-b-2 focus:outline-none"/>
                                        </div>
                                        <div className="flex my-10">
                                            <div className="w-2/3">
                                                <p className="block">Expire Date</p>
                                                <input type="text"  className="w-12 bg-transparent border-b-2 focus:outline-none"/>/
                                                <input type="text"  className="w-12 bg-transparent border-b-2 focus:outline-none"/>/
                                                <input type="text"  className="w-12 bg-transparent border-b-2 focus:outline-none"/>

                                            </div>
                                            <div className="w-1/3">
                                                <p>CVV:</p>
                                                <input type="text"  className="w-full bg-transparent border-b-2 focus:outline-none"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                        </div>
                        <button className="w-full absolute bottom-0 bg-yellow-600 text-black p-5">Checkout</button>
                    </fieldset>
                    <fieldset className="w-3/4 h-full">
                        <div className="w-1/2 mx-auto mt-11">
                            {cartproduct.map(item => (
                                <div key={item.id} className="flex shadow-sm rounded-md bg-gray-200 mb-4 p-5 items-center text-center">
                                    <div className="w-1/4"><img src={`http://localhost:9000/images/${item.image}`} alt={item.name} className="w-20 rounded-full mx-auto"/></div>
                                    <div className="w-1/4">
                                        <p className="text-sm">{item.name}</p>
                                    </div>
                                    <div className="w-1/4 flex flex-row-reverse justify-center">
                                        <div>
                                            <button className="w-10 bg-slate-600 rounded-lg text-white block mb-2" onClick={() => handleIncreaseProNumber(item)}>+</button>
                                            <button className="w-10 bg-slate-500 rounded-lg text-white block" onClick={() => handleDecreaseProNumber(item)}>-</button>
                                        </div>
                                        <input type="text" value={item.cartQty > 0 ? item.cartQty : 1} className="w-10 text-center bg-transparent" readOnly />
                                    </div>
                                    <div className="w-1/4">
                                        <p>{(item.price * item.cartQty).toLocaleString()} $</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-end mt-20">
                                <div className="w-1/2"><Link to="/" className="hover:text-slate-500"><i className="fa fa-long-arrow-left mr-2"></i>Back To Shop</Link></div>
                                <div className="w-1/2 text-right">Subtotal: <p className="inline-block font-bold ml-4">{cartTotalAmount.toLocaleString()} $</p></div>
                            </div>
                        </div>
                    </fieldset>
                </article>
            )}

        </section>
    </>
  )
}

export default Cart;


{/* <div className="w-full h-full">
<div className="w-1/2 mx-auto pt-32"> 
    <table className="w-full text-center">
        <thead className="border-b-2">
            <th className="py-2">R</th>
            <th>Product</th>
            <th>Image</th>
            <th>Number</th>
            <th>Price</th>
            <th>Delete</th>
        </thead>
        <tbody>
            {cartproduct.map((item,index) => (
                <tr key={index} className="border-b-2">
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td><img src={`http://localhost:9000/images/${item.sticker}`} alt="" className="w-24 h-24 mx-auto rounded-md shadow-sm transition ease-in-out hover:brightness-110"/></td>
                    <td><button className="w-10 bg-slate-600 rounded-sm text-white" onClick={() => handleDecreaseProNumber(item)}>-</button><input type="text" value={item.cartQty > 0 ? item.cartQty : 1} onChange={() => {
                        //
                    }} className="w-10 text-center" readOnly /><button className="w-10 bg-slate-600 rounded-sm text-white" onClick={() => handleIncreaseProNumber(item)}>+</button></td>
                    <td><p className="text-lg">{item.price * item.cartQty} $</p></td>
                    <td><i className="fa fa-trash text-lg text-slate-700" role="button" onClick={() => handleRemoveFromCart(item.id)}></i></td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
<div className="w-1/2 mx-auto pt-32">
    <table className="w-full text-center">
        <thead>
            <th></th>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p>{cartTotalAmount}</p>
</div>
</div> */}
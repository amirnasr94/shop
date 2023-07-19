import {FC} from "react"
import {Product} from "../constants/modal";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/reduxReducer/cartSlice";
import { useAppDispatch } from "../hooks/customHooks";

interface Props{
    product:Product
}

const SingleProduct:FC<Props> = ({product}) => {
  const {id,name,image,price,score,stock} = product;
  const dispatch = useAppDispatch();
  const handleAddToCart = (item:Product) => {
    dispatch(addToCart(item));
  };
  
  return (
    <section>
        <Link to={`/shop/${id}`}>
            <div className="group relative hover:shadow-md px-3">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={`http://localhost:9000/images/${image}`} alt="" className="h-full w-full object-scale-down object-center lg:h-full lg:w-full"/>
                </div>
                <div className="mt-2">
                    <div className="lg:h-14 xl:h-12">
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {name}
                        </h3>
                    </div>
                    <div className="my-2 flex justify-between items-center">
                        <p className="mt-1 text-sm text-gray-500">{stock} left in stock</p>
                        <p><i className="fa fa-star text-yellow-500"></i> {score}</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium text-gray-900">{price.toLocaleString()} $</p>
                    </div>
                </div>
            </div>
        </Link>
        <button className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => handleAddToCart(product)}>Add To Cart</button>
    </section>
  )
}

export default SingleProduct;
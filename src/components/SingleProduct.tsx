import {FC} from "react"
import {Product} from "../constants/modal";
import { Link } from "react-router-dom";

interface Props{
    product:Product
}


const SingleProduct:FC<Props> = ({product}) => {
  const {id,name,image,price,score,stock} = product;

  return (
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
  )
}

export default SingleProduct;
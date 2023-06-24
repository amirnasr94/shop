import {FC} from "react"
import {Product} from "../constants/modal";
import { Link } from "react-router-dom";

interface Props{
    product:Product
}


const SingleProduct:FC<Props> = ({product}) => {
    const {id,sticker,title,price} = product;
  return (
    <Link to={`/shop/${id}`}>
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src={`http://localhost:9000/images/${sticker}`} alt="" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {title}
                </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{price.toLocaleString()} $</p>
            </div>
        </div>
    </Link>
  )
}

export default SingleProduct
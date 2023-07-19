import { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { selectById } from "../redux/reduxReducer/productSlice";
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import { Product } from "../constants/modal";
import { addToCart } from "../redux/reduxReducer/cartSlice";
import AdditionalDetails from './productExtra/AdditionalDetails';
import TechnicalDetails from './productExtra/TechnicalDetails';
import Comments from './productExtra/Comments';

const ProductDetails = () => {
  const [showAdditionalDetails,setShowAdditionalDetails] = useState<boolean>(false);
  const [showTechnicalDeatils,setShowTechnicalDeatils] = useState<boolean>(false);

  const {productID} = useParams();
  
  const product = useAppSelector(state => selectById(state,productID as string))
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item:Product) => {
      dispatch(addToCart(item));
      navigate("/cart")
  };
  
  return (
    <section className="relative">
      {product ? (
        <>
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <article className="grid w-8/12 h-min items-center m-auto sm:grid-cols-12 lg:gap-x-8 mb-4">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src={`http://localhost:9000/images/${product.image}`} alt="" className="object-cover object-center"/>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <div aria-labelledby="information-heading" className="">
                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12 py-2">{product.name}</h2>
                <p id="information-heading">{product.description}</p>
                <p className="text-2xl text-gray-900 py-2">${product.price}</p>
              </div>
              <div aria-labelledby="options-heading" className="mb-2">
                <h4 className="text-lg font-medium text-gray-900 py-2">Color</h4>
                <div className="flex items-center space-x-3">
                  {product.color.map((item,index) => (
                    <p aria-hidden="true" key={index} className={`h-8 w-8 bg-${item} rounded-full border border-black border-opacity-10 cursor-pointer`}></p>
                  ))}
                </div>
                </div>
                <div className="mb-3">
                  <h3 id="options-heading" className="text-lg text-black py-2">Product options</h3>
                  <ul>
                    {product.properties.map((item,index) => {
                      const [value] = Object.entries(item)
                      return (
                        <li key={index}><span className="text-gray-500">{value[0]}</span> : <span>{value[1]}</span></li>
                        )
                    })}
                  </ul>
                  <p className="text-green-900 py-4">The product is available!</p>
                </div>
                <button className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                <Link to="/" className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Back To Shop</Link>
            </div>
          </article>
          <AdditionalDetails showAdditionalDetails={showAdditionalDetails} setShowAdditionalDetails={setShowAdditionalDetails} productExtraDescription={product.extra_description}/>
          <TechnicalDetails showTechnicalDeatils={showTechnicalDeatils} setShowTechnicalDeatils={setShowTechnicalDeatils} productSpecification={product.specification}/>
          <Comments comments={product.comments}/>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  )
}

export default ProductDetails

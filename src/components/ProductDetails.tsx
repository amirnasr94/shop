import {useNavigate, useParams} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/customHooks";
import { selectById } from "../redux/reduxReducer/productSlice";
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import { Product } from "../constants/modal";
import { addToCart } from "../redux/reduxReducer/cartSlice";

const ProductDetails = () => {
  const {productID} = useParams();
  
  const product = useAppSelector(state => selectById(state,productID as string))
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item:Product) => {
      dispatch(addToCart(item));
      navigate("/cart")
  };
  console.log(product);
  
  return (
    <section className="w-full h-full relative mt-20">
      {product ? (
        <>
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <section className="grid w-8/12 h-min items-center m-auto grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <article className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src={`http://localhost:9000/images/${product.image}`} alt="" className="object-cover object-center"/>
            </article>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
              <div aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading">{product.description}</h3>
                <p className="text-2xl text-gray-900">${product.price}</p>
              </div>
              <article aria-labelledby="options-heading" className="mt-10">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Color</h4>
                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a color</legend>
                      <span className="flex items-center space-x-3">
                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
                          <span id="color-choice-0-label" className="sr-only">White</span>
                          <span aria-hidden="true" className="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                        </label>
                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                          <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
                          <span id="color-choice-1-label" className="sr-only">Gray</span>
                          <span aria-hidden="true" className="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                        </label>
                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                          <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label"/>
                          <span id="color-choice-2-label" className="sr-only">Black</span>
                          <span aria-hidden="true" className="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                        </label>
                      </span>
                    </fieldset>
                  </div>
                <h3 id="options-heading" className="text-black">Product options</h3>
                {product.properties.map((item,index) => {
                  const [value] = Object.entries(item)
                  return (
                    <li key={index}><span className="text-gray-500">{value[0]}</span> : <span>{value[1]}</span></li>
                    )
                  })}
                <p className="text-green-900">The product is available!</p>
                <button className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                <Link to="/" className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Back To Shop</Link>
              </article>
            </div>
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  )
}

export default ProductDetails

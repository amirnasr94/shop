import {useParams} from "react-router-dom";
import { useAppSelector } from "../hooks/customHooks";
import { selectById } from "../redux/reduxReducer/productSlice";
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import NumberOfProductForm from "./NumberOfProductForm";

const ProductDetails = () => {
  const {productID} = useParams();
  
  const product = useAppSelector(state => selectById(state,productID as string))
  console.log(product);
  
  return (
    <section className="w-full h-full relative mt-20">
      {product ? (
        <>
          <Helmet>
            <title>{product.title}</title>
          </Helmet>
          <div className="grid w-6/12 h-min items-center m-auto grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src={`http://localhost:9000/images/${product.sticker}`} alt="" className="object-cover object-center"/>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>
              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading">{product.description}</h3>
                <p className="text-2xl text-gray-900">${product.price}</p>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">Product options</h3>

                {/* <form>
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

                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">Size</h4>
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                    </div>

                    <fieldset className="mt-4">
                      <legend className="sr-only">Choose a size</legend>
                      <div className="grid grid-cols-4 gap-4">
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label"/>
                          <span id="size-choice-0-label">XXS</span>
                          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label"/>
                          <span id="size-choice-1-label">XS</span>
                          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label"/>
                          <span id="size-choice-2-label">S</span>
                          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label"/>
                          <span id="size-choice-3-label">M</span>
                          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label"/>
                          <span id="size-choice-4-label">L</span>
                          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label"/>
                          <span id="size-choice-5-label">XL</span>
                          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                          <input type="radio" name="size-choice" value="XXL" className="sr-only" aria-labelledby="size-choice-6-label"/>
                          <span id="size-choice-6-label">XXL</span>
                          <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </label>
                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                          <input type="radio" name="size-choice" value="XXXL" disabled className="sr-only" aria-labelledby="size-choice-7-label"/>
                          <span id="size-choice-7-label">XXXL</span>
                          <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                            <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                              <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                            </svg>
                          </span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                </form> */}
                <NumberOfProductForm pro={product}/>
                <Link to="/" className="mt-1 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Back To Shop</Link>
              </section>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  )
}

export default ProductDetails

import { useAppSelector } from "../hooks/customHooks";
import { selectAll } from "../redux/reduxReducer/productSlice"
import SingleProduct from "./Product";

const Shop = () => {
    const allProduct = useAppSelector(selectAll);
    const status = useAppSelector(state => state.products.status);

  return (
    <section className="w-full h-full">
        <div></div>
        <div className="flex">
            <aside className="w-1/4 bg-slate-500">asd</aside>
            <article className="w-3/4 bg-orange-300">
                {
                    status === "pending" ? (
                        <div>
                            <h3>Loading...</h3>   
                        </div>
                    ) : status === "succeeded" ? (
                        <div className="bg-white">
                            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 lg:max-w-7xl lg:px-8">
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-6">
                            {allProduct.map((product,index) => (
                                <SingleProduct key={index} product={product}/>
                            ))}
                            </div>
                        </div>

                    ) : (
                        <div>
                            <h3>sorry! we have a problem.</h3>
                        </div>
                    )
                }
            </article>
        </div>
    </section>
  )
}

export default Shop
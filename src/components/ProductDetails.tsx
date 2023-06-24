import {useParams} from "react-router-dom";

const ProductDetails = () => {
    const {productID} = useParams();
    
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails
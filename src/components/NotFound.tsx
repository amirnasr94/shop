import {useRouteError} from "react-router-dom";
const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    
  return (
    <div id="error" className="text-center mt-10">
        error
        {/* <h3>{error.statusText || error.}</h3> */}
    </div>
  )
}

export default NotFound
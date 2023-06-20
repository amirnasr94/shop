import {Helmet} from "react-helmet";
import MainLayout from "../layout/MainLayout"
import ShopHeader from "./components/ShopHeader";
import Shop from "./components/Shop";

const App = () => {
  return (
    <>
      <MainLayout>
        <Helmet>
          <title>Shop</title>
        </Helmet>
        <ShopHeader/>
        <Shop/>
      </MainLayout>
    </>
  )
}

export default App

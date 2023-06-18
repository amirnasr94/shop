import {Helmet} from "react-helmet";
import MainLayout from "../layout/MainLayout"
import ShopHeader from "./components/ShopHeader";

const App = () => {
  return (
    <>
      <MainLayout>
        <Helmet>
          <title>Shop</title>
        </Helmet>
        <ShopHeader/>
      </MainLayout>
    </>
  )
}

export default App

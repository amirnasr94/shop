import {Helmet} from "react-helmet";
import MainLayout from "./layout/MainLayout"
import Shop from "./components/Shop";

const App = () => {
  return (
    <>
      <MainLayout>
        <Helmet>
          <title>Shop</title>
        </Helmet>
        <Shop/>
      </MainLayout>
    </>
  )
}

export default App

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./redux/reduxStore/store"
import {RouterProvider} from "react-router-dom";
import { router } from './router';
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)

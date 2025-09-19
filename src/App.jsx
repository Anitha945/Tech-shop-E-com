import React from 'react'
import Practice from './Practice.jsx'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
// import Navigations from "./navigations/Navigations.js";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Advatages from './component/Advatages.jsx'
// import Advantages from './component/Advatages.jsx'
import TechShop from './pages/AllProduct.jsx'
import AllProductsPage from './pages/AllProduct.jsx'
import Navigations from './navigations/Navigations.jsx'
import Advantages from './component/Advantages.jsx'
const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />

      <Header />
      {/* <Home/> */}
      {/* <Navigations /> */}
      <Navigations/>
      {/* <TechShop/> */}
      {/* <AllProductsPage/> */}
      {/* <Advantages/> */}
      <Advantages/>
      <Footer />
      {/* <Cart/> */}
    </div>
  )
}

export default App
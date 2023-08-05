import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/Shop-context";


import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';





const Allroutes = () => {
    return (
      <ShopContextProvider>
     <Routes>
        <Route path = "/" element = {<Shop/>}/>
        <Route path = "/cart" element = {<Cart/>} />

      </Routes>
     </ShopContextProvider>


     































        

    )
}

export default Allroutes
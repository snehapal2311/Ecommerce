import React from "react";
import { PRODUCT } from "../../products";
import { Product } from "./product";
import "./shop.css";

 const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shopsy</h1>
      </div>

      <div className="products">
        {PRODUCT.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};




export default Shop
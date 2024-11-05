// Home.js
import React from "react";
import DisplayProducts from "./displayProducts";

const Home = ({ products, handleQuantityChange }) => {
  return (
    <div>
      <DisplayProducts products={products} handleQuantityChange={handleQuantityChange} />
    </div>
  );
};

export default Home;

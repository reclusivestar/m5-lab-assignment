// App.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import productsData from "./products";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import "./App.css"; // Import custom CSS

class App extends Component {
  state = {
    products: productsData,
  };

  // Calculate total quantity in cart
  getTotalQuantity = () => {
    return this.state.products
      .map(product => product.quantity)
      .reduce((total, qty) => total + qty, 0);
  };

  // Handle quantity change
  handleQuantityChange = (id, newQuantity) => {
    this.setState(prevState => {
      const updatedProducts = prevState.products.map(product =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      );
      return { products: updatedProducts };
    });
  };

  // // Handle item removal
  // handleRemove = (id) => {
  //   this.setState(prevState => {
  //     const updatedProducts = prevState.products.map(product =>
  //       product.id === id ? { ...product, quantity: 0 } : product
  //     );
  //     return { products: updatedProducts };
  //   });
  // };

  render() {
    return (
      <Router>
        <div className="container mt-4">
          <Navbar totalQuantity={this.getTotalQuantity()} />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={this.state.products}
                  handleQuantityChange={this.handleQuantityChange}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  products={this.state.products}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

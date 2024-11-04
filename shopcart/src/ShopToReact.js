import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const products = [
  { id: 1, name: "Unisex Cologne", image: "/products/cologne.jpg", quantity: 0 },
  { id: 2, name: "Apple iWatch", image: "/products/iwatch.jpg", quantity: 0 },
  { id: 3, name: "Unique Mug", image: "/products/mug.jpg", quantity: 0 },
  { id: 4, name: "Mens Wallet", image: "/products/wallet.jpg", quantity: 0 },
];

class ShopToReact extends Component {
  state = {
    products,
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

  render() {
    return (
      <div className="container mt-4">
        {/* Header Section */}
        <div style={{ backgroundColor: "#00C0F3", padding: "40px" }}>
          <header className="d-flex justify-content-between align-items-center">
            <h1>Shop to React</h1>
            <div>
              <FontAwesomeIcon icon={faShoppingCart} />{" "}
              <span>{this.getTotalQuantity()} items</span>
            </div>
          </header>
        </div>

        {/* Product List */}
        {this.state.products.map(product => (
          <div
            key={product.id}
            className="d-flex align-items-center border-bottom py-3"
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px", height: "auto", marginRight: "20px" }}
            />
            <div className="flex-grow-1">
              <h4>{product.name}</h4>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="number"
                value={product.quantity}
                min="0"
                className="form-control"
                style={{ width: "60px", marginRight: "10px" }}
                onChange={(e) =>
                  this.handleQuantityChange(product.id, parseInt(e.target.value))
                }
              />
              <span>quantity</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShopToReact;

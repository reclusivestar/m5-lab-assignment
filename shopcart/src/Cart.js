import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap"; // Added Button import
import Login from "./Login"; // Import your existing Login component
import "./Cart.css"; // Optional for styling
import { Link } from "react-router-dom";

const Cart = ({ products }) => {
  const [showLogin, setShowLogin] = useState(false); // State to toggle Login component

  const handleCheckout = () => {
    setShowLogin(true); // Show Login component when button is clicked
  };

  const cartItems = products.filter(product => product.quantity > 0);

  return (
    <div className="cart-container">
      {showLogin ? (
        <Login /> // Render the Login component if showLogin is true
      ) : (
        <>
          <h2>Your Cart Items</h2>
          {cartItems.length === 0 ? (
            <>
            <p>There are 0 items in your cart.</p>
            <Link to="/">
                 <Button variant="success">Continue Shop </Button>
            </Link>
            </>
            
          ) : (
            <>
              <Row>
                {cartItems.map(product => (
                  <Col md={12} key={product.id} className="mb-3">
                    <Card className="p-3">
                      <Row className="align-items-center">
                        <Col xs={3}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid"
                          />
                        </Col>
                        <Col xs={9}>
                          <h5>{product.name}</h5>
                          <p>Quantity: {product.quantity}</p>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className="text-center mt-4">
                <Button
                  variant="primary"
                  onClick={handleCheckout} // Add onClick handler
                >
                  Checkout
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;

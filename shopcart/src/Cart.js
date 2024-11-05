// Cart.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Cart.css"; // Optional for styling

const Cart = ({ products }) => {
  const cartItems = products.filter(product => product.quantity > 0);

  return (
    <div className="cart-container">
      <h2>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;

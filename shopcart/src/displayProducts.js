import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DisplayProducts = ({ products, handleQuantityChange }) => {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});
  const [sortOrder, setSortOrder] = useState("normal"); // Track sorting order

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImage(product);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "lowest") return a.price - b.price;
    if (sortOrder === "highest") return b.price - a.price;
    return a.id - b.id; // Default sorting by id
  });

  return (
    <div>
      {/* Dropdown menu for sorting */}
      <div className="mb-4">
        <label htmlFor="sort" className="me-2">
          Sort By:
        </label>
        <select
          id="sort"
          className="form-select w-auto d-inline"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="normal">Normal</option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </div>

      {/* Display products */}
      {sortedProducts.map((product) => (
        <div
          key={product.id}
          className="d-flex align-items-center border-bottom py-3"
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100px",
              height: "auto",
              marginRight: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleShow(product)}
          />
          <div className="flex-grow-1">
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="number"
              value={product.quantity}
              min="0"
              className="form-control"
              style={{ width: "60px", marginRight: "10px" }}
              onChange={(e) =>
                handleQuantityChange(product.id, parseInt(e.target.value))
              }
            />
            <span>quantity</span>
          </div>
        </div>
      ))}

      {/* Modal for product details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImage.image}
            width="350"
            alt={showImage.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings:</span> {showImage.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DisplayProducts;

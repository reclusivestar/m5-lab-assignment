// displayProducts.js
import React from "react";
import { useState } from "react"
import { Modal } from 'react-bootstrap';

const DisplayProducts = ({ products, handleQuantityChange }) => {
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState({})
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImage(product);
    }

    return (
        <div>
        {products.map(product => (
            <div
            key={product.id}
            className="d-flex align-items-center border-bottom py-3"
            >
            <img
                src={product.image}
                alt={product.name}
                style={{ width: "100px", height: "auto", marginRight: "20px", cursor: "pointer" }}
                onClick={() => handleShow(product)}
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
                    handleQuantityChange(product.id, parseInt(e.target.value))
                }
                />
                <span>quantity</span>
            </div>
            </div>
        ))}
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

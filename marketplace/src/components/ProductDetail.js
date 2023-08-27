import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../styles/ProductDetail.css';

function ProductDetail({ product, showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{product.details}</p>
        <p>Preço: ${product.price}</p>
        <p>Marca: {product.seller}</p>
        <p>Tamanhos Disponíveis: {product.available_sizes.join(', ')}</p>
        <p>Esporte: {product.sport}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetail;

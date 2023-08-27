import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import '../styles/ProductList.css';

function ProductList({ products }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <section className="product-list">

      { products.map((product, index) => (
        <div key={ index } className="product-card">
          <Card style={{ borderStyle: 'none' }}>
            <Card.Img src={ product.image_url }/>
            <Card.Body>
              <Card.Title>{ product.name }</Card.Title>
              <Card.Text>R$ { String(product.price).replace('.', ',') }</Card.Text>
              <Button type="button" class="btn" variant="outline-secondary" onClick={ () => handleProductClick(product) }>Detalhes</Button>
            </Card.Body>
          </Card>
        </div>
      )) }

      { selectedProduct && (
        <Modal show={ showModal } centered onHide={ () => setShowModal(false) }>
          <Modal.Header closeButton>
              <Modal.Title>{ selectedProduct.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img src={ selectedProduct.image_url } />
            <Card.Text>Tamanhos Disponíveis <br />
              { selectedProduct.available_sizes.join(', ') }
            </Card.Text>
            <Card.Text>R$ { String(selectedProduct.price).replace('.', ',') }</Card.Text>
            <Card.Text>Descrição <br />
              { selectedProduct.details }
            </Card.Text>
            <Modal.Footer className="grid-example">
              <Container>
                <Row>
                  <Col>
                    Tipo: { selectedProduct.type }
                  </Col>
                  <Col>
                    Marca: { selectedProduct.seller }
                  </Col>
                  <Col>
                    Esporte: { selectedProduct.sport }
                  </Col>
                </Row>
              </Container>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      ) }

    </section>
  );
}

export default ProductList;

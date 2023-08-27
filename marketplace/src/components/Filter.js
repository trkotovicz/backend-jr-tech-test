import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/Filter.css';

function Filter({ categories, handleCategoryChange }) {
  return (
    <Form>
      <Form.Group className="mb-5" controlId="exampleForm.ControlSelect1">
        <Form.Label>Filtrar Categoria</Form.Label>
        <Form.Select size='sm' onChange={ handleCategoryChange }>
          <option value="">Todas</option>
          { categories.map((category, index) => (
            <option key={ index } value={ category }>
              { category }
            </option>
          )) }
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Filter;

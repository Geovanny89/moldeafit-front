import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateProduct } from '../../../../Redux/Action';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function Actualizar({id}) {
  const dispatch = useDispatch();
 

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    stock: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const imagesArray = formData.image.split(',');

  // Actualizar el formData con el array de imágenes
  const updatedFormData = { ...formData, image: imagesArray };
   try {
    dispatch(updateProduct(id, updatedFormData));
   } catch (error) {
    console.log(error)
        throw(error)
   }
    
  };

  return (
    <div>
      <h2>Actualizar Producto</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required={true} />
          </Col>
          <Col>
            <Form.Label>Precio:</Form.Label>
            <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} required={true}/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Stock:</Form.Label>
            <Form.Control type="text" name="stock" value={formData.stock} onChange={handleChange} required={true} />
          </Col>
          <Col>
            <Form.Label>Descripción:</Form.Label>
            <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} required={true} />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formProductImage">
          <Form.Label>Imagen:</Form.Label>
          <Form.Control type="text" name="image" value={formData.image} onChange={handleChange} required={true} />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Button variant="primary" type="submit">
              Actualizar Producto
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" href='/admin' >
              Volver
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCarProduct, getDetailProduct } from '../../Redux/Action';
import { Container, Row, Col,  Image, Button } from 'react-bootstrap';
import './detail.css'

export default function Details({ id }) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito
    dispatch(addCarProduct(detail._id,quantity))
  };

  return (
    <Container className="detail">
     
      {detail && detail.image && detail.image.length > 0 && (
        <Row>
          <Col md={2}>
            <div className="thumbnail-container">
              {detail.image.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`thumbnail ${index === selectedImage ? 'selected' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                  fluid
                />
              ))}
            </div>
          </Col>
          <Col md={6} className="img-center">
            <Image src={detail.image[selectedImage]} alt={`Selected Image`} fluid />
          </Col>
          
          <Col md={4}>
          <a href="">Volver</a>
            <div className="details-info">
              <h2>{detail.name}</h2>
              <p className="text-muted">Marca: {detail.brand}</p>
              <p className="text-muted">Descripción: {detail.description}</p>
              
              <p className="price">Precio: ${detail.price}</p>
              <p>Stock: {detail.stock}</p>
              <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
              
          <Button variant="secondary" onClick={handleAddToCart}>Agregar a Carrito</Button>
            </div>
          </Col>
          
        </Row>
        
      )}
      
    </Container>
  );
}

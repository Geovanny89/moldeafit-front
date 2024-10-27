import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { crateProduct } from '../../../Redux/Action';
import './crearProductos.css';

export default function CrearProductos() {
    const dispatch = useDispatch();
    const tipeProductos = useSelector((state) => state.tipeProducts);

    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
        tipoId: '',
    });

    const [images, setImages] = useState([]); // Estado para las imágenes
    const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setImages([...e.target.files]); // Actualiza el estado con los archivos seleccionados
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Agrega los campos del producto al FormData
        for (const key in product) {
            formData.append(key, product[key]);
        }
        
        // Agrega las imágenes al FormData
        for (const image of images) {
            formData.append('image', image); // 'image' es el nombre que esperas en el servidor
        }

        console.log('Formulario enviado:', product);
        try {
            // Llamada a la acción para crear el producto
            await dispatch(crateProduct(formData));

            // Mostrar mensaje de éxito
            setSuccessMessage('Producto creado exitosamente');

            // Restablecer el formulario o redirigir si es necesario
            setProduct({
                name: '',
                price: '',
                stock: '',
                description: '',
                tipoId: '',
            });
            setImages([]); // Reinicia las imágenes

            // Limpiar el mensaje después de 3 segundos
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            console.error('Error al crear el Producto:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="crear-productos-form mt-3">
            {successMessage && (
                <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
                    {successMessage}
                </Alert>
            )}
            <Row className="mb-3">
                <Col xs={12} md={6}>
                    <Form.Group controlId="productName">
                        <Form.Label>Nombre del Producto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del producto"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group controlId="productTipoId">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control
                            as="select"
                            name="tipoId"
                            value={product.tipoId}
                            onChange={handleChange}
                            required={true}
                        >
                            <option value="">Seleccione un tipo de ID</option>
                            {tipeProductos.map((tipo) => (
                                <option key={tipo._id} value={tipo._id}>
                                    {tipo.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12} md={6}>
                    <Form.Group controlId="productPrice">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el precio"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group controlId="productStock">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese la cantidad en stock"
                            name="stock"
                            value={product.stock}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Form.Group controlId="productDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Ingrese la descripción"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Form.Group controlId="productImages">
                        <Form.Label>Imágenes</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                            required={true}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Button variant="primary" type="submit">
                        Crear Producto
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Button variant="secondary" type="button" onClick={() => window.location.href = '/admin'}>
                        Volver
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

// import React, { useState } from 'react';
// import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { crateProduct } from '../../../Redux/Action';
// import './crearProductos.css';

// export default function CrearProductos() {
//     const dispatch = useDispatch();
//     const tipeProductos = useSelector((state) => state.tipeProducts);

//     const [product, setProduct] = useState({
//         name: '',
//         price: '',
//         stock: '',
//         description: '',
//         tipoId: '',
//     });

//     const [images, setImages] = useState([]); // Estado para las imágenes
//     const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({
//             ...product,
//             [name]: value,
//         });
//     };

//     const handleImageChange = (e) => {
//         setImages([...e.target.files]); // Actualiza el estado con los archivos seleccionados
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
        
//         // Agrega los campos del producto al FormData
//         for (const key in product) {
//             formData.append(key, product[key]);
//         }
        
//         // Agrega las imágenes al FormData
//         for (const image of images) {
//             formData.append('image', image); // 'image' es el nombre que esperas en el servidor
//         }

//         console.log('Formulario enviado:', product);
//         try {
//             // Llamada a la acción para crear el producto
//             await dispatch(crateProduct(formData));

//             // Mostrar mensaje de éxito
//             setSuccessMessage('Producto creado exitosamente');

//             // Restablecer el formulario o redirigir si es necesario
//             setProduct({
//                 name: '',
//                 price: '',
//                 stock: '',
//                 description: '',
//                 tipoId: '',
//             });
//             setImages([]); // Reinicia las imágenes

//             // Limpiar el mensaje después de 3 segundos
//             setTimeout(() => {
//                 setSuccessMessage('');
//             }, 3000);
//         } catch (error) {
//             console.error('Error al crear el Producto:', error);
//         }
//     };

//     return (
//         <Form onSubmit={handleSubmit} className="crear-productos-form mt-3">
//             {successMessage && (
//                 <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
//                     {successMessage}
//                 </Alert>
//             )}
//             <Row className="mb-3">
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productName">
//                         <Form.Label>Nombre del Producto</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Ingrese el nombre del producto"
//                             name="name"
//                             value={product.name}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productTipoId">
//                         <Form.Label>Categoría</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="tipoId"
//                             value={product.tipoId}
//                             onChange={handleChange}
//                             required={true}
//                         >
//                             <option value="">Seleccione un tipo de ID</option>
//                             {tipeProductos.map((tipo) => (
//                                 <option key={tipo._id} value={tipo._id}>
//                                     {tipo.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productPrice">
//                         <Form.Label>Precio</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Ingrese el precio"
//                             name="price"
//                             value={product.price}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productStock">
//                         <Form.Label>Stock</Form.Label>
//                         <Form.Control
//                             type="number"
//                             placeholder="Ingrese la cantidad en stock"
//                             name="stock"
//                             value={product.stock}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Form.Group controlId="productDescription">
//                         <Form.Label>Descripción</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             placeholder="Ingrese la descripción"
//                             name="description"
//                             value={product.description}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Form.Group controlId="productImages">
//                         <Form.Label>Imágenes</Form.Label>
//                         <Form.Control
//                             type="file"
//                             accept="image/*"
//                             multiple
//                             onChange={handleImageChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Button variant="primary" type="submit">
//                         Crear Producto
//                     </Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col xs={12}>
//                     <Button variant="secondary" type="button" onClick={() => window.location.href = '/admin'}>
//                         Volver
//                     </Button>
//                 </Col>
//             </Row>
//         </Form>
//     );
// }
// import React, { useState } from 'react';
// import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { crateProduct } from '../../../Redux/Action';
// import './crearProductos.css';

// export default function CrearProductos() {
//     const dispatch = useDispatch();
//     const tipeProductos = useSelector((state) => state.tipeProducts);

//     const [product, setProduct] = useState({
//         name: '',
//         price: '',
//         stock: '',
//         description: '',
//         tipoId: '',
//         sise: [], // Cambiado a array
//         color: [] // Cambiado a array
//     });

//     const [images, setImages] = useState([]);
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({
//             ...product,
//             [name]: value,
//         });
//     };

//     const handleSiseChange = (e) => {
//         const value = e.target.value.split(',').map(s => s.trim()); // Convierte la entrada en un array
//         setProduct({
//             ...product,
//             sise: value,
//         });
//     };

//     const handleColorChange = (e) => {
//         const value = e.target.value.split(',').map(c => c.trim()); // Convierte la entrada en un array
//         setProduct({
//             ...product,
//             color: value,
//         });
//     };

//     const handleImageChange = (e) => {
//         setImages([...e.target.files]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();

//         // Agrega los campos del producto al FormData
//         for (const key in product) {
//             if (Array.isArray(product[key])) {
//                 product[key].forEach(item => formData.append(key, item)); // Agrega cada elemento del array al FormData
//             } else {
//                 formData.append(key, product[key]);
//             }
//         }

//         // Agrega las imágenes al FormData
//         for (const image of images) {
//             formData.append('image', image);
//         }

//         console.log('Formulario enviado:', product);
//         try {
//             await dispatch(crateProduct(formData));

//             setSuccessMessage('Producto creado exitosamente');

//             setProduct({
//                 name: '',
//                 price: '',
//                 stock: '',
//                 description: '',
//                 tipoId: '',
//                 sise: [], // Restablecer sise
//                 color: [] // Restablecer color
//             });
//             setImages([]);

//             setTimeout(() => {
//                 setSuccessMessage('');
//             }, 3000);
//         } catch (error) {
//             console.error('Error al crear el Producto:', error);
//         }
//     };

//     return (
//         <Form onSubmit={handleSubmit} className="crear-productos-form mt-3">
//             {successMessage && (
//                 <Alert variant="success" onClose={() => setSuccessMessage('')} dismissible>
//                     {successMessage}
//                 </Alert>
//             )}
//             <Row className="mb-3">
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productName">
//                         <Form.Label>Nombre del Producto</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Ingrese el nombre del producto"
//                             name="name"
//                             value={product.name}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productTipoId">
//                         <Form.Label>Categoría</Form.Label>
//                         <Form.Control
//                             as="select"
//                             name="tipoId"
//                             value={product.tipoId}
//                             onChange={handleChange}
//                             required={true}
//                         >
//                             <option value="">Seleccione un tipo de ID</option>
//                             {tipeProductos.map((tipo) => (
//                                 <option key={tipo._id} value={tipo._id}>
//                                     {tipo.name}
//                                 </option>
//                             ))}
//                         </Form.Control>
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productPrice">
//                         <Form.Label>Precio</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Ingrese el precio"
//                             name="price"
//                             value={product.price}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//                 <Col xs={12} md={6}>
//                     <Form.Group controlId="productStock">
//                         <Form.Label>Stock</Form.Label>
//                         <Form.Control
//                             type="number"
//                             placeholder="Ingrese la cantidad en stock"
//                             name="stock"
//                             value={product.stock}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Form.Group controlId="productDescription">
//                         <Form.Label>Descripción</Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             placeholder="Ingrese la descripción"
//                             name="description"
//                             value={product.description}
//                             onChange={handleChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Form.Group controlId="productSise">
//                         <Form.Label>Tallas</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Ingrese las tallas (ej: XXS, XS, S, M, L, XL, XXL)"
//                             value={product.sise.join(', ')} // Mostrar como texto
//                             onChange={handleSiseChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Form.Group controlId="productColor">
//                         <Form.Label>Colores</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Ingrese los colores (ej: Negro, Beis)"
//                             value={product.color.join(', ')} // Mostrar como texto
//                             onChange={handleColorChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Form.Group controlId="productImages">
//                         <Form.Label>Imágenes</Form.Label>
//                         <Form.Control
//                             type="file"
//                             accept="image/*"
//                             multiple
//                             onChange={handleImageChange}
//                             required={true}
//                         />
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row className="mb-3">
//                 <Col xs={12}>
//                     <Button variant="primary" type="submit">
//                         Crear Producto
//                     </Button>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col xs={12}>
//                     <Button variant="secondary" type="button" onClick={() => window.location.href = '/admin'}>
//                         Volver
//                     </Button>
//                 </Col>
//             </Row>
//         </Form>
//     );
// }
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
        sise: [],
        color: []
    });

    const [images, setImages] = useState([]); // Guardar las imágenes seleccionadas
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSiseChange = (e) => {
        const value = e.target.value.split(',').map(s => s.trim());
        setProduct({
            ...product,
            sise: value,
        });
    };

    const handleColorChange = (e) => {
        const value = e.target.value.split(',').map(c => c.trim());
        setProduct({
            ...product,
            color: value,
        });
    };

    // Maneja la carga de imágenes
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages([...images, ...files]); // Añadir las nuevas imágenes a las existentes
    };

    // Maneja la eliminación de una imagen
    const handleImageDelete = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Agrega los campos del producto
        for (const key in product) {
            if (Array.isArray(product[key])) {
                product[key].forEach(item => formData.append(key, item));
            } else {
                formData.append(key, product[key]);
            }
        }

        // Agrega las imágenes seleccionadas al FormData
        images.forEach(image => formData.append('image', image));

        try {
            await dispatch(crateProduct(formData));
            setSuccessMessage('Producto creado exitosamente');

            setProduct({
                name: '',
                price: '',
                stock: '',
                description: '',
                tipoId: '',
                sise: [],
                color: []
            });
            setImages([]); // Limpiar las imágenes seleccionadas

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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Form.Group controlId="productSise">
                        <Form.Label>Tallas</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese las tallas (ej: XXS, XS, S, M, L, XL, XXL)"
                            value={product.sise.join(', ')}
                            onChange={handleSiseChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Form.Group controlId="productColor">
                        <Form.Label>Colores</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese los colores (ej: Negro, Beis)"
                            value={product.color.join(', ')}
                            onChange={handleColorChange}
                            required
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
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>

            {/* Mostrar los nombres de las imágenes seleccionadas */}
            {images.length > 0 && (
                <div className="image-preview">
                    <h5>Archivos seleccionados:</h5>
                    <ul>
                        {images.map((image, index) => (
                            <li key={index}>
                                {image.name}
                                <button
                                    type="button"
                                    className="btn-delete"
                                    onClick={() => handleImageDelete(index)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

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

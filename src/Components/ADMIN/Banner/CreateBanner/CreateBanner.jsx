import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createBanner } from '../../../../Redux/Action';

export default function CreateBanner() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(null);
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !link || !image) {
            alert('Por favor, complete todos los campos');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('link', link);
        formData.append('image', image);
        try {
            // Enviar datos al servidor a través de la acción createBanner
            await dispatch(createBanner(formData));
            alert('Banner creado exitosamente.');
            setTitle('');
            setLink('');
            setImage(null);
        } catch (error) {
            console.error(error);
            alert('Error al crear el banner.');
        }
    }
    return (
        <div>
            <h2>Crear Banner</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el título" value={title} onChange={handleTitleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="link">
                    <Form.Label>Enlace</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el enlace" value={link} onChange={handleLinkChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear Banner
                </Button>
            </Form>
        </div>
    )

}

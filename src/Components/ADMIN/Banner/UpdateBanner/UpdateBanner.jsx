
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBanner } from '../../../../Redux/Action';
import { Form, Button, Alert } from 'react-bootstrap';

export default function UpdateBanner({ id }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('link', formData.link);
    formDataToSend.append('image', formData.image);

    try {
      // Enviar la solicitud de actualización
      await dispatch(updateBanner(id, formDataToSend));
      // Actualizar el mensaje de éxito
      setSuccessMessage('Banner actualizado con éxito');
      // Limpiar el formulario
      setFormData({
        title: '',
        link: '',
        image: null,
      });
    } catch (error) {
      console.error(error);
      // Puedes manejar errores aquí y mostrar un mensaje de error si es necesario
    }
  };

  return (
    <div>
      <h3>Actualizar Banner</h3>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="link">
          <Form.Label>Enlace</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el enlace"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Actualizar
        </Button>
        <Button variant="primary" href='/admin'>
          Volver
        </Button>
      </Form>
    </div>
  );
}


import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Action/index';
import Logo from '../../Assets/LogoMoldea.png'

import './register.css';

export default function Register() {
  const dispatch = useDispatch();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    identity: '',
    email: '',
    password: '',
    phone: '',
    adress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(formData));
      console.log('Registration successful');
      setRegistrationSuccess(true);
      setEmailExists(false);
      setFormData({
        name: '',
        lastName: '',
        identity: '',
        email: '',
        password: '',
        phone: '',
        adress: '',
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.error === 'El correo electrónico ya está registrado'
      ) {
        setEmailExists(true);
        setRegistrationSuccess(false);
      } else {
        console.error('Error during registration:', error.message);
        setRegistrationSuccess(false);
        setEmailExists(false);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="contenedor-register">
      {registrationSuccess && (
        <div className="success-alert">
          <Typography variant="body1">Usuario registrado correctamente.</Typography>
        </div>
      )}
      {emailExists && (
        <div className="error-alert">
          <Typography variant="body1">El correo electrónico ya está registrado.</Typography>
        </div>
      )}
      <div>
        <form onSubmit={handleSubmit}>
        <div className="logo-contain">
          <img src={Logo} alt="Img Not Found" />
        </div>
        <hr />
          <Grid container spacing={1} >
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Apellido"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Identidad"
                name="identity"
                value={formData.identity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Dirección"
                name="adress"
                value={formData.adress}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Contraseña"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <div className="btn-register">
          <Button type="submit"  variant="outlined" size="small" color="primary">
            Registrarse
          </Button>
          <Button href="/login" type="submit" variant="outlined" size="small" color="secondary">
            Volver
          </Button>
          </div>
          
      
        </form>
      </div>
    </Container>
  );
}


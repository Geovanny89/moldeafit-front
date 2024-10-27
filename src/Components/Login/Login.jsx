import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import Logo from '../../Assets/LogoMoldea.png';
import './login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/Action/index'; // Importa la acción de login

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(login(formData));
    //   console.log('Rol del usuario:', response.data.user.rol);
      const userRole = response.data.user.rol[0];
      if (userRole === "admin") {
      
        // Almacena el token de sesión en las cookies
        Cookies.set('session', response.data.token, { expires: 2 });  // Configura la expiración según tus necesidades
        navigate('/admin');
      } else if (userRole === "user") {
        Cookies.set('session', response.data.token, { expires: 2 });
        navigate('/products');
      } else {
        setIsUserRegistered(false);
      }
    } catch (error) {
      setIsUserRegistered(false);
      console.error('Error al iniciar sesión:', error.message);
    }
  };


  return (
    <Container component="main" maxWidth="xs" className="container-login">
      <div className="login-content">
      <Button variant="primary" href='/'>
          Volver
        </Button>
        <div className="logo-container">
          <img src={Logo} alt="Img Not Found" />
        </div>
       
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="buton-register">
          <Button type="submit" fullWidth variant="contained" color="primary">
            Iniciar Sesión
          </Button>
          <a href="/register">Registrate</a>
          </div>
          
          {!isUserRegistered && (
          <Typography variant="body2" className="error-message">
            No estás registrado.
            
          
            ¡Regístrate ahora para acceder a nuestra tienda! 
             
          </Typography>
          
        )}
        </form>
        
      </div>
     
    </Container>
  );
}
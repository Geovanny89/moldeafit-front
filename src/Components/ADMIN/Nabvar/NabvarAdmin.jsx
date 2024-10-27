import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../../../Assets/logo.png';
import { useDispatch } from 'react-redux';
import { logout } from '../../../Redux/Action';
import { useNavigate } from 'react-router-dom';

export default function NavbarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#2E66C1', height: 70 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={Logo} alt="Img Not Found" width="120px" height="70px" style={{ borderRadius: '5px' }}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bienvenido al Módulo Admin de la tienda
          </Typography>
          <Button color='inherit' onClick={handleLogout} startIcon={<ExitToAppIcon />}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

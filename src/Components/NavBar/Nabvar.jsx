import React, { useEffect, useState } from 'react';
import { FaHome, FaList, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../Assets/LogoMoldea.png';
import { getAllCategories, getNameProducts } from '../../Redux/Action';
import Barra from '../utils/barra';
import './nabvar.css';

export default function Navbar({setCurrentPage}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.tipeProducts)
  const [name,setName]=useState("")

  useEffect(() => {
    dispatch(getAllCategories())
    dispatch(getNameProducts())
  }, [])

  function handleInputChange(e){
    
    dispatch(getNameProducts(e))  
    setCurrentPage(1)

}
  return (
    <div className="container text-center mt-7">
      {/* <Barra/> */}
      <nav className="navbar navbar-expand-lg   " style={{ backgroundColor: "#f7599b" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" ><img src={logo} alt="Img Not Found" width="100px"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><FaHome /> Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaList /> Categorias 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.length > 0 ? (
                    categories.map((category) => (
                      <li key={category._id}>
                        <a className="dropdown-item" href="#">
                          {category.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li >
                      <a className="dropdown-item" href="#">
                        Cargando categorías...
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
            <div>
              <input type="text" 
           placeholder="Buscar..."
           value={name}
           onChange={(e)=>{setName(e.target.value); handleInputChange(e.target.value)}}
              />
            </div>
            {/* Icono y enlace al carrito de compras */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><FaShoppingCart /> Carrito</a>
              </li>
            </ul>

            {/* Icono y enlace para iniciar sesión */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login"><FaSignInAlt /> Iniciar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

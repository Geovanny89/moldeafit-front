import React, { useEffect, useState } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewCarouselSharpIcon from '@mui/icons-material/ViewCarouselSharp';

import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NavbarAdmin from '../../ADMIN/Nabvar/NabvarAdmin';
import TipoProduct from '../TipoPodructo/crear/TipoProduct';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { allBanner, allCategories, allUserAdmin, deleteBanner, deleteProduct, deletecategory, getAllProduct } from '../../../Redux/Action';
import CrearProductos from '../CrearProductos/CrearProductos';

import Paginate from '../Paginado/Paginate';
import Actualizar from '../CrearProductos/ActualizarProductos/Actualizar';
import CreateBanner from '../Banner/CreateBanner/CreateBanner';
import UpdateBanner from '../Banner/UpdateBanner/UpdateBanner';
import UpdateTipoProducto from '../TipoPodructo/updateTipoProducto/UpdateTipoProducto';
// import CreateUsers from '../CrearUsuarios/CreateUsers';

export default function Dashboard() {
    const dispatch = useDispatch();

    //crear banner
    const [showCreateBanner, setShowCreateBanner] = useState(false)
    const [showViewsBanner, setShowViewBanner] = useState(false)
    const [showUpdateBanner,setShowUpdateBanner]= useState(false)
    //crear categotia producto
    const [showTipoProductForm, setShowTipoProductForm] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    // actualizar categoria
    const [showUpdateCategori, setShowUpdateCategori] = useState(false)
    

    //crear  productos
    const [showCreateProductForm, setShowCreateProductForm] = useState(false);
    // ver productos
    const [showViewProducts, setShowViewProducts] = useState(false)
    // actualizar productos 
    const [actualizarProduct, setActualizarProducts] = useState(null);
    // crear Usuarios
    // const [showUser,setShowUser]= useState(false)
    const [showViewUser, setShowViewerUser] = useState(false);

    //paginado productos
    const [currentProductPage, setCurrentProductPage] = useState(1);
    const [productsPerPage] = useState(8);
    //paginado categoria
    const [currentCategoriesPage, setCurrentCategoriesPage] = useState(1);
    const [categoriesPerPage] = useState(8);
    const [currentUserPage, setCurrentUserPage] = useState(1);
    const [userPerPage] = useState(8);


    //paginado Usuarios
    const tipeCategorias = useSelector((state) => state.tipeProducts);
    const allProducts = useSelector((state) => state.allProducts);
    const allUser = useSelector((state) => state.user)
    const allbanners = useSelector((state) => state.banners)
    
    // console.log(allUser)


    useEffect(() => {
        dispatch(allCategories());
        dispatch(allBanner())
    }, [dispatch]);

    //crear Banner
    const handleCreateBannerClick = () => {
        setShowCreateBanner(true)
        setShowViewBanner(false)
        setShowCategories(false);
        setShowCreateProductForm(false);
        setShowViewProducts(false);
        setShowViewerUser(false);
        setActualizarProducts(false)
        setShowUpdateBanner(false)
        setShowUpdateCategori(false)
    }
    //ver banner
    const handleViewBannerClick = () => {
        setShowViewBanner(true)
        setShowCreateBanner(false)
        setShowCategories(false);
        setShowCreateProductForm(false);
        setShowViewProducts(false);
        setShowViewerUser(false);
        setActualizarProducts(false)
        setShowUpdateBanner(false)
        setShowUpdateCategori(false)
    }

    //crear categoria
    const handleCreateCategoryClick = () => {
        setShowTipoProductForm(true);
        setShowCreateBanner(false)
        setShowViewBanner(false)
        setShowCategories(false);
        setShowCreateProductForm(false);
        setShowViewProducts(false);
        setShowViewerUser(false);
        setActualizarProducts(false)
        setShowUpdateBanner(false)
        setShowUpdateCategori(false)
        // setShowUser(false);
    };
    //ver categorias
    const handleViewCategoriesClick = () => {
        setShowCategories(true);
        setShowCreateBanner(false);
        setShowViewBanner(false)
        setShowTipoProductForm(false);
        setShowCreateProductForm(false);
        setShowViewProducts(false);
        setShowViewerUser(false);
        setActualizarProducts(false)
        setShowUpdateBanner(false)
        setShowUpdateCategori(false)
        // setShowUser(false);
    };
    //actualizar categoria
    const handleUpdateCategori=(id) =>{
        const categoriUpdate = tipeCategorias.find((categori => categori._id === id));
        setShowUpdateCategori(categoriUpdate);
    }
    //ELiminar Categoria
    const handleDeletecategori = (id) => {
        const confirmDelete = window.confirm("¿Estas seguro que quiere eliminar la PRoducto ?")
        if (confirmDelete) {
            dispatch(deletecategory(id))
        }
    }
    //crear producto
    const handleCreateProductClick = () => {
        setShowCreateProductForm(true);
        setShowCreateBanner(false)
        setShowViewBanner(false)
        setShowTipoProductForm(false);
        setShowCategories(false);
        setShowViewProducts(false);
        setShowViewerUser(false);
        setActualizarProducts(false)
        setShowUpdateBanner(false)
        setShowUpdateCategori(false)
        // setShowUser(false);
    };


    //ver productos
    const handleViewProductsClick = () => {
        dispatch(getAllProduct());
        setShowViewProducts(true);
        setShowCreateBanner(false)
        setShowViewBanner(false)
        setShowViewerUser(false);
        setShowCreateProductForm(false);
        setShowTipoProductForm(false);
        setShowCategories(false);
        setActualizarProducts(false)
        setShowUpdateBanner(false)
        setShowUpdateCategori(false)
        // setShowUser(false);
        // console.log("Nuevo Estado:", allProducts); // Agrega esta línea
    };

    //Eliminar Banner
    const handleDeleteBanner = (id)=>{
        const confirmDeleteBanner =window.confirm("¿Estas seguro que quiere eliminar el Banner ?")
        if(confirmDeleteBanner){
            dispatch(deleteBanner(id))
        }
    }
    //update Banner
    const handleUpdateBannerClick=(id)=>{
        const bannerUpdate = allbanners.find((ban => ban._id === id));
        setShowUpdateBanner(bannerUpdate);
        setShowViewerUser(false);
        setShowCreateBanner(false)
        setShowViewBanner(false)
        setShowCreateProductForm(false);
        setShowTipoProductForm(false);
        setShowCategories(false);
        setActualizarProducts(false)
        setShowUpdateCategori(false)
    }
    // Eliminar producto

    const handleDeleteProduct = (id) => {
        const confirmDelete = window.confirm("¿Estas seguro que quiere eliminar la PRoducto ?")
        if (confirmDelete) {
            dispatch(deleteProduct(id))
        }
    }
    //actualizar producto
    const handleUpdateProduct = (id) => {
        const productToUpdate = allProducts.find((product) => product._id === id);
        console.log(productToUpdate)
        setActualizarProducts(productToUpdate)
        setShowTipoProductForm(false);
        setShowCategories(false);
        setShowViewProducts(false);
        setShowViewerUser(false);
        setShowUpdateCategori(false)
    }
    // crear usuarios
    const handleCreateUserClick = () => {
        dispatch(allUserAdmin())
        setShowViewerUser(true);
        setShowCreateBanner(false)
        setShowViewBanner(false)
        setShowCreateProductForm(false);
        setShowTipoProductForm(false);
        setShowCategories(false);
        setActualizarProducts(false)
        setShowUpdateCategori(false)

    }

    // Paginado productos
    const indexOfLastProduct = currentProductPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = Array.isArray(allProducts) ? allProducts.slice(indexOfFirstProduct, indexOfLastProduct) : [];


    const paginate = (pageNumber) => {
        setCurrentProductPage(pageNumber);
    };

    //paginado Categoria

    const indexOfLastCategory = currentCategoriesPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = tipeCategorias.slice(indexOfFirstCategory, indexOfLastCategory);
    const paginateCategories = (pageNumber) => {
        setCurrentCategoriesPage(pageNumber);
    };
    // Paginado Usuarios
    const indexOfLastUser = currentUserPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUser = allUser.slice(indexOfFirstUser, indexOfLastUser);

    const paginateUser = (pageNumber) => {
        setCurrentUserPage(pageNumber);
    };

    return (
        <div >
            <NavbarAdmin />
            <Grid container item xs={9} md={12}>
                {/* Menú lateral */}
                <Grid item xs={9} md={3}>
                    <Paper className='menuPaper'>
                        <Typography variant='h5'>Navegación</Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <ViewCarouselSharpIcon /> Banner
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails onClick={handleCreateBannerClick}>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Banner
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails onClick={handleViewBannerClick}>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Banners
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <StorefrontIcon /> Productos
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails onClick={handleCreateProductClick}>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Producto
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails onClick={handleViewProductsClick}>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Productos
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <CategoryIcon /> Categorías
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails onClick={handleCreateCategoryClick}>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Categoría
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails onClick={handleViewCategoriesClick}>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Categorías
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <PeopleIcon /> Usuarios
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Usuario
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails onClick={handleCreateUserClick}>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Usuarios
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>
                                    <AssignmentIcon /> Órdenes
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a>
                                        <CreateIcon /> Crear Orden
                                    </a>
                                </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>
                                    <a>
                                        <VisibilityIcon /> Ver Órdenes
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Paper>
                </Grid>

                {/* Contenido principal */}
                <Grid item xs={12} md={9}>
                    <Paper className='menu-center'>
                        {showCreateBanner && <CreateBanner />}
                        {showViewsBanner && (
                            <div>
                                <h5>Banners</h5>
                                <table className='banner-table'>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Imagen</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allbanners.map((banner, index) => (
                                            <tr key={index}>
                                                <td>{banner.title}</td>
                                                {/* <td>{banner.link}</td> */}
                                                <td>
                                                    <img
                                                        src={URL.createObjectURL(new Blob([new Uint8Array(banner.image.data)], { type: 'image/png' }))}
                                                        alt={`Banner ${index}`}
                                                        style={{ maxWidth: '80px', maxHeight: '80px' }}
                                                    />
                                                </td>
                                                <td className='action-buttons'>
                                                    <a className='update-button' onClick={() => handleUpdateBannerClick(banner._id) }>Actualizar</a>
                                                    <a className='delete-button' onClick={()=>handleDeleteBanner(banner._id)}>Eliminar</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {showUpdateBanner && <UpdateBanner id={showUpdateBanner._id}/>}
                        
                        {showCreateProductForm && <CrearProductos />}
                        {showCategories && (
                            <div>
                                <h5>Categorías</h5>
                                <table className='category-table'>
                                    <tbody>
                                        {currentCategories
                                            .slice()
                                            .sort((a, b) => a.name.localeCompare(b.name))
                                            .map((category) => (
                                                <tr key={category.id}>
                                                    <td>{category.name}</td>
                                                    <td className='action-buttons'>
                                                        <a className='update-button' onClick={() => handleUpdateCategori(category._id)}>Actualizar</a>
                                                        <a className='delete-button' onClick={()=>handleDeletecategori(category._id)}>Eliminar</a>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                                <Paginate
                                    itemsPerPage={categoriesPerPage}
                                    totalItems={tipeCategorias.length}
                                    paginate={paginateCategories}
                                />
                            </div>
                        )}
                        {showTipoProductForm && <TipoProduct />}
                        {showUpdateCategori && <UpdateTipoProducto id={showUpdateCategori._id}/>}
                        {showViewProducts && allProducts && allProducts.length > 0 && (
                            <div>
                                <h5>Productos</h5>
                                <table className='product-table'>
                                    <tbody>
                                        {currentProducts
                                            .map((product, index) => (
                                                <tr key={index}>
                                                    <td>{product.name}</td>
                                                    <td className='action-buttons'>
                                                        <a className='update-button'>Ver mas</a>
                                                        <a className='update-button' onClick={() => { handleUpdateProduct(product._id) }}>Actualizar</a>
                                                        <a className='delete-button' onClick={() => handleDeleteProduct(product._id)}>Eliminar</a>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>

                                <Paginate
                                    itemsPerPage={productsPerPage}
                                    totalItems={allProducts.length}
                                    paginate={paginate}
                                />
                            </div>

                        )}
                        {/* {showUser && <CreateUsers/>} */}
                        {actualizarProduct && <Actualizar id={actualizarProduct._id} />}
                        {showViewUser && (
                            <div>
                                <h5>Usuarios</h5>
                                <table className='user-table'>
                                    <tbody>
                                        {currentUser
                                            .slice()
                                            .sort((a, b) => a.name.localeCompare(b.name))
                                            .map((users) => (
                                                <tr key={users.id}>
                                                    <td>{users.name} {users.lastName}</td>
                                                    <td className='action-buttons'>
                                                        <a className='update-button'>Actualizar</a>
                                                        <a className='delete-button'>Eliminar</a>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                                <Paginate
                                    itemsPerPage={userPerPage}
                                    totalItems={allUser.length}
                                    paginate={paginateUser}
                                />
                            </div>
                        )}
                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}

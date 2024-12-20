// import React, { useEffect, useState } from 'react'
// import NavbarUser from '../NavBar/NavbarUser'
// import Card from '../../Card/Card'
// import Banner from '../../Banner/Banner'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllProduct } from '../../../Redux/Action';
// import Paginado from '../../Pagination/Paginado'
// import Footer from '../../Footer/Footer'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// export default function HomeUser() {
//   const dispatch = useDispatch();
//   const allProducts = useSelector((state) => state.allProducts)
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPorPage, setProductsPorPage] = useState(9);
//   const indexOfLastProduct = currentPage * productsPorPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPorPage;
//   const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   }
//   useEffect(() => {
//     dispatch(getAllProduct())
//   }, [dispatch])
//   return (
//     <div>
//       <NavbarUser />
//       <hr />
//       <Banner />
//       <hr />
//       <div className="whatsapp-icon">
//         <a href="https://wa.me/573023453519" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faWhatsapp} />
//         </a>
//       </div>
//       <div className="container mt-3">
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3"> {/* Utiliza clases de columnas específicas para diferentes tamaños de pantalla */}
//           {currentProducts.map((el, index) => (
//             <div key={index} className="col mb-3">
//               <Card name={el.name} image={el.image} price={el.price}  />
//             </div>
//           ))}
//         </div>
//         <Paginado
//           productsPorPage={productsPorPage}
//           allProducts={allProducts.length}
//           paginate={paginate}
//         />
//       </div>
//       <Footer />
//     </div>
//   )
// // }
// import React, { useEffect, useState } from 'react';
// import NavbarUser from '../NavBar/NavbarUser';
// import Card from '../../Card/Card';
// import Banner from '../../Banner/Banner';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCartProducts, getAllProduct } from '../../../Redux/Action';
// import Paginado from '../../Pagination/Paginado';
// import Footer from '../../Footer/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import Details from '../../Detail/Details';
// import Cart from '../../USER/Cart/Cart';

// export default function HomeUser() {
//   const dispatch = useDispatch();
//   const allProducts = useSelector((state) => state.allProducts);
//   const cartProducts = useSelector((state) => state.cart);
//   const [showProducts, setShowProducts] = useState(true);
//   const [showCart, setShowCart] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPorPage, setProductsPorPage] = useState(9);

//   const indexOfLastProduct = currentPage * productsPorPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPorPage;
//   const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const [showDetail, setShowDetail] = useState(false);
//   const [selectedProductId, setSelectedProductId] = useState(null);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     setShowDetail(false); // Ocultar detalles al cambiar de página
//   };

//   useEffect(() => {
//     dispatch(getAllProduct());
//   }, [dispatch]);

//   const handleCardClick = (productId) => {
//     setShowDetail(true);
//     setSelectedProductId(productId);
//   };

//   const handleCartClick = async () => {
//     await dispatch(getAllCartProducts());
//     console.log("Soy los productos ", getAllCartProducts)
//     setShowProducts(false);
//     setShowCart(true);
//   };

//   return (
//     <div>
//       <NavbarUser handleCartClick={handleCartClick} />
//       <hr />
//       <Banner />
//       <hr />
//       <div className="whatsapp-icon">
//         <a href="https://wa.me/573023453519" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faWhatsapp} />
//         </a>
//       </div>
//       <div className="container mt-3">
//         {showProducts ? (
//           <>
//             {showDetail ? (
//               <Details id={selectedProductId} />
//             ) : (
//               <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//                 {currentProducts.map((el, index) => (
//                   <div key={index} className="col mb-4" onClick={() => handleCardClick(el._id)}>
//                     <Card name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} />
//                   </div>
//                 ))}
//               </div>
//             )}
//             <Paginado productsPorPage={productsPorPage} allProducts={allProducts.length} paginate={paginate} />
//           </>
//         ) : (
//           <Cart cartProducts={cartProducts} />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import Nabvar from '../../NavBar/Nabvar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../Redux/Action';
import Card from '../../Card/Card';
import Paginado from '../../Pagination/Paginado';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa los estilos de Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './homeUser.css';
import Footer from '../../Footer/Footer';
// import Banner from '../Banner/Banner';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Testimonio from '../../Testimonio/Testimonio';
import Media from '../../Media/Media';
import NavbarUser from '../NavBar/NavbarUser';

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPorPage, setProductsPorPage] = useState(9);

  const indexOfLastProduct = currentPage * productsPorPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPorPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div className='home'>
      <NavbarUser setCurrentPage={setCurrentPage} />
      bienvenidos
      <Media/>
      <hr />
      
      {/* Redes sociales */}
      <div className="whatsapp-icon social-icon" style={{ right: '20px', top: '50%', transform: 'translateY(-50%)' }}>
        <a href="https://wa.me/message/5IMPIB6OOI6XE1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="insta-icon social-icon" style={{ left: '20px', top: '10%' }}>
        <a href="https://www.instagram.com/moldea_fit?igsh=d2d0MWRlazBxN3lp" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="tik-icon social-icon" style={{ left: '20px', top: '25%' }}>
        <a href="https://www.tiktok.com/@moldea_fit" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
      <div className="face-icon social-icon" style={{ left: '20px', top: '40%' }}>
        <a href="https://www.facebook.com/profile.php?id=61566852370203" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>

      <div className="container mt-3">
        {allProducts.length === 0 ? (
          <h3 className="text-center">No hay productos para mostrar</h3>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {currentProducts.map((el, index) => (
              <div key={index} className="col mb-3">
                <Card name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} sise={el.sise} color={el.color} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Solo mostrar el paginado si hay productos */}
      {allProducts.length > 0 && (
        <Paginado
          productsPorPage={productsPorPage}
          allProducts={allProducts.length}
          paginate={paginate}
        />
      )}
      <div className="testimonio">
        <Testimonio/>
      </div>
      <Footer />
    </div>
  );
}
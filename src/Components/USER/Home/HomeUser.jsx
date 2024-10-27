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
// }
import React, { useEffect, useState } from 'react';
import NavbarUser from '../NavBar/NavbarUser';
import Card from '../../Card/Card';
import Banner from '../../Banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartProducts, getAllProduct } from '../../../Redux/Action';
import Paginado from '../../Pagination/Paginado';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Details from '../../Detail/Details';
import Cart from '../../USER/Cart/Cart';

export default function HomeUser() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const cartProducts = useSelector((state) => state.cart);
  const [showProducts, setShowProducts] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPorPage, setProductsPorPage] = useState(9);

  const indexOfLastProduct = currentPage * productsPorPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPorPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const [showDetail, setShowDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setShowDetail(false); // Ocultar detalles al cambiar de página
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleCardClick = (productId) => {
    setShowDetail(true);
    setSelectedProductId(productId);
  };

  const handleCartClick = async () => {
    await dispatch(getAllCartProducts());
    console.log("Soy los productos ", getAllCartProducts)
    setShowProducts(false);
    setShowCart(true);
  };

  return (
    <div>
      <NavbarUser handleCartClick={handleCartClick} />
      <hr />
      <Banner />
      <hr />
      <div className="whatsapp-icon">
        <a href="https://wa.me/573023453519" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <div className="container mt-3">
        {showProducts ? (
          <>
            {showDetail ? (
              <Details id={selectedProductId} />
            ) : (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {currentProducts.map((el, index) => (
                  <div key={index} className="col mb-4" onClick={() => handleCardClick(el._id)}>
                    <Card name={el.name} description={el.description} image={el.image} price={el.price} stock={el.stock} />
                  </div>
                ))}
              </div>
            )}
            <Paginado productsPorPage={productsPorPage} allProducts={allProducts.length} paginate={paginate} />
          </>
        ) : (
          <Cart cartProducts={cartProducts} />
        )}
      </div>
      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import './card.css';

export default function Card({ name, image, price, sise, color }) {
  // Estado para el índice de la imagen visible
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Si image es un array, se asegura de no intentar acceder a una imagen vacía
  const imageSrc = image && image.length > 0 ? image[currentImageIndex] : ''; 

  // Si sise o color son arrays, une los elementos con coma y espacio
  const sizes = Array.isArray(sise) ? sise.join(', ') : sise;
  const colors = Array.isArray(color) ? color.join(', ') : color;

  // Función para manejar el clic en el botón de compra
  const handleBuyClick = () => {
    const whatsappUrl = `https://wa.me/573124433326?text=${encodeURIComponent(`¡Hola! Me encantó este producto: ${name}. Quiero comprarlo.`)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Funciones para cambiar la imagen en el slider
  const nextImage = () => {
    if (currentImageIndex < image.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0); // Vuelve a la primera imagen
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(image.length - 1); // Vuelve a la última imagen
    }
  };

  return (
    <div className="card-product">
      <div className="card-img-top">
        <img
          src={imageSrc} // Usar la imagen basada en el índice actual
          alt="Product"
          className="card-img" // Asegúrate de tener estilos para las imágenes
        />
        <div className="slider-controls">
          <button onClick={prevImage} className="btn-slider">‹</button>
          <button onClick={nextImage} className="btn-slider">›</button>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-price">${price}</p>
        <p className="card-talla">Talla: {sizes}</p>
        <p className="card-color">Color: {colors}</p> {/* Mostrar los colores con coma */}
        <button className="btn-buy" onClick={handleBuyClick}>Comprar ahora</button>
      </div>
    </div>
  );
}

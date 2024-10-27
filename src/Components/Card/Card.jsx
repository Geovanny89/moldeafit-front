import React from 'react';
import './card.css';

export default function Card({ name, image, price }) {
  // Verifica si hay imágenes y si hay datos en el buffer
  const getImageSrc = (imgBuffer) => {
    if (imgBuffer && imgBuffer.length > 0) {
      const blob = new Blob([new Uint8Array(imgBuffer[0].data)], { type: 'image/png' });
      return URL.createObjectURL(blob);
    }
    return ''; // Devuelve un string vacío si no hay imagen
  };

  const imageSrc = getImageSrc(image); // Llama a la función para obtener el src de la imagen

  // Función para manejar el clic en el botón de compra
  const handleBuyClick = () => {
    const whatsappUrl = `https://wa.me/573124433326?text=${encodeURIComponent(`¡Hola! Me encantó este producto: ${name}. Quiero comprarlo.`)}`;
    
    // Redirigir a WhatsApp con el mensaje predefinido
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="card-product">
      <div className="card-img-top">
        <img
          src={imageSrc}
          alt="Product"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{name}</h5> {/* Cambia a un heading para mejor semántica */}
        <p className="card-price">${price}</p> {/* Separa el precio en un párrafo */}
        <button className="btn-buy" onClick={handleBuyClick}>Comprar ahora</button> {/* Asigna la función al botón */}
      </div>
    </div>
  );
}


import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cart = useSelector((state) => state.cart);

   // Verifica si cart está vacío antes de usar reduce
   if (!cart || !Array.isArray(cart)) {
    return (
      <div>
        <p>El carrito está vacío o no es un array válido.</p>
      </div>
    );
  }

  // Calcula la cantidad total de productos y la suma total de precios
  const totalQuantity = cart.reduce((total, cartItem) => {
    return total + cartItem.items.reduce((itemTotal, item) => itemTotal + item.quantity, 0);
  }, 0);

  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.items.reduce((itemTotal, item) => itemTotal + (item.product?.price || 0) * item.quantity, 0);
  }, 0);

  return (
    <div>
      <h2>Productos</h2>
      {Array.isArray(cart) && cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((cartItem, cartIndex) => (
            <li key={cartIndex}>
              {Array.isArray(cartItem.items) &&
                cartItem.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <strong>Nombre del Producto:</strong> {item.product?.name || 'Nombre no disponible'} <br />
                    <strong>Cantidad:</strong> {item.quantity} <br />
                    <strong>Precio:</strong> ${item.product?.price || 'Precio no disponible'} <br />
                    <hr />
                  </div>
                ))}
            </li>
          ))}
        </ul>
      )}

      <h2>Resumen de compra</h2>
      <p>Cantidad total de productos: {totalQuantity}</p>
      <p>Suma total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

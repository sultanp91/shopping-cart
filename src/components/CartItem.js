import React from 'react';

function CartItem({ itemName, itemPrice, itemImage1 }) {
  return (
    <div>
      <h3>{itemName}</h3>
      <img src={`./img/${itemImage1}.jpg`} alt='dss' />
      <p>{itemPrice}</p>
    </div>
  );
}

export default CartItem;

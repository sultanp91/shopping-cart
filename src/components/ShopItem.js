import React from 'react';

function ShopItem({ itemName, itemPic, itemPrice }) {
  return (
    <div className='shop-item'>
      <div className='shop-item-image'>
        <img src={`./img/${itemPic}.jpg`} alt={`${itemName}`} />
      </div>

      <p>{itemName}</p>
      <strong>
        <p>£{itemPrice.toFixed(2)}</p>
      </strong>
    </div>
  );
}

export default ShopItem;

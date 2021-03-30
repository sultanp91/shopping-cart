import React from 'react';

function ShopItem({ itemName, itemPic, itemPrice }) {
  return (
    <div className='shop-item'>
      <div>
        <img src={`./img/${itemPic}.jpg`} alt={`${itemName}`} />
      </div>

      <p>{itemName}</p>
      <p>{itemPrice}</p>
    </div>
  );
}

export default ShopItem;

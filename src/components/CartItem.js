import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

function CartItem({ itemName, itemPrice, itemSku, itemBasket, itemImage1 }) {
  const shopContext = useContext(ShopContext);
  const [, dispatch] = shopContext;
  return (
    <div className='cart-item'>
      <div className='cart-item-image'>
        <img src={`./img/${itemImage1}.jpg`} alt={`${itemName}`} />
      </div>
      <div className='cart-text'>
        <h3>{itemName}</h3>

        <p>£{itemPrice.toFixed(2)}</p>
        <p>Qty: {itemBasket}</p>
        <button
          type='button'
          className='plus-minus-buttons'
          onClick={() =>
            dispatch({
              type: 'decrement',
              payload: itemSku,
            })
          }
        >
          {itemBasket === 1 ? 'Del' : '-'}
        </button>

        <button
          type='button'
          className='plus-minus-buttons'
          onClick={() =>
            dispatch({
              type: 'increment',
              payload: itemSku,
            })
          }
        >
          +
        </button>
        <h4>Subtotal: £{(itemPrice * itemBasket).toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default CartItem;

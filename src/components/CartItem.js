import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

function CartItem({ itemName, itemPrice, itemSku, itemBasket, itemImage1 }) {
  const shopContext = useContext(ShopContext);
  const [, dispatch] = shopContext;
  return (
    <div className='cart-item'>
      <h3>{itemName}</h3>
      <img src={`./img/${itemImage1}.jpg`} alt={`${itemName}`} />
      <p>{itemPrice}</p>
      <p>{itemBasket}</p>

      <button
        type='button'
        onClick={() =>
          dispatch({
            type: 'decrement',
            payload: itemSku,
          })
        }
      >
        {itemBasket === 1 ? 'Del' : 'Decrease'}
      </button>

      <button
        type='button'
        onClick={() =>
          dispatch({
            type: 'increment',
            payload: itemSku,
          })
        }
      >
        Increase
      </button>
    </div>
  );
}

export default CartItem;

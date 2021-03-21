import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

function Cart() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
  return (
    <div>
      {state
        .filter((item) => item.basket > 0)
        .map((item) => (
          <h1>{item.name}</h1>
        ))}
    </div>
  );
}

export default Cart;

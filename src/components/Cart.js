import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import CartItem from './CartItem';

function Cart() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
  return (
    <div>
      <h1>Cart Page</h1>
      {state
        .filter((item) => item.basket > 0)
        .map((item) => (
          <CartItem
            itemName={item.name}
            itemPrice={item.price}
            itemSku={item.sku}
            itemBasket={item.basket}
            itemImage1={item.img1}
          />
        ))}
      <h1>
        £
        {state
          .reduce((acc, item) => acc + item.basket * item.price, 0)
          .toFixed(2)}
      </h1>
    </div>
  );
}

export default Cart;

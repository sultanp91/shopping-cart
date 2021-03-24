import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import CartItem from './CartItem';

function Cart() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
  return (
    <div>
      {state
        .filter((item) => item.basket > 0)
        .map((item) => (
          <CartItem
            itemName={item.name}
            itemPrice={item.price}
            itemSku={item.sku}
            itemBasket={item.basket}
            itemImage1={item.img1}
            itemImage2={item.img2}
            itemImage3={item.img3}
          />
        ))}
    </div>
  );
}

export default Cart;

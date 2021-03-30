import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ShopContext } from './ShopContext';
import CartItem from './CartItem';
import { pageTransition } from './animations';

function Cart() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
    >
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
    </motion.div>
  );
}

export default Cart;

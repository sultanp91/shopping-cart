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
      className='cart-page'
    >
      <h2>Shopping Cart</h2>
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
      <h3 className='total-price'>
        Total: £
        {state
          .reduce((acc, item) => acc + item.basket * item.price, 0)
          .toFixed(2)}
        <button
          type='button'
          className='checkout-button'
          onClick={() => {
            alert("This is a fake store! No PS5's or Xboxes here!");
          }}
        >
          Checkout
        </button>
      </h3>
    </motion.div>
  );
}

export default Cart;

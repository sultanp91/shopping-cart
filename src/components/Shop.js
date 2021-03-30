import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShopItem from './ShopItem';
import { pageTransition } from './animations';
import { ShopContext } from './ShopContext';

function Shop() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
      className='shop-container'
    >
      {state.map((item) => (
        <Link to={`/shop/${item.sku}`}>
          <ShopItem
            itemName={item.name}
            itemPic={item.img1}
            itemPrice={item.price}
          />
        </Link>
      ))}
    </motion.div>
  );
}

export default Shop;

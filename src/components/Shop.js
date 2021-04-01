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
    >
      <section className='header'>
        <h2>Welcome to next generation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          accusantium, est harum atque velit ex alias quasi nostrum dignissimos
          repellat molestias ipsum eligendi accusamus ipsam aliquam numquam id,
          minima fuga. Incidunt, quae doloremque? Magnam quaerat quas earum
          voluptatem quos possimus. Placeat fuga animi provident, consectetur
          molestiae dignissimos tempore ea, eaque error ipsum quas nulla culpa
          repellendus aliquid consequuntur est eveniet. Eius odit sequi ea nemo
          placeat dolorum ex inventore doloremque, earum, vero nihil odio fugit
          in autem, cumque dolorem iste accusamus quibusdam delectus! Officiis
          repudiandae voluptates sed suscipit sit pariatur.
        </p>
      </section>
      <div className='shop-container'>
        {state.map((item) => (
          <Link to={`/shop/${item.sku}`}>
            <ShopItem
              itemName={item.name}
              itemPic={item.img1}
              itemPrice={item.price}
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Shop;

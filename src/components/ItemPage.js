import React, { useContext, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { ShopContext } from './ShopContext';
import { pageTransition } from './animations';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ItemPage({ match }) {
  const sku = match.params.id;
  const [itemCount, setItemCount] = useState(1);
  const shopContext = useContext(ShopContext);
  const [state, dispatch] = shopContext;
  const idx = state.findIndex((item) => item.sku === sku);
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <motion.div
      variants={pageTransition}
      initial='hidden'
      animate='show'
      exit='exit'
      className='item-page'
    >
      <div className='slider-container'>
        <Slider className='slider' {...settings}>
          <img src={`../img/${state[idx].img1}.jpg`} alt={state[idx].img1} />

          <img src={`../img/${state[idx].img2}.jpg`} alt={state[idx].img2} />

          <img src={`../img/${state[idx].img3}.jpg`} alt={state[idx].img3} />
        </Slider>
      </div>
      <div className='item-page-description'>
        <h2>{state[idx].name}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
          fuga placeat ad et repellat sint magni nemo tempora beatae accusantium
          dolor tenetur mollitia laborum debitis quae perferendis aliquid earum!
          Tenetur. Accusamus voluptatum saepe, obcaecati nihil vitae assumenda
          debitis sunt ratione atque ab repellat quasi fuga commodi repellendus
          est reprehenderit, porro placeat doloribus vero ducimus unde nam
          pariatur quaerat. Quam, fuga!
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur</li>
          <li>Esse aliquam laboriosam possimus nemo</li>
          <li>Vel ipsam corrupti praesentium</li>
          <li>Accusamus voluptatum saepe</li>
        </ul>

        <button
          className='plus-minus-buttons'
          type='button'
          onClick={() => {
            if (itemCount > 0) {
              setItemCount(itemCount - 1);
            }
          }}
        >
          -
        </button>
        <input
          type='number'
          name='quantity'
          id='quantity'
          value={itemCount}
          onChange={(e) => {
            setItemCount(Number(e.target.value));
          }}
        />
        <button
          className='plus-minus-buttons'
          type='button'
          onClick={() => setItemCount(itemCount + 1)}
        >
          +
        </button>
        <button
          className='checkout-button'
          type='button'
          onClick={() => {
            dispatch({
              type: 'add',
              payload: { sku, count: itemCount },
            });
            setItemCount(0);
          }}
        >
          Add to Basket
        </button>
      </div>
    </motion.div>
  );
}

export default ItemPage;

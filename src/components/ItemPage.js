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
    >
      <div>
        <Slider className='slider-container' {...settings}>
          <div className='slider-container--images'>
            <img src={`../img/${state[idx].img1}.jpg`} alt={state[idx].img1} />
          </div>
          <div className='slider-container--images'>
            <img src={`../img/${state[idx].img2}.jpg`} alt={state[idx].img2} />
          </div>
          <div className='slider-container--images'>
            <img src={`../img/${state[idx].img3}.jpg`} alt={state[idx].img3} />
          </div>
        </Slider>
      </div>
      <h1>{state[idx].name}</h1>
      <button
        type='button'
        onClick={() => {
          if (itemCount > 0) {
            setItemCount(itemCount - 1);
          }
        }}
      >
        Decrease
      </button>
      <p>{itemCount}</p>
      <button type='button' onClick={() => setItemCount(itemCount + 1)}>
        Increase
      </button>
      <button
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
    </motion.div>
  );
}

export default ItemPage;

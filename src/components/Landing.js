import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from './animations';

function Landing() {
  return (
    <motion.div
      variants={pageTransition}
      exit='exit'
      initial='hidden'
      animate='show'
      className='hero'
    >
      <h1>
        Welcome to next <br />
        generation gaming
      </h1>
      <button type='button'>Shop Now</button>
    </motion.div>
  );
}

export default Landing;

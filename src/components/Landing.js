import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        WELCOME TO NEXT
        <br />
        GENERATION GAMING
      </h1>
      <Link to='/shop'>
        <button type='button'>Shop Now</button>
      </Link>
    </motion.div>
  );
}

export default Landing;

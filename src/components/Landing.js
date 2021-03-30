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
    >
      Landing
    </motion.div>
  );
}

export default Landing;

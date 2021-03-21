import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <h1>Next Gen Store</h1>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
        <Link to='/cart'>
          <li>Cart</li>
          Basket count:
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

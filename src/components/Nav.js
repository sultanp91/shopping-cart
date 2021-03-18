import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <h1>Nav</h1>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/shop'>
        <p>Shop</p>
      </Link>
    </div>
  );
}

export default Nav;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';

function Nav() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
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
          Basket count: {state.reduce((a, item) => a + item.basket, 0)}
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

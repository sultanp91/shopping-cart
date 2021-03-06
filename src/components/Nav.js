import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { ShopContext } from './ShopContext';

function Nav() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
  return (
    <nav className='nav'>
      <h1>Next Gen Store</h1>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
        <Link to='/cart'>
          <li className='nav-cart'>
            <MdShoppingCart className='basket-icon' />
            <span className='nav-basket-count'>
              {state.reduce((acc, item) => acc + item.basket, 0)}
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

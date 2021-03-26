import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import ShopItem from './ShopItem';

function Shop() {
  const shopContext = useContext(ShopContext);
  const [state] = shopContext;
  return (
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
  );
}

export default Shop;

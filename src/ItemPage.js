import React, { useContext } from 'react';
import { ShopContext } from './components/ShopContext';

function ItemPage({ match }) {
  const shopContext = useContext(ShopContext);
  const [state, dispatch] = shopContext;
  console.log(match.params.id);
  return (
    <div>
      <h1>Item Page</h1>
    </div>
  );
}

export default ItemPage;

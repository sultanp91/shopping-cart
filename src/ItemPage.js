import React, { useContext } from 'react';
import { ShopContext } from './components/ShopContext';

function ItemPage({ match }) {
  const sku = match.params.id;
  const shopContext = useContext(ShopContext);
  const [state, dispatch] = shopContext;
  const idx = state.findIndex((item) => item.sku === sku);
  return (
    <div>
      <h1>{state[idx].name}</h1>
    </div>
  );
}

export default ItemPage;

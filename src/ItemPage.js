import React, { useContext, useState } from 'react';
import { ShopContext } from './components/ShopContext';

function ItemPage({ match }) {
  const sku = match.params.id;
  const [itemCount, setItemCount] = useState(1);
  const shopContext = useContext(ShopContext);
  const [state, dispatch] = shopContext;
  const idx = state.findIndex((item) => item.sku === sku);
  return (
    <div>
      <h1>{state[idx].name}</h1>
      <button
        type='button'
        onClick={() => {
          if (itemCount > 0) {
            setItemCount(itemCount - 1);
          }
        }}
      >
        Decrease
      </button>
      <p>{itemCount}</p>
      <button type='button' onClick={() => setItemCount(itemCount + 1)}>
        Increase
      </button>
      <button
        type='button'
        onClick={() => {
          dispatch({
            type: 'add',
            payload: { sku, count: itemCount },
          });
          setItemCount(0);
        }}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default ItemPage;

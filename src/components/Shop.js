import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

function Shop() {
  const shopContext = useContext(ShopContext);
  const [state, dispatch] = shopContext;
  return (
    <div>
      Products Page
      <h1>{state[0].name}</h1>
      <button
        type='button'
        onClick={() =>
          dispatch({
            type: 'increment',
            payload: state[0].sku,
          })
        }
      >
        Increase
      </button>
      <p>
        count:
        {state[0].basket}
      </p>
      <button
        type='button'
        onClick={() =>
          dispatch({
            type: 'decrement',
            payload: state[0].sku,
          })
        }
      >
        Decrease
      </button>
      <h1>{state[2].name}</h1>
      <button
        type='button'
        onClick={() =>
          dispatch({
            type: 'increment',
            payload: state[2].sku,
          })
        }
      >
        Increase
      </button>
      <p>
        count:
        {state[2].basket}
      </p>
      <button
        type='button'
        onClick={() =>
          dispatch({
            type: 'decrement',
            payload: state[2].sku,
          })
        }
      >
        Decrease
      </button>
    </div>
  );
}

export default Shop;

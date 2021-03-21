import React, { useReducer } from 'react';
import { inventory } from './inventory';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state.map((product) => {
        if (product.sku === action.payload) {
          return { ...product, basket: product.basket + 1 };
        }
        return product;
      });
    case 'decrement':
      return state.map((product) => {
        if (product.sku === action.payload && product.basket > 0) {
          return { ...product, basket: product.basket - 1 };
        }
        return product;
      });
    case 'remove':
      return state.map((product) => {
        if (product.sku === action.payload && product.basket > 0) {
          return { ...product, basket: 0 };
        }
        return product;
      });

    default:
      return state;
  }
}

function Shop() {
  const [stock, dispatch] = useReducer(reducer, inventory);

  return (
    <div>
      basket count:{' '}
      {stock.reduce((a, item) => {
        return a + item.basket;
      }, 0)}
      Products Page
      <h1>{stock[0].name}</h1>
      <button
        type='button'
        onClick={() => dispatch({ type: 'increment', payload: stock[0].sku })}
      >
        Increase
      </button>
      <p>
        count:
        {stock[0].basket}
      </p>
      <button
        type='button'
        onClick={() => dispatch({ type: 'decrement', payload: stock[0].sku })}
      >
        Decrease
      </button>
    </div>
  );
}

export default Shop;

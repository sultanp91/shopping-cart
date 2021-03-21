import React, { useReducer } from 'react';
import { inventory } from './inventory';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state.map((product) => {
        if (product.sku === action.payload.sku) {
          return { ...product, basket: product.basket + 1 };
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
      Products Page
      <h1>{stock[0].name}</h1>
    </div>
  );
}

export default Shop;

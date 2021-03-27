import React, { createContext, useReducer } from 'react';
import { inventory } from './inventory';

export const ShopContext = createContext();

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
    case 'add':
      return state.map((product) => {
        if (product.sku === action.payload.sku) {
          return { ...product, basket: product.basket + action.payload.count };
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

export const ShopProvider = ({ children }) => {
  const [stock, dispatch] = useReducer(reducer, inventory);

  return (
    <ShopContext.Provider value={[stock, dispatch]}>
      {children}
    </ShopContext.Provider>
  );
};

import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_To_CART":
      return [...state, action.product];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

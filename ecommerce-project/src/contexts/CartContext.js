import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartElements, setCartElements] = useState([]);

  const addToCart = (item) => {
    setCartElements([...cartElements, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartElements];
    const item = updatedCart[index];

    if (item.quantity > 1) {
      item.quantity--;
    } else {
      updatedCart.splice(index, 1);
    }
    setCartElements(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cartElements, addToCart, removeFromCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

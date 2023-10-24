import { createContext } from "react";

const CartContext = createContext({
  cartElements: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;

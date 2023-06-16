import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  setItems: () => null,
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState(null);

  const value = { isCartOpen, setIsCartOpen, items, setItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

import { createContext, useState } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('s11g1', []);

  function addItem(item) {
    setCart([...cart, item]);
  }
  function removeItem(id) {
    const deleted = cart.filter((item) => item.id !== id);
    setCart(deleted);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

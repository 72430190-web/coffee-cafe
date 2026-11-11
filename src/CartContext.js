import React, { createContext, useContext, useEffect, useState } from 'react';
const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { const saved = JSON.parse(localStorage.getItem('coffee-cart') || '[]'); return Array.isArray(saved) ? saved : []; }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem('coffee-cart', JSON.stringify(cart)); }, [cart]);
  const addItem = (item) => setCart(prev => {
    const key = item.name;
    const existing = prev.find(x => x.name === key);
    return existing ? prev.map(x => x.name === key ? { ...x, quantity: x.quantity + 1 } : x) : [...prev, { name: item.name, price: Number.parseFloat(item.price), img: item.img, quantity: 1 }];
  });
  const changeQuantity = (name, amount) => setCart(prev => prev.map(x => x.name === name ? { ...x, quantity: x.quantity + amount } : x).filter(x => x.quantity > 0));
  const removeItem = name => setCart(prev => prev.filter(x => x.name !== name));
  const clearCart = () => setCart([]);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  return <CartContext.Provider value={{ cart, addItem, changeQuantity, removeItem, clearCart, count, total }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);

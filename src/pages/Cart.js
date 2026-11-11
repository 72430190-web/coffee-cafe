import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import '../allcss/Cart.css';
export default function Cart() {
  const { cart, changeQuantity, removeItem, clearCart, total } = useCart();
  const [message, setMessage] = useState('');
  return <main className="cart-page"><div className="cart-container"><h1>Your <em>Cart</em></h1>
    {cart.length === 0 ? <><p>Your cart is empty.</p><Link className="cart-back" to="/menu">Explore the Menu</Link></> : <>
      {cart.map(item => <div className="cart-line" key={item.name}>
        <img src={item.img} alt={item.name} /><div className="cart-details"><h2>{item.name}</h2><p>${item.price.toFixed(2)} each</p><button className="cart-remove" onClick={() => removeItem(item.name)}>Remove</button></div>
        <div className="cart-quantity"><button aria-label={'Decrease '+item.name} onClick={() => changeQuantity(item.name, -1)}>−</button><span>{item.quantity}</span><button aria-label={'Increase '+item.name} onClick={() => changeQuantity(item.name, 1)}>+</button></div>
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
      </div>)}
      <div className="cart-summary"><strong>Total: ${total.toFixed(2)}</strong><button onClick={() => {clearCart();setMessage('Demo order placed! No payment or restaurant order was sent.');}}>Place Order (Demo)</button></div>
      <p className="cart-note">Demo checkout only. No payment is collected or order sent to the café.</p>
    </>}
    {message && <p role="status" className="cart-message">{message}</p>}
  </div></main>;
}

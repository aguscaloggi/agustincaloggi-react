import React from 'react'
import '../app/styles.css';
import cart from '../assets/cart.png';

export const CartWidget = () => {
  return (
    <div>
        <a><img src={cart} className="cart"></img></a>
    </div>
  )
}

export default CartWidget;
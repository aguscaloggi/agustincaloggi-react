import React, { useState } from 'react'
import '../app/styles.css';

export const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(initial);
  const decrement = () => {
    if (count > initial ) {
        setCount(count - 1);
    }
  }
  const increment = () => {
    if (count < stock ) {
        setCount(count + 1);
    }
  }
  const addcart = () => {
    setCount(initial);
  }

  return (
    <div className='container'>
        <div className='itemcount'>
            <h2 className='counter'>{count}</h2>
            <div className='itemcount-buttons'>
                <button className='decrement-button' onClick={decrement}>-</button>
                <button className='increment-button' onClick={increment}>+</button>
            </div>
            <button className='addcart-button' onClick={addcart}>Añadir al carritos </button>
        </div>
    </div>
  )
}

// function ItemCount ({stock, initial, onAdd}){
//     while (count < stock) {
        
//     }
// }

export default ItemCount;
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './context/CartContext';
import { getProductById } from '@/supabase/api';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   setItems(cart.map(c => {return getProductById(c.id)}));
  // }, []);

  
  // console.log(items);

  return (
    <div>
      {cart.map(c => (
        <div id={c.id}>
          <div>{c.id}</div>
          <div>{c.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

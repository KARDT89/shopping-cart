import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './context/CartContext';
import { Button } from './ui/button';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  function handleRemove(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function decreaseQuantity(id) {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: cart.find(p => p.id === id).quantity - 1 };
        }
        return item
      }).filter(item => item.quantity > 0)
    );
  }
  function increaseQuantity(id) {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: cart.find(p => p.id === id).quantity + 1 };
        }
        return item
      })
    );
  }
  return (
    <div className="flex flex-col gap-4 mx-2 flex-1 font-mono">
      {cart.length > 0 ? (
        <>
          <h1 className="text-center text-3xl font-mono">Shopping Cart</h1>

          <div className=" lg:flex gap-2">
            <div className="flex-1 h-[400px] md:h-[650px] border overflow-scroll">
              <div className="grid grid-cols-5 gap-4 border p-4 items-center text-[10px] lg:text-xl font-semibold sticky top-0 bg-background">
                <div className="text-center">Image</div>
                <div className="text-center">Title</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Total</div>
              </div>
              {cart.map(c => (
                <div
                  id={c.id}
                  className="grid grid-cols-5 gap-4 border p-4 items-center text-[10px] md:text-lg font-semibold"
                >
                  <div className="flex items-center justify-center gap-4 text-center">
                    <button
                      variant={'link'}
                      className={
                        'text-red-600 rounded-4xl cursor-pointer hover:bg-red-100/80 p-0 m-0'
                      }
                      onClick={() => handleRemove(c.id)}
                    >
                      {' '}
                      <X className="size-5" />{' '}
                    </button>
                    <img src={c.image} alt={c.title} className="w-30 h-17" />
                  </div>
                  <div className="text-center line-clamp-2">{c.title}</div>
                  <div className="text-center">₹{c.price}</div>
                  <div className="text-center md:flex items-center rounded-lg justify-center gap-2  border-background/40 font-mono ">
                    <Button
                      onClick={() => decreaseQuantity(c.id)}
                      variant={'outline'}
                      size={'sm'}
                      className={'w-[35px] cursor-pointer'}
                    >
                      <Minus />
                    </Button>
                    <p className="mx-0 text-xl font-stretch-ultra-condensed">{c.quantity}</p>
                    <Button
                      onClick={() => increaseQuantity(c.id)}
                      variant={'outline'}
                      size={'sm'}
                      className={'w-[35px] cursor-pointer'}
                    >
                      <Plus />
                    </Button>
                  </div>
                  <div className="text-center">₹{c.price * c.quantity}</div>
                </div>
              ))}
            </div>
            <div>
              {/* summary */}
              <div className="border min-w-[400px] h-screen max-h-[650px] p-4">
                <p className="text-xl text-center">Grand Total</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="flex items-center justify-center pt-50 text-center text-2xl font-mono">
          Your cart is Empty
        </p>
      )}
    </div>
  );
};

export default Cart;

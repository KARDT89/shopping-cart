import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './context/CartContext';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

const Cart = () => {
  const { cart } = useContext(CartContext);
  // const grandTotal = cart.map((c => c.reduce((prev, curr) => prev = curr.price * curr.quantity)))
  return (
    <div className="flex flex-col gap-4 mx-2 h-full font-mono">
    
      {cart.length > 0 ? (
         <>
           <h1 className="text-center text-3xl font-mono">Shopping Cart</h1>
        
        <div className="lg:flex gap-2">
          
          <div className="flex-1 h-[650px] border overflow-scroll">
            <div className="grid grid-cols-5 gap-4 border p-4 items-center text-[10px] lg:text-xl font-semibold">
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
                <div className="text-center">
                  <img src={c.image} alt={c.title} className="w-20 h-12" />
                </div>
                <div className="text-center line-clamp-2">{c.title}</div>
                <div className="text-center">₹{c.price}</div>
                <div className="text-center md:flex items-center rounded-lg justify-center gap-2  border-background/40 font-mono ">
                  <Button
                    variant={'outline'}
                 
                    size={'sm'}
                    className={'w-[35px] cursor-pointer'}
                  >
                    <Minus />
                  </Button>
                  <p className="mx-0 text-xl font-stretch-ultra-condensed">{c.quantity}</p>
                  <Button
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
            <div className="border min-w-[300px] max-h-[650px] p-4">
              <p className="text-xl text-center">Summary</p>
            </div>
          </div>
        </div>
         </>
      ) : (
        <p className='flex items-center justify-center pt-50 text-center text-2xl font-mono'>Your cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;

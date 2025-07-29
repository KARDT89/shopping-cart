import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Button } from './ui/button';
import { Minus, Plus, X } from 'lucide-react';
import { RippleButton } from './magicui/ripple-button';
import { BackgroundBeams } from './ui/BackgroundBeams';




const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart
      .map(everyItem => {
        return everyItem.quantity * everyItem.price;
      })
      .reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);

    setGrandTotal(totalPrice);
  }, [cart]);

  function handleRemove(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function decreaseQuantity(id) {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            return { ...item, quantity: cart.find(p => p.id === id).quantity - 1 };
          }
          return item;
        })
        .filter(item => item.quantity > 0)
    );
  }
  function increaseQuantity(id) {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: cart.find(p => p.id === id).quantity + 1 };
        }
        return item;
      })
    );
  }
  return (
    <div className="relative flex flex-col gap-4 mx-2 font-mono">
      
      {cart.length > 0 ? (
        <>
          <h1 className="text-center text-3xl font-mono">Shopping Cart</h1>

          <div className="flex flex-col-reverse md:flex-col lg:flex-row gap-4">
            {/* Cart Items */}
            <div className="flex-1 max-h-[70vh] overflow-auto">
              {/* Header */}
              <div className="hidden md:grid grid-cols-5 gap-4 rounded-lg border p-4 font-semibold text-sm bg-card sticky top-0 z-10">
                <div className="text-center">Image</div>
                <div className="text-center">Title</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Total</div>
              </div>

              {/* Cart List */}
              <div className="relative flex flex-col gap-2 mt-2 z-10">
                {cart.map(c => (
                  <div
                    key={c.id}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 border rounded-lg p-4 md:p-0 items-center text-xs sm:text-sm md:text-base bg-card hover:bg-accent/10 transition"
                  >
                    {/* Image + Remove */}
                    <div className="flex items-center justify-center gap-2 col-span-1">
                      <button
                        className="text-red-600 hover:bg-red-100 p-1 rounded-full"
                        onClick={() => handleRemove(c.id)}
                        aria-label="Remove Item"
                      >
                        <X className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>

                    {/* Title */}
                    <div className="text-center line-clamp-2">{c.title}</div>

                    {/* Price */}
                    <div className="text-center hidden md:block">₹{c.price}</div>

                    {/* Quantity Controls */}
                    <div className="flex justify-center items-center gap-2">
                      <Button
                        onClick={() => decreaseQuantity(c.id)}
                        size="sm"
                        variant="outline"
                        className="w-6 h-6"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span>{c.quantity}</span>
                      <Button
                        onClick={() => increaseQuantity(c.id)}
                        size="sm"
                        variant="outline"
                        className="w-6 h-6"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    {/* Total */}
                    <div className="text-center hidden md:block">₹{c.price * c.quantity}</div>
                  </div>
                ))}
              
              </div>
            </div>

            {/* Summary */}
            <div className="relative w-full lg:w-[350px] flex-shrink-0 z-10">
              <div className="border rounded-lg shadow-md bg-card text-foreground p-4 space-y-4">
                <h2 className="text-xl font-semibold text-center">Order Summary</h2>

                <div className="flex justify-between text-sm">
                  <span>Total Items:</span>
                  <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Estimated Tax:</span>
                  <span>₹{Math.round(grandTotal * 0.05)}</span>
                </div>

                <div className="flex justify-between text-lg font-medium border-t pt-4">
                  <span>Subtotal:</span>
                  <span>₹{grandTotal}</span>
                </div>

                <div className="text-green-700 text-sm text-center bg-green-50 border border-green-300 rounded-md p-2">
                  🎉 You qualify for free delivery!
                </div>

                {/* Discount Code */}
                <div className="flex flex-col gap-2 mt-2">
                  <label htmlFor="coupon" className="text-sm font-medium">
                    Discount Code
                  </label>
                  <input
                    type="text"
                    id="coupon"
                    placeholder="Enter code"
                    className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <button className="text-xs underline text-accent-foreground hover:text-foreground w-fit">
                    Apply Code
                  </button>
                </div>

                <RippleButton  rippleColor="#ADD8E6" className="w-full">
                  Proceed to Checkout
                     
                </RippleButton>
             
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-100 overflow-auto text-2xl font-mono">
          Your cart is empty.
        </div>
      )}
     <BackgroundBeams />
    </div>
   
  );
};

export default Cart;

import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { useContext, useEffect, useState } from 'react';
import {  Minus, Plus } from 'lucide-react';
import { CartContext } from '../context/CartContext';




const Card = ({ id, title, description, image, price, rating, reviews, category }) => {
  const { cart, setCart } = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(() => {
    const val = cart.find(item => item.id === id);
    return val ? val.quantity : 0;
  });

  function handleClick() {
    setCount(c => c + 1);
    setIsClicked(true);
  }

  useEffect(() => {
    const filteredItem = JSON.parse(localStorage.getItem('cart')).find(item => item.id === id);
    if (filteredItem) {
      setIsClicked(true);
      setCount(filteredItem.quantity);
    } else {
      setCount(0);
    }
  }, []);

  function increaseQuantity() {
    setCount(c => c + 1);
  }

  useEffect(() => {
    if (count === 0) {
      setIsClicked(false);
    }
    setCart(prev => prev.map(item => (item.id === id ? { ...item, quantity: count } : item)));
  }, [count]);

  useEffect(() => {
    if (isClicked) {
      const newCartItem = {
        id: id,
        quantity: count,
        title: title,
        description: description,
        image: image,
        price: price,
        setCount: setCount,
      };
      setCart(p => [...p, newCartItem]);
    } else {
      setCart(prev => prev.filter(c => c.id !== id));
    }
  }, [isClicked]);

  // console.log(cart);

  return (
    <div className="flex flex-col relative bg-card hover:bg-accent dark:hover:bg-background justify-between shadow-sm rounded-md w-[280px] md:w-[220px] lg:w-[240px]">
     
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-[150px] w-full object-scale-down bg-white border-b-2"
        />
        <div className="flex flex-1 flex-col justify-between font-bold text-sm gap-1 p-2">
          <h1 className="line-clamp-1 text-lg capitalize">{title}</h1>
          {/* <p className="line-clamp-2 italic text-muted-foreground text-[12px]">{description}</p> */}
          <div className="flex items-start justify-between">
            <p className="text-xl md:text-2xl font-bold">₹{price}</p>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center justify-center gap-1">
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  starDimension="15px"
                  starSpacing="1px"
                />
                <p className="pt-1.5 text-[10px]">({rating})</p>
              </div>

              <p className="text-primary/80 text-[12px]">{reviews} Reviews</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-end items-center mx-2 mb-2">
        <p className="bg-green-500 px-2 text-sm absolute top-0 left-0 capitalize font-mono rounded-r-md text-black">
          {category}
        </p>
        {/* <Heart className={'text-red-500 text-sm rounded-full absolute top-1.5 right-2 cursor-pointer hover:fill-red-500'}/> */}
        {isClicked && count > 0 ? (
          <div className="flex items-center rounded-lg justify-center gap-2  border-background/40 font-mono ">
            <Button
              variant={'outline'}
              onClick={() => setCount(c => c - 1)}
              size={'sm'}
              className={'w-[35px] cursor-pointer'}
            >
              <Minus />
            </Button>
            <p className="mx-0 text-xl font-stretch-ultra-condensed">{count}</p>
            <Button
              variant={'outline'}
              onClick={increaseQuantity}
              size={'sm'}
              className={'w-[35px] cursor-pointer'}
            >
              <Plus />
            </Button>
          </div>
        ) : (
          <Button
            variant={'outline'}
            onClick={handleClick}
            size={'sm'}
            className={'cursor-pointer'}
          >
            Add to cart
          </Button>
        )}
      </div>
     
   
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired, // it's a UUID
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;

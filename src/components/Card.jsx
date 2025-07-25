import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from './ui/button';
import { useState } from 'react';
import { Heart, Minus, Plus } from 'lucide-react';


const Card = ({ id, title, description, image, price, rating, reviews, category }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0)
  function handleClick() {
    setIsClicked(true);
  }
  return (
    <div className="flex relative flex-col bg-card hover:bg-background justify-between border-[2px] rounded-md w-[240px] h-[320px] lg:w-[300px] lg:h-[450px]">
      <Link to={`/products/${id}`}>
     
        <img
          src={image}
          alt={title}
          className="h-[150px] lg:h-[250px] w-full object-scale-down bg-white border-b-2"
        />
        <div className="flex flex-1 flex-col justify-between font-bold text-sm gap-1 lg:gap-4 p-2">
          <h1 className="line-clamp-1 text-lg capitalize">{title}</h1>
          <p className="line-clamp-2 italic text-muted-foreground text-[12px]">{description}</p>
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
        <Heart className={'text-red-500 text-sm rounded-full absolute top-1.5 right-2 cursor-pointer hover:fill-red-500'}/>
        {isClicked ? (
          <div className='flex items-center rounded-lg justify-center gap-2 border-5 border-background/40 font-mono '>
            <Button variant={'outline'} onClick={() => setCount(c => Math.max(c - 1, 0))} size={'sm'} className={'cursor-pointer'}>
             <Minus/>
            </Button>
            <p className='mx-0 text-xl font-stretch-ultra-condensed'>{count}</p>
            <Button variant={'outline'}  onClick={() => setCount(c => c + 1)} size={'sm'} className={'cursor-pointer'}>
              <Plus/>
            </Button>
          </div>
        ): (<Button variant={'outline'} onClick={handleClick} size={'sm'} className={'cursor-pointer'}>
          Add to cart
        </Button>)}
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

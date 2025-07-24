import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ id, title, description, image, price, rating, reviews, category }) => {
  function handleClick() {
    console.log('hello');
  }
  return (
    <div className="flex relative flex-col bg-card hover:bg-background justify-between border rounded-[--radius] w-[300px] h-[450px]">
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} className="h-[250px] w-full object-scale-down bg-white" />
        <div className="flex flex-1 flex-col justify-between text-sm gap-4 p-2">
          <h1 className="line-clamp-1">{title}</h1>
          <p className="line-clamp-2 italic text-muted-foreground text-[12px]">{description}</p>
          <div className="flex items-start justify-between">
            <p className="text-2xl font-bold">₹{price}</p>
            <div className="flex flex-col items-end">
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                starDimension="15px"
                starSpacing="1px"
              />
              <p className="text-primary/50 text-[12px]">{reviews} Reviews</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-end items-center mx-2 mb-2">
        <p className='bg-primary px-2 absolute top-0 left-0 text-black'>{category}</p>
        <button
          onClick={handleClick}
          className="border rounded-[--radius] px-3 py-1.5 hover:bg-primary hover:text-secondary hover:border-secondary"
        >
          Add to cart
        </button>
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

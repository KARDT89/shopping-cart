import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <Link
      className="flex flex-col bg-card hover:bg-background hover:drop-shadow-md justify-center border rounded-sm w-[300px] h-[450px]"
      to={`/products/${props.id}`}
    >
      <img src={props.image} alt={props.title} className="h-[50%] object-scale-down bg-white " />
      <div className="flex flex-1 flex-col justify-between text-sm gap-4 p-2">
        <h1 className="line-clamp-1">{props.title}</h1>
        <p className="line-clamp-2 italic text-muted-foreground text-[12px]">{props.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl">₹{props.price}</p>
          <div className="flex flex-col items-end">
            <StarRatings
              rating={props.rating.rate}
              starRatedColor="gold"
              starDimension="15px"
              starSpacing="1px"
            />

            <p className="text-primary/50 text-[12px]">{props.rating.count} Reviews</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="border px-4 py-2 hover:bg-primary hover:text-secondary hover:border-secondary">
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;

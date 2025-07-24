import Card from './Card';
import { LoaderCircle } from 'lucide-react';
import { getAllProducts } from '../supabase/api';
import { useQuery } from '@tanstack/react-query';

export const Products = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (error)
    return (
      <div className="flex h-full w-full items-center justify-center bg-background text-foreground text-2xl gap-2">
        <p>Some Error Occured</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center bg-background text-foreground text-2xl gap-2">
        <LoaderCircle className="animate-spin" /> <p>Loading</p>
      </div>
    );

  return (
    <div>
      {/* left */}

      {/* right */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {products.map(product => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rate}
            reviews={product.reviews}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

// Without tanstack I previously did this

// const [products, setProducts] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(false);

// useEffect(() => {
//   async function fetchProducts() {
//     setIsLoading(true);
//     try {
//       const data = await supabaseService.getAllProducts();
//       setProducts(data);
//     } catch (err) {
//       console.error(err);
//       setError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   fetchProducts();
// }, []);

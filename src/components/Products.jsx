import Card from './Card';
import { LoaderCircle } from 'lucide-react';
import { getAllProducts } from '../supabase/api';
import { useState, useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
      
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error)
    return (
      <div className="flex h-full w-full items-center justify-center bg-background text-foreground text-2xl gap-2">
        <p>{error}</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center bg-background text-foreground text-2xl gap-2">
        <LoaderCircle className="animate-spin" /> <p>Loading</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      {/* left */}
      <div className="md:hidden text-center text-2xl">
        <p>Shop Here</p>
      </div>
      {/* right */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
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

// const {
//   data: products,
//   isLoading,
//   error,
//   isError,
// } = useQuery({
//   queryKey: ['products'],
//   queryFn: getAllProducts,
// });

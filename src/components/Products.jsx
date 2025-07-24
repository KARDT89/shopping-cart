import React, { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import Card from './Card';
import { Link } from 'react-router-dom';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } 
    }
    fetchProducts();
  }, []);

  console.log(products);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
        {products.map((product, idx) => (
          <Card
            id={idx}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

// import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../supabase/api';
import { LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const { id: productID } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const data = await getProductById(productID);
      setProduct(data);
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
      <Link to={'/products'}>
        <button className="border px-2">back</button>
      </Link>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductPage;


// const { data: product, isLoading, error } = useQuery({
  //   queryKey: ['product', productID],
  //   queryFn: () => getProductById(productID),
  // });
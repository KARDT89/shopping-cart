import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProductById } from '../supabase/api';
import { LoaderCircle } from 'lucide-react';

const ProductPage = () => {
  const { id: productID } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', productID],
    queryFn: () => getProductById(productID),
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
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.price}</div>
    </div>
  );
};

export default ProductPage;

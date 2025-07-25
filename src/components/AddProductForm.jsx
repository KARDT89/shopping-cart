import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { slugify } from '../../utils/slugify';
import { addProduct } from '../supabase/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Button } from './ui/button';

const AddProductForm = () => {
  const form = useForm();
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    watch,
    handleSubmit,
  } = form;
  const watchTitle = watch('title');

  const queryClient = useQueryClient();

  const { mutate, isError, isPending, error } = useMutation({
    mutationKey: ['addProduct'],
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast('Successfully Added Product');
    },
  });

  function submitForm(data) {
    console.log(data);
    mutate({ ...data, slug: slugify(data.title) });
  }

  return (
    <div>
      <form className="w-sm font-mono flex flex-col gap-3" onSubmit={handleSubmit(submitForm)}>
        <Label htmlFor="title">
          Title: {errors.title && <p className="text-red-600">{errors.title.message}</p>}
        </Label>
        <input
          type="text"
          id="title"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('title', { required: 'Title is required' })}
        />

        <Label htmlFor="slug">Slug</Label>
        <input
          type="text"
          id="slug"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          value={slugify(watchTitle || '')}
          {...register('slug')}
          readOnly
        />

        <Label htmlFor="description">Description</Label>
        <input
          type="text"
          id="description"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('description')}
        />

        <Label htmlFor="category">Category{errors.category && <p className="text-red-600">{errors.category.message}</p>}</Label>
        <input
          type="text"
          id="category"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('category', { required: 'Category is required' })}
        />

        <Label htmlFor="image">Image Link</Label>
        <input
          type="text"
          id="image"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('image')}
        />

        <Label htmlFor="price">Price{errors.price && <p className="text-red-600">{errors.price.message}</p>}</Label>
        <input
          type="number"
          id="price"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('price', { required: 'Price is required' })}
        />

        <Label htmlFor="rating">Rating</Label>
        <input
          type="number"
          id="rating"
          step="any"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('rating')}
        />

        <Label htmlFor="reviews">Total Reviews</Label>
        <input
          type="number"
          id="reviews"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('reviews')}
        />

        <Button type="submit" className="border py-1 cursor-pointer" variant={'ghost'} disabled={isSubmitting}>
          Submit
        </Button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default AddProductForm;

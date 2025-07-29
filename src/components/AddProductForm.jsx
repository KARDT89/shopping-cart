import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { slugify } from '../../utils/slugify';
import { addProduct, getCurrentSession } from '../supabase/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';

const AddProductForm = () => {
  const form = useForm({
    defaultValues: {
      title: '',
    },
  });
  const {
    register,
    formState: { errors, isSubmitting },
    control,
    watch,
    handleSubmit,
  } = form;
  const watchTitle = watch('title');

  // async function submitForm(data) {
  //   try {
  //     await addProduct({ ...data, slug: slugify(data.title), user: getUser() });
  //     toast('Successfully Added Product');
  //   } catch (error) {
  //     console.log(error);
  //     toast('Error occured');
  //   }
  // }

  const queryClient = useQueryClient();

  const { mutate, isError, isPending, error } = useMutation({
    mutationKey: ['addProduct'],
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast('Successfully Added Product');
    },
    isError: () => {
      console.log(error); 
    }
  });
  async function submitForm(data) {
    try {
      const user = await getUser();
      console.log({
        ...data,
        slug: slugify(data.title),
        user,
      });
      mutate({ ...data, slug: slugify(data.title), user });
    } catch (e) {
      toast.error('Could not add product: ' + e.message);
    }
  }

  const getUser = async () => {
    const { data, error } = await getCurrentSession();
    if (error || !data?.session?.user?.id) {
      throw new Error('No active user session found');
    }
    return data.session.user.id;
  };

  return (
    <div>
      <form
        className="w-xs md:w-md font-mono flex flex-col gap-3 border p-6 rounded-lg"
        onSubmit={handleSubmit(submitForm)}
      >
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

        <Label htmlFor="category">
          Category{errors.category && <p className="text-red-600">{errors.category.message}</p>}
        </Label>
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

        <Label htmlFor="price">
          Price{errors.price && <p className="text-red-600">{errors.price.message}</p>}
        </Label>
        <input
          type="number"
          id="price"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('price', { required: 'Price is required' })}
        />
        <Label htmlFor="rating">
          Rating{' '}
          {errors.rating?.type === 'min' && (
            <span className="text-red-500 text-sm">Minimum rating is 1</span>
          )}
          {errors.rating?.type === 'max' && (
            <span className="text-red-500 text-sm">Maximum rating is 5</span>
          )}
        </Label>
        <input
          type="number"
          id="rating"
          step="any"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('rating', { min: 0, max: 5 })}
        />

        <Label htmlFor="reviews">Total Reviews</Label>
        <input
          type="number"
          id="reviews"
          className="lg:block bg-background border text-sm px-4 py-1 rounded-md"
          {...register('reviews')}
        />

        <Button type="submit" className="border py-1 cursor-pointer" disabled={isSubmitting}>
          {isSubmitting ? (
            <p className="flex gap-2 items-center justify-center">
              <Loader2 className="animate-spin" /> Submitting
            </p>
          ) : (
            <p>Submit</p>
          )}
        </Button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default AddProductForm;

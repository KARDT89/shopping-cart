import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { slugify } from '../../utils/slugify';

const AddProductForm = () => {
  const form = useForm();
  const { register, control, getValues, watch, handleSubmit } = form;
  const watchTitle = watch('title');

  function AddProduct(data){
    console.log(data)
  }

  return (
    <div>
      <form className="w-100 font-mono flex flex-col gap-3" onSubmit={handleSubmit(AddProduct)}>
        <Label htmlFor="title">Title</Label>
        <input type="text" id="title" className="lg:block bg-background border text-sm px-4 py-1" {...register('title')}/>

        <Label htmlFor="slug">Slug</Label>
        <input type="text" id="slug" className="lg:block bg-background border text-sm px-4 py-1" value={slugify(watchTitle || "")}  {...register('slug')} readOnly />

        <Label htmlFor="description">Description</Label>
        <input type="text" id="description" className="lg:block bg-background border text-sm px-4 py-1" {...register('description')} />

        <Label htmlFor="category">Category</Label>
        <input type="text" id="category" className="lg:block bg-background border text-sm px-4 py-1" {...register('category')} />

        <Label htmlFor="image">Image Link</Label>
        <input type="text" id="image" className="lg:block bg-background border text-sm px-4 py-1" {...register('image')} />

        <Label htmlFor="price">Price</Label>
        <input type="number" id="price" className="lg:block bg-background border text-sm px-4 py-1" {...register('price')} />

        <Label htmlFor="rating">Rating</Label>
        <input type="number" id="rating" className="lg:block bg-background border text-sm px-4 py-1" {...register('rating')} />

        <Label htmlFor="reviews">Total Reviews</Label>
        <input type="number" id="reviews" className="lg:block bg-background border text-sm px-4 py-1" {...register('reviews')} />

        <button type="submit" className='border py-1' variant={'outline'}>
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default AddProductForm;

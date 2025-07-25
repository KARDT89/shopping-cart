import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().trim().min(1, "Title can't be empty"),
  slug: z.string().trim().min(1, "Slug can't be empty"),
  description: z.string().trim().min(1, "Description can't be empty"),
  category: z.string().trim().min(1, "Category can't be empty"),
  image: z.string().trim().min(1, "Image can't be empty"),
  price: z.any(),
  rating: z.string().min(1, "Rating can't be empty"),
  reviews: z.string(),
})

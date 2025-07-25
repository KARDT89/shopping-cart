import supabaseService from './config.js';

export async function getAllProducts() {
  const response = await supabaseService.getAllProducts();
  return response;
}

export async function getProductById(id) {
  const { data, error } = await supabaseService.getProductById(id);
  return data;
}

export async function addProduct(product) {
  const { title, description, slug, category, image, price, rating, reviews } = product;
  await supabaseService.addProducts(
    title,
    description,
    slug,
    category,
    image,
    price,
    rating,
    reviews
  );
}

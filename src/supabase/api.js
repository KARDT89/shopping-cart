import supabaseService from './config.js';

export async function getAllProducts() {
  const response = await supabaseService.getAllProducts();
  return response;
}

export async function getAllCategories() {
  const response = await supabaseService.getAllCategories();
  return response;
}

export async function getProductById(id) {
  const { data, error } = await supabaseService.getProductById(id);
  return data;
}

export async function addProduct(product) {
  const { title, description, slug, category, image, price, rating, reviews, user } = product;
  await supabaseService.addProducts(
    user,
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
export async function GithubLogin() {
  await supabaseService.signInWithOAuth('github');
}

export async function getCurrentSession() {
  const { data, error } = await supabaseService.getSession();
  return { data, error };
}

export async function signUpNewUser(email, password) {
  const { data, error } = await supabaseService.signUpNewUser(email, password);
  return { data, error };
}

export async function signInWithEmail(email, password) {
  const { data, error } = await supabaseService.signInWithEmail(email, password);
  return { data, error };
}

export async function signOut() {
  const { error } = await supabaseService.signOut();
  return error;
}

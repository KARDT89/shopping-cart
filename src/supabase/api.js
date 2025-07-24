import supabaseService from './config.js';

export async function getAllProducts() {
  const response = await supabaseService.getAllProducts();
  return response;
}

export async function getProductById(id) {
  const { data, error } = await supabaseService.getProductById(id);
  return data;
}

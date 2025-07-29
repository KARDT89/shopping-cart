import { createClient } from '@supabase/supabase-js';
import { slugify } from '../../utils/slugify';

class Service {
  constructor() {
    this.supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
  }

  async getAllProducts() {
    try {
      const { data } = await this.supabase.from('products').select();
      const updatedData = data.map(v => ({ ...v, slug: slugify(v.title), isAddedToCart: false }));
      return updatedData;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    const { data, error } = await this.supabase.from('products').select().eq('id', id).single();
    return { data, error };
  }

  async addProducts(title, description, slug, category, image, price, rating, reviews, user) {
    const { error, data } = await this.supabase.from('products').insert({
      user: user,
      slug: slug,
      title: title,
      description: description,
      image: image,
      price: price,
      rate: rating,
      reviews: reviews,
      category: category,
    });
    if (error) throw error;
    return data;
  }

  async signInWithOAuth(provider) {
    await this.supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `http://localhost:5173/products`,
      },
    });
  }

  async getSession() {
    const { data, error } = await this.supabase.auth.getSession();
    return { data, error };
  }
}

export default new Service();

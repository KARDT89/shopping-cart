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

  async getAllCategories() {
    try {
      const { data } = await this.supabase.from('categories').select();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    const { data, error } = await this.supabase.from('products').select().eq('id', id).single();
    return { data, error };
  }

  async addProducts(user, title, description, slug, category, image, price, rating, reviews) {
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

  async signUpNewUser(email, password) {
    const { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'http://localhost:5173/products',
      },
    });
    return { data, error };
  }
  async signInWithEmail(email, password) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return { data, error };
  }
  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    return error;
  }
}

export default new Service();

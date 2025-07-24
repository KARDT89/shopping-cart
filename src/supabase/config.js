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
}

export default new Service();
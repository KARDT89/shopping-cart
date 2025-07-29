import Card from './Card';
import { LoaderCircle } from 'lucide-react';
import { getAllProducts } from '../supabase/api';
import { useState, useEffect } from 'react';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const data = await getAllProducts();
        setProducts(data);
        setOriginalProducts(data); // preserve original order
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function handleSortChange(e) {
    const value = e.target.value;
    setSortOption(value);

    let sorted = [...products];

    switch (value) {
      case 'priceLowHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rate - a.rate);
        break;
      case 'default':
        sorted = [...originalProducts];
        break;
    }

    setProducts(sorted);
  }

  useEffect(() => {
    const query = searchInput.toLowerCase();
    const answer = originalProducts.filter(
      item =>
        item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
    );
    setProducts(answer);
  }, [searchInput, originalProducts]);

  if (error)
    return (
      <div className="flex h-[60vh] w-full items-center justify-center text-red-500 gap-2 text-xl">
        <AlertTriangle className="w-6 h-6" />
        <p>Something went wrong. Please try again later.</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-full max-w-xs h-80 bg-muted rounded-xl animate-pulse" />
        ))}
      </div>
    );

  console.log(searchInput);

  return (
    <div className="flex flex-col gap-6 px-4 md:px-10 pt-4 md:pt-2">
      {/* Heading */}
      <div className="block md:hidden text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
          Shop Our Products
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Explore curated items across all categories
        </p>
      </div>

      {/* Sort Dropdown */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center mx-8">
        {/* search */}

        <input
          type="text"
          className=" bg-background border-2 w-full lg:w-full max-w-[250px] text-sm px-4 py-1 rounded-lg"
          placeholder="search..."
          onChange={e => setSearchInput(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-muted-foreground">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="border-2 text-sm px-3 py-1 rounded-lg bg-background text-foreground focus:outline-none "
          >
            <option value="default">Default</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center pb-10">
        {products.map(product => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rate}
            reviews={product.reviews}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

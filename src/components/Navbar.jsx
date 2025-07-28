import { NavLink, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ModeToggle from './ModeToggle';
import { House, Search, ShoppingCart, Store } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';

export const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <nav className="mx-auto my-2 lg:my-4 block md:grid md:grid-cols-3 justify-start backdrop-blur-sm p-2.5 lg:px-8 w-[95%] max-w-[200rem] text-md text-white bg-black/80 font-mono border rounded-md fixed bottom-0 md:top-0 md:bottom-auto left-0 right-0 z-50">
        <h1 className="hidden md:block text-xl">
          {' '}
          <NavLink to={'/'}>JustAnotherStore</NavLink>
        </h1>

        <div className="hidden md:flex gap-4 items-center justify-center text-white/70 ">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-primary')}
          >
            Active
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-primary')}
          >
            Create
          </NavLink>
        </div>
        <div className="grid grid-cols-5 justify-items-center md:flex md:items-center md:justify-end gap-4">
          <input
            type="text"
            className="md:block bg-black border w-[180px] lg:w-full max-w-[250px] text-sm px-4 py-1 hidden"
            placeholder="search..."
          />

          <Link to={'/'} className="md:hidden">
            <House />
          </Link>
          <Link to={'/products'} className="md:hidden">
            <Store />
          </Link>

          <Link to={'/products'} className="flex md:hidden">
            <Search />
          </Link>
          <HoverCard>
            <HoverCardTrigger>
              <Link to="/cart" className="relative">
                <ShoppingCart className="hover:text-primary cursor-pointer " />
                {cart.length > 0 && (
                  <p className="text-sm absolute bottom-3 left-3 bg-red-400 px-1.5 rounded-full">
                    {cart.length}
                  </p>
                )}
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>
              <Cart/>
            </HoverCardContent>
          </HoverCard>
          <ModeToggle />
        </div>
      </nav>
      <div className="px-4 py-4 pb-20 md:pb-0 md:py-20 lg:px-10 bg-background min-h-screen text-foreground">
        <Outlet />
      </div>
    </div>
  );
};

/* <NavLink
to="/admin" 
className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
>
Admin
</NavLink> */

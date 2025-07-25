import { NavLink, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ModeToggle from './ModeToggle';
import { House, Search, ShoppingCart, Store } from 'lucide-react';

export const Navbar = () => {
  return (
    <div>
      <nav className="mx-auto my-2 lg:my-4 block md:grid md:grid-cols-3 justify-start backdrop-blur-sm p-2.5 lg:px-8 w-[95%] max-w-[200rem] text-md text-white bg-black/80 font-mono border rounded-md fixed bottom-0 md:top-0 md:bottom-auto left-0 right-0 z-50">
        <h1 className="hidden md:block text-xl">Store89</h1>
        <div className="hidden md:flex gap-4 items-center justify-center text-white/90 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-primary')}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-primary')}
          >
            Shop
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
          <Link to="/cart">
            <ShoppingCart className="hover:text-primary cursor-pointer" />
          </Link>

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

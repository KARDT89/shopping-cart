import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ModeToggle from './ModeToggle';
import { ShoppingCart } from 'lucide-react';

export const Navbar = () => {
  return (
    <div>
      <nav className="mx-auto my-2 lg:my-4 flex justify-between backdrop-blur-sm p-2.5 lg:px-8 w-[95%] max-w-[200rem] text-md text-white bg-transparent/70 font-mono border rounded-[--radius] fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl">My Store</h1>
        <div className="flex gap-4 items-center justify-center text-white/50">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Shop
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCart className="hover:text-primary cursor-pointer" />
          <ModeToggle />
        </div>
      </nav>
      <div className="px-4 py-20 lg:px-10 bg-background min-h-screen text-foreground">
        <Outlet />
      </div>
    </div>
  );
};

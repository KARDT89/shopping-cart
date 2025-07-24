import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ModeToggle from './ModeToggle';
import { ShoppingCart } from 'lucide-react';

export const Navbar = () => {
  return (
    <div>
      <nav className="mx-auto lg:my-2 flex justify-between p-2.5 lg:px-8 w-full max-w-[100rem] text-md text-foreground bg-background font-mono border rounded-xl fixed top-0 left-0 right-0 dark:bg-transparent/80">
        <h1 className="text-xl">My Store</h1>
        <div className="flex gap-4 items-center justify-center text-foreground/50">
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
      <div className="py-16 px-4 lg:py-20 lg:px-10 bg-background min-h-screen text-foreground">
        <Outlet />
      </div>
    </div>
  );
};

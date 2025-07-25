import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ModeToggle from '../ModeToggle';
import { ShoppingCart } from 'lucide-react';

const Admin = () => {
  return (
    <div>
      <nav className="mx-auto my-2 lg:my-4 grid grid-cols-3 justify-start backdrop-blur-sm p-2.5 lg:px-8 w-[95%] max-w-[200rem] text-md text-foreground bg-background/85 font-mono border rounded-md fixed top-0 left-0 right-0 z-50">
        <h1 className="text-xl">Admin Panel</h1>
        <div className="flex gap-4 items-center justify-center text-foreground/50">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Home
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            User
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Products
          </NavLink>
          <NavLink
            to="/admin/categories"
            className={({ isActive }) => (isActive ? 'text-primary' : 'hover:text-primary')}
          >
            Categories
          </NavLink>
        </div>
        <div className="flex items-center justify-end gap-4">
          <input
            type="text"
            className="lg:block bg-background border rounded-[--radius] text-sm px-4 py-1 hidden"
            placeholder="search..."
          />
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

export default Admin;

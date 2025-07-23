import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ModeToggle from "./ModeToggle";

export const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between p-4 text-md bg-background text-primary font-mono ">
                <h1 className="text-xl">My Store</h1>
                <div className="flex gap-4 items-center justify-center text-primary/50">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }
                    >
                        Products
                    </NavLink>
                    <ModeToggle />
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

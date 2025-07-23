import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between p-4 text-md bg-background text-foreground font-mono ">
                <h1 className="text-xl">My Store</h1>
                <div className="flex gap-4 items-center justify-center text-foreground/50">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "hover:text-primary"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : "hover:text-primary"
                        }
                    >
                        Products
                    </NavLink>
                </div>
                <div className="flex items-center gap-4">
                    <ShoppingCart className="hover:text-primary cursor-pointer"/>
                    <ModeToggle />
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

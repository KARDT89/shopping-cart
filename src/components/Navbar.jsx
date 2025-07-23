import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between p-4 text-md bg-primary">
                <h1 className="text-xl">My Store</h1>
                <div className="flex gap-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="products">Products</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

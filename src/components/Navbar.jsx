import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Products", to: "/products" },
    {
      name: "Cart",
      to: "/cart",
      icon: <FiShoppingCart className="inline ml-1 align-middle" />,
    },
  ];

  const baseLinkClasses =
    "flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer no-underline";

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-opacity-95 backdrop-blur-md shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-3xl font-black text-white tracking-wide hover:text-yellow-200 transition-colors duration-300"
        >
          <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            ShopEase
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ name, to, icon }) => (
            <NavLink key={to} to={to} end>
              {({ isActive }) => (
                <div
                  className={`${baseLinkClasses} ${
                    isActive
                      ? "bg-white text-amber-700 font-semibold shadow-sm"
                      : "text-white hover:bg-white hover:text-amber-700 hover:shadow"
                  }`}
                >
                  <span>{name}</span>
                  {icon}
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 flex flex-col bg-amber-600">
          {links.map(({ name, to, icon }) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} end>
              {({ isActive }) => (
                <div
                  className={`${baseLinkClasses} ${
                    isActive
                      ? "bg-white text-amber-700 font-semibold shadow-sm"
                      : "text-white hover:bg-white hover:text-amber-700 hover:shadow"
                  }`}
                >
                  <span>{name}</span>
                  {icon}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

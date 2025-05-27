import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkBase =
    "flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer no-underline";

  const activeClasses = "bg-white text-amber-700 font-semibold shadow-sm";
  const inactiveClasses =
    "text-white hover:bg-white hover:text-amber-700 hover:shadow";

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500 bg-opacity-95 backdrop-blur-md shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-3xl font-black text-white hover:text-yellow-200"
        >
          <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            ShopEase
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Products Link */}
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            Products
          </NavLink>

          {/* Cart Link */}
          <NavLink
            to="/cart"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            <span>Cart ({cart.length})</span>
            <FiShoppingCart className="inline" />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
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
        <div className="md:hidden flex flex-col px-6 pb-4 bg-amber-600 space-y-2">
          <NavLink
            to="/products"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
            }
            onClick={() => setMenuOpen(false)}
          >
            <FiShoppingCart className="inline" />
            <span>Cart ({cart.length})</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

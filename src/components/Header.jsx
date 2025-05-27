import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import CartDrawer from "./CartDrawer";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src="/public/logo.png" alt="Logo" className="h-15 w-25" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search Products..."
              className="pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
          <FiUser className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer" />
          <CartDrawer />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/categories" onClick={() => setMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center space-x-4 mt-2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
                <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
              </div>
              <FiUser className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer" />
              <FiShoppingCart className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

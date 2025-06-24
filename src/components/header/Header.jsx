import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import CartDrawer from "./CartDrawer";
import UserDrawer from "./UserDrawer";
import SearchBar from "./SearchBar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-4">
      {/* Top Bar - Mobile Only */}
      <div className="flex items-center justify-between md:hidden relative">
        {/* Left: Menu Button */}
        <button
          className="text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        <div>
          <CartDrawer />
        </div>
      </div>

      <div className="container mx-auto hidden md:flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Right: Search + User + Cart */}
        <div className="items-center space-x-4 flex">
          <SearchBar />
          <UserDrawer />
          <CartDrawer />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <div className="flex items-center space-x-4 mt-4">
              <SearchBar />
              <UserDrawer />
              {/* CartDrawer not included here to avoid duplication */}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
// This code defines a responsive header component for a React e-commerce application.
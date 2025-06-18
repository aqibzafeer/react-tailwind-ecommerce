import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import CartDrawer from "./CartDrawer";
import UserDrawer from "./UserDrawer";
import SearchBar from "./SearchBar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-15 w-25" />
          </Link>
        </div>

        {/* Center: Menu Button (mobile only) */}
        <div className="flex-1 flex justify-center md:hidden">
          <button
            className="text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Right: CartDrawer (mobile only) */}
        <div className="flex items-center lg:hidden">
          <CartDrawer />
        </div>

        {/* Desktop Navigation */}
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          {/* <Link to="/categories">Categories</Link> */}
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="items-center space-x-4 hidden lg:flex">
          <SearchBar />
          <UserDrawer />
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
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
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
              <SearchBar />
              <UserDrawer />
              {/* Remove CartDrawer here to avoid duplicate on mobile */}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

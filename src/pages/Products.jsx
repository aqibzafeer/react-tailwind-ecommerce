import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "./api/FetchData";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../hooks/useCart";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceSort, setPriceSort] = useState("");
  const [alphaSort, setAlphaSort] = useState("");
  const [categorySort, setCategorySort] = useState("all");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        const cats = new Set();
        data.forEach((product) => {
          product.categories?.forEach((cat) => {
            if (cat?.name) cats.add(cat.name);
          });
        });
        setCategories(Array.from(cats));
      } catch (error) {
        console.error("Error loading products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "colored",
      className: "bg-green-100 text-green-800"
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (setter) => (e) => {
    setter(e.target.value);
    setCurrentPage(1);
  };

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (categorySort !== "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.categories?.some(
        (cat) => cat.name && cat.name.toLowerCase() === categorySort.toLowerCase()
      )
    );
  }

  if (priceSort === "low-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => (a.sale_price || a.price) - (b.sale_price || b.price)
    );
  } else if (priceSort === "high-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => (b.sale_price || b.price) - (a.sale_price || a.price)
    );
  }

  if (alphaSort === "a-z") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (alphaSort === "z-a") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="bg-gradient-to-r from-indigo-700 to-purple-800 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Products</h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Discover our wide range of high-quality products
          </p>
          
          {/* Search and Filters */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border-0 shadow-lg focus:ring-2 focus:ring-orange-400 text-white"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <div className="relative">
                <select 
                  className="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={priceSort}
                  onChange={handleSortChange(setPriceSort)}
                >
                  <option value="">Price</option>
                  <option value="low-high">Low to High</option>
                  <option value="high-low">High to Low</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select 
                  className="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={alphaSort}
                  onChange={handleSortChange(setAlphaSort)}
                >
                  <option value="">Sort by Name</option>
                  <option value="a-z">A to Z</option>
                  <option value="z-a">Z to A</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select 
                  className="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={categorySort}
                  onChange={handleSortChange(setCategorySort)}
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="lg" />
          </div>
        ) : currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative pt-[100%] overflow-hidden">
                      <img
                        src={product.images[0]?.src || "/ImageNotFound.png"}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-indigo-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xl font-bold text-indigo-600">
                        Rs. {product.sale_price || product.price}
                      </span>
                      {product.sale_price && (
                        <span className="text-sm text-gray-500 line-through">
                          Rs. {product.price}
                        </span>
                      )}
                    </div>
                    {product.categories?.[0]?.name && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                        {product.categories[0].name}
                      </span>
                    )}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all hover:shadow-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {filteredProducts.length > productsPerPage && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    // Show first, last, current, and adjacent pages
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={index}
                          onClick={() => goToPage(page)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                            currentPage === page
                              ? "bg-indigo-600 text-white"
                              : "bg-white text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                    // Show ellipsis for gaps
                    if (
                      (page === currentPage - 2 && currentPage > 3) ||
                      (page === currentPage + 2 && currentPage < totalPages - 2)
                    ) {
                      return (
                        <span key={index} className="px-2 text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FiChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg
                className="w-16 h-16 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
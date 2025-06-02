import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "./api/FetchData";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../hooks/useCart";
import LoadingSpinner from "../components/LoadingSpinner";

const Product = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceSort, setPriceSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceSortChange = (e) => {
    setPriceSort(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Search term
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter by category
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.categories?.some(
        (cat) =>
          cat.name && cat.name.toLowerCase() === selectedCategory.toLowerCase()
      )
    );
  }

  // Sort by price
  if (priceSort === "low-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => (a.sale_price || a.price) - (b.sale_price || b.price)
    );
  } else if (priceSort === "high-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => (b.sale_price || b.price) - (a.sale_price || a.price)
    );
  }

  return (
    <>
      <div className="mt-0 bg-gradient-to-r from-gray-800 to-indigo-600 min-h-[300px] flex flex-col justify-center items-center px-4 md:px-0">
        <h3 className="text-[13px] text-[#f28123] font-bold uppercase tracking-[7px] text-center sm:text-left">
          See more Details
        </h3>
        <h2 className="text-[50px] font-black text-[#f28123] mt-1 text-center sm:text-left">
          All Product
        </h2>

        <div className="relative w-full sm:w-1/2 mt-2.5">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 w-full rounded-md border text-amber-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>
      <div className="w-full align-middle bg-gray-100 p-4 mx-auto flex flex-col items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center w-full max-w-5xl">
          <select
            className="p-4"
            value={priceSort}
            onChange={handlePriceSortChange}
          >
            <option value="">Price</option>
            <option value="low-high">Low-High</option>
            <option value="high-low">High-Low</option>
          </select>

          <select className="p-4">
            <option value="all">Gender</option>
            <option value="electronics">Mens</option>
            <option value="fashion">Women</option>
            <option value="home">Kids</option>
          </select>

          <select
            className="p-4"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">Category</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="MEN">MEN</option>
            <option value="shawl">Shawl</option>
          </select>
        </div>
      </div>

      <div className="p-4">
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 m-3 justify-items-center items-center">
          {loading && products.length === 0 ? (
            <LoadingSpinner />
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-md p-2 bg-gray-200 shadow h-auto flex flex-col items-center"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]?.src || "/ImageNotFound.png"}
                    alt={product.name}
                    className="w-full h-100 object-cover mb-2 rounded"
                  />
                </Link>
                <Link to={`/product/${product.id}`}>
                  <h4 className="font-semibold text-lg text-center">
                    {product.name}
                  </h4>
                </Link>
                <p className="text-gray-700 pt-2.5 text-3xl text-center">
                  Rs. {product.sale_price || product.price}
                </p>
                <p className="text-center">{product.categories?.[0]?.name}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 mb-2 w-1/2 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default Product;

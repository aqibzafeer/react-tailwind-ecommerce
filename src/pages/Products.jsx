import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "./api/FetchData";
import { FiSearch } from "react-icons/fi";
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
  const productsPerPage = 20;

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
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Added to cart successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light",
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePriceSortChange = (e) => {
    setPriceSort(e.target.value);
    setCurrentPage(1);
  };

  const handleAlphaSortChange = (e) => {
    setAlphaSort(e.target.value);
    setCurrentPage(1);
  };

  const handleCategorySortChange = (e) => {
    setCategorySort(e.target.value);
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

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

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
   <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-5 mb-5 justify-center items-center w-full text-[#f28123] max-w-5xl">
  <select
    className="p-2 w-full sm:w-auto border rounded text-white"
    value={priceSort}
    onChange={handlePriceSortChange}
  >
    <option value="">Price</option>
    <option value="low-high">Low-High</option>
    <option value="high-low">High-Low</option>
  </select>

  <select
    className="p-2 w-full sm:w-auto border rounded text-white"
    value={alphaSort}
    onChange={handleAlphaSortChange}
  >
    <option value="">Sort by Name</option>
    <option value="a-z">A-Z</option>
    <option value="z-a">Z-A</option>
  </select>

  <select
    className="p-2 w-full sm:w-auto border rounded text-white"
    value={categorySort}
    onChange={handleCategorySortChange}
  >
    <option value="all">All Categories</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>

      </div>

      <div className="p-4">
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 m-3 justify-items-center items-center">
          {loading && products.length === 0 ? (
            <LoadingSpinner />
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
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
                  <h4 className="font-semibold text-lg text-center">{product.name}</h4>
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
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </main>

        {filteredProducts.length > productsPerPage && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;

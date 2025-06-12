import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "./api/FetchData";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../hooks/useCart";
import LoadingSpinner from "../components/LoadingSpinner";

const Categories = () => {
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorySort, setCategorySort] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);

        // Extract unique categories from products
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
  };

  //   const handleCategorySortChange = (e) => {
  //     setCategorySort(e.target.value);
  //   };

  // Filter by search term
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter by category
  if (categorySort !== "all") {
    filteredProducts = filteredProducts.filter((product) =>
      product.categories?.some(
        (cat) =>
          cat.name && cat.name.toLowerCase() === categorySort.toLowerCase()
      )
    );
  }

  return (
    <>
      <div className="mt-0 bg-gradient-to-r from-gray-800 to-indigo-600 min-h-[300px] flex flex-col justify-center items-center px-4 md:px-0">
        {/* <h2 className="text-[50px] font-black text-[#f28123] mt-1 text-center sm:text-left">
          Category
        </h2> */}

        <div className="flex flex-wrap gap-5 mt-5 justify-center items-center w-full text-[#f28123] max-w-5xl">
          <button
            className={`px-4 py-2 rounded font-bold uppercase text-[13px] transition ${
              categorySort === "all"
                ? "bg-[#f28123] text-white"
                : "bg-white text-[#f28123] hover:bg-[#f28123] hover:text-white"
            }`}
            onClick={() => setCategorySort("all")}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded font-bold uppercase text-[13px] transition${
                categorySort === cat
                  ? "bg-[#f28123] text-white"
                  : "bg-white text-[#f28123] hover:bg-[#f28123] hover:text-white"
              }`}
              onClick={() => setCategorySort(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full align-middle bg-gray-100 p-4 mx-auto flex flex-col items-center"></div>

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

export default Categories;

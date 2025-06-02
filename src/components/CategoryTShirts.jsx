import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../pages/api/FetchData";
import { useCart } from "../hooks/useCart";

const CategoryTShirts = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        const tshirtProducts = data.filter(
          (product) =>
            product.category?.toLowerCase() === "t-shirts" ||
            product.category?.toLowerCase() === "tshirt" ||
            product.category?.toLowerCase() === "tshirt" ||
            product.categories?.some((cat) =>
              typeof cat === "string"
                ? cat.toLowerCase() === "t-shirts" ||
                  cat.toLowerCase() === "tshirt"
                : cat.name?.toLowerCase() === "t-shirts" ||
                  cat.name?.toLowerCase() === "tshirt"
            )
        );

        setProducts(tshirtProducts);
      } catch (error) {
        console.error("Error fetching t-shirt products:", error);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 mt-20 text-gray-900">
        T-Shirts Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No t-shirt products found.
          </div>
        )}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col overflow-hidden"
          >
            <div className="relative group">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images?.[0]?.src || "/ImageNotFound.png"}
                  alt={product.name}
                  className="w-full h-100 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <span className="absolute top-3 right-3 bg-red-900 text-white text-xs px-2 py-1 rounded-full shadow">
                New
              </span>
            </div>
            <div className="flex-1 flex flex-col p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-900 font-bold text-base mb-4">
                Rs. {product.sale_price || product.price}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 mb-2 w-1/2 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/categories">
          <button className="mt-2 mb-2 w-full p-5 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition">
            Show All Categories
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CategoryTShirts;

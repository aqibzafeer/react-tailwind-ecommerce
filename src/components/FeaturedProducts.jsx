import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../pages/api/FetchData";
import { useCart } from "../hooks/useCart";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(90, 94));
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };
    loadProducts();
  }, []);

  return (
    <section className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 mt-20 text-gray-900">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
        <Link to="/products">
          <button className="mt-2 mb-2 w-full p-5 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition">
            Show All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../pages/api/FetchData";
import { useCart } from "../hooks/useCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(90, 94));
      } catch (error) {
        console.error("Error fetching featured products:", error);
        toast.error("Failed to load featured products");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
        Featured Products
        </span> 
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-w-1 aspect-h-1 w-full">
                 <img
                  src={product.images?.[0]?.src || "/ImageNotFound.png"}
                  alt={product.name}
                  className="w-full h-100 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
              </Link>
              <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                New
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
              </Link>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-xl font-bold text-indigo-600">
                    Rs. {product.sale_price || product.price}
                  </span>
                  {product.sale_price && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      Rs. {product.price}
                    </span>
                  )}
                </div>



                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">


            <button
              onClick={() => navigate("/products")}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"
            >
          View All Products
                     {/* <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg> */}
            </button>


      </div>
    </section>
  );
};

export default FeaturedProducts;

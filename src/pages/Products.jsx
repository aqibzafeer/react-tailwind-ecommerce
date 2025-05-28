import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "./api/FetchData";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <>
      <div className="mt-0 bg-gray-200 min-h-[300px] flex flex-col justify-center items-center px-4 md:px-0">
        <h3 className="text-[13px] text-[#f28123] font-bold uppercase tracking-[7px] text-center sm:text-left">
          See more Details
        </h3>
        <h2 className="text-[50px] font-black text-[#f28123] mt-1 text-center sm:text-left">
          Single Product
        </h2>
      </div>

      <div className="p-4">
        {/* Search Input */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full sm:w-1/2 border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* //////////////////// */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 m-3">
          {loading ? (
            <p className="col-span-full text-center">Loading products...</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-md p-2 bg-gray-200 shadow h-auto"
              >
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]?.src || "/ImageNotFound.png"}
                    alt={product.name}
                    className="w-full h-100 object-cover mb-2 rounded"
                  />
                </Link>
                <Link to={`/product/${product.id}`}>
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                </Link>
                <p className="text-gray-700 pt-2.5">
                  Rs. {product.sale_price || product.price}
                </p>

                <button className="mt-2 mb-2 w-1/2 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition">
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

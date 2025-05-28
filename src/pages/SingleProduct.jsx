import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleProduct } from "./api/FetchData";

// Utility to strip HTML tags
const stripHtml = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const SingleProduct = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg mt-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center text-red-600 mt-10">Product not found.</p>;
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="bg-gray-100 py-10 text-center rounded mb-8">
        <h3 className="text-sm text-orange-500 uppercase tracking-widest font-bold">
          See more Details
        </h3>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-2">
          Single Product
        </h2>
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.images?.[0]?.src || "/ImageNotFound.png"}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <p className="text-md text-gray-800 font-semibold mb-5">
            SHORT DESCRIPTION:
          </p>
          <p>{product.short_description.replace(/<[^>]*>?/gm, "")}</p>

          <p className="text-justify mb-5">{stripHtml(product.description)}</p>

          <p className="text-md text-gray-800 font-semibold mb-5">
            CATEGORY: {product.categories[0]?.name}
          </p>
          <h3 className="cat"></h3>

          <p className="text-xl text-gray-700 font-semibold mb-5">
            Rs. {product.sale_price || product.price}
          </p>

          <Link to="/checkout">
            <button className="mt-6 bg-gradient-to-r from-gray-800 to-indigo-600 text-white px-6 py-2 rounded hover:from-purple-700 hover:to-indigo-700 transition">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>

      <Link to="/products">
        <button className="mt-6 bg-gradient-to-r from-gray-800 to-indigo-600 text-white px-6 py-2 rounded hover:from-purple-700 hover:to-indigo-700 transition">
          ← Back to Products
        </button>
      </Link>
    </div>
  );
};

export default SingleProduct;

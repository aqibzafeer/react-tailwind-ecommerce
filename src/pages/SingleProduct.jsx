import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchSingleProduct } from "../pages/api/FetchData";
import { useCart } from "../hooks/useCart";

const stripHtml = (html) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
        setSelectedImage(data.images?.[0]?.src || "/ImageNotFound.png");
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
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-10 text-center rounded mb-8">
        <h3 className="text-sm  text-[#f28123] uppercase tracking-widest font-bold">
          See more Details
        </h3>
        <h2 className="text-4xl font-extrabold  text-[#f28123] mt-2">
          Single Product
        </h2>
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded shadow-md cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-md text-gray-800 font-semibold mt-10 mb-2">
            SHORT DESCRIPTION:
          </p>
          <p>{stripHtml(product.short_description)}</p>
          <p className="text-md text-gray-800 font-semibold mt-10 mb-2">
            DESCRIPTION:
          </p>
          <p className="text-justify mb-5">{stripHtml(product.description)}</p>
          <p className="text-md text-gray-800 font-semibold mt-10 mb-2">
            AVAILABLE :
          </p>
          <p className="text-justify mb-5">{stripHtml(product.stock_status)}</p>

          <p className="text-md text-gray-800 font-semibold mb-5">
            CATEGORY: {product.categories?.[0]?.name}
          </p>
          <h3 className="cat">{product.stock_quantity}</h3>
          <p className="text-xl text-gray-700 font-semibold mb-5">
            Rs. {product.sale_price || product.price}
          </p>
          <button
            className="mt-6 bg-gradient-to-r from-gray-800 to-indigo-600 text-white px-6 py-2 rounded hover:from-purple-700 hover:to-indigo-700 transition"
            onClick={() => {
              addToCart(product, 1); // You can allow user to select quantity later
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="mt-5 grid grid-cols-6 gap-2">
        {product.images?.map((img, index) => (
          <img
            key={index}
            src={img.src || "/ImageNotFound.png"}
            alt={`${product.name}-${index}`}
            className={`w-full h-24 object-cover rounded shadow-md cursor-pointer ${
              selectedImage === img.src ? "ring-4 ring-indigo-900" : ""
            }`}
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>

      {/* Back Button */}
      <Link to="/products">
        <button className="mt-6 bg-gradient-to-r from-gray-800 to-indigo-600 text-white px-6 py-2 rounded hover:from-purple-700 hover:to-indigo-700 transition">
          ← Back to Products
        </button>
      </Link>

      {/* Image Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img
            src={selectedImage}
            alt="Enlarged Product"
            className="max-w-3xl max-h-[80vh] rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default SingleProduct;

import { useState } from "react";
import { createProduct } from "../pages/api/FetchData";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      regular_price: price,
      description,
      images: [{ src: image }],
    };

    try {
      await createProduct(newProduct);
      alert("Product created successfully!");
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (err) {
      console.error("Error adding product", err);
      alert("Failed to create product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full rounded-2xl mx-auto p-4 bg-amber-50"
    >
      <h2 className="text-2xl font-bold mb-4">New Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="input mb-5 w-full p-3  bg-blue-100 rounded-2xl "
        required
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="input mb-5 w-full p-3 bg-blue-100 rounded-2xl"
        required
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="input mb-5 w-full p-3  bg-blue-100 rounded-2xl"
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="input mb-5 w-full p-5  bg-blue-100 rounded-2xl"
        required
      />
      <button
        type="submit"
        className="px-5 mt-auto w-full bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;

import axios from "axios";

const API_URL = import.meta.env.VITE_WC_API_URL;
const CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;

const api = axios.create({
  baseURL: API_URL,
  params: {
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
  },
});

export const fetchProducts = async () => {
  try {
    const { data } = await api.get("/");
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    throw error;
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const { data } = await api.get(`/${id}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error.message);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const { data } = await api.post("/", productData);
    return data;
  } catch (error) {
    console.error("Failed to create product:", error.message);
    throw error;
  }
};

export const updateProduct = async (id, updateData) => {
  try {
    const { data } = await api.put(`/${id}`, updateData);
    return data;
  } catch (error) {
    console.error(`Failed to update product ${id}:`, error.message);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const { data } = await api.delete(`/${id}`, {
      params: { force: true },
    });
    return data;
  } catch (error) {
    console.error(`Failed to delete product ${id}:`, error.message);
    throw error;
  }
};

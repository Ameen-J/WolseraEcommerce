import axiosInstance from "./api";

const API_BASE = "http://localhost:8080/api/products";

// Get paginated products
export const fetchProducts = async (page = 0, size = 10) => {
  const response = await axiosInstance.get(`${API_BASE}?page=${page}&size=${size}`);
  return response.data;
};

// Get single product
export const fetchProductById = async (id) => {
  const response = await axiosInstance.get(`${API_BASE}/${id}`);
  return response.data;
};

// Search / filter
export const searchProducts = async (params) => {
  const response = await axiosInstance.get(`${API_BASE}/search`, { params });
  return response.data;
};

// Category tree
export const fetchCategoryTree = async () => {
  const response = await axiosInstance.get(`${API_BASE}/categories/tree`);
  return response.data;
};
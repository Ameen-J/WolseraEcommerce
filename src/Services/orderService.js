import axiosInstance from "./api"; "./api";

// ============================
// GET My Orders
// ============================
export const getMyOrders = async () => {
  const response = await axiosInstance.get("/orders/my-orders");
  console.log(response.data);
  
  return response.data;
};

// ============================
// GET Single Order
// ============================
export const getOrderById = async (orderId) => {
  const response = await axiosInstance.get(`/orders/${orderId}`);
  return response.data;
};

// ============================
// GET All Orders (Admin)
// ============================
export const getAllOrders = async () => {
  const response = await axiosInstance.get("/orders");
  return response.data;
};
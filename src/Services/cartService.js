import axiosInstance from "./api";

// GET Cart
export const fetchCart = () => axiosInstance.get("/cart");

// ADD Item
export const addItemToCart = (payload) =>
  axiosInstance.post("/cart/add", payload);

// UPDATE Quantity
export const updateCartItem = (cartItemId, quantity) =>
  axiosInstance.put("/cart/update", null, {
    params: { cartItemId, quantity },
  });

// REMOVE Item
export const removeCartItem = (cartItemId) =>
  axiosInstance.delete(`/cart/remove/${cartItemId}`);

// CLEAR Cart
export const clearCartItems = () =>
  axiosInstance.delete("/cart/clear");

// CHECKOUT
export const checkoutCart = (orderData) =>
  {
    return axiosInstance.post("/cart/checkout", orderData);
  }

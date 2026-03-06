import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOrderById } from "../Services/orderService";

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const data = await getOrderById(id);
        setOrder(data);
      } catch (err) {
        console.error("Failed to fetch order", err);
      } finally {
        setLoading(false);
      }
    };

    loadOrder();
  }, [id]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-100 text-green-700";
      case "PROCESSING":
        return "bg-yellow-100 text-yellow-700";
      case "SHIPPED":
        return "bg-blue-100 text-blue-700";
      case "CANCELLED":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading order...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Order not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/orders/my-orders")}
          className="text-gray-500 hover:-translate-x-1 transition mb-8"
        >
          ← Back to Orders
        </button>

        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-10">

          <h1 className="text-3xl md:text-4xl mb-4">
            Order #{order.id.toString().padStart(6, "0")}
          </h1>

          <div className="flex items-center gap-6">

            <p className="text-gray-500">
              Placed on{" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                order.status
              )}`}
            >
              {order.status}
            </span>

          </div>

        </div>

        {/* Items */}
        <div className="border-b border-gray-200 pb-10 mb-10">

          <h2 className="text-2xl mb-6">
            Items
          </h2>

          <div className="divide-y divide-gray-200">

            {order.items.map((item) => (
              <div
                key={item.id}
                className="py-6 flex justify-between items-start"
              >

                {/* LEFT */}
                <div className="flex gap-6">

                  <img
                    src={item.imageUrl}
                    alt={item.productName}
                    className="w-32 h-32 object-cover rounded-lg"
                  />

                  <div>

                    <h3 className="text-lg">
                      {item.productName}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Size {item.size} • Color {item.color}
                    </p>

                    <p className="text-gray-500 mt-1">
                      Qty {item.quantity}
                    </p>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="text-lg font-medium">
                  ₹{item.total}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Shipping Address */}
        <div className="border-b border-gray-200 pb-10 mb-10">

          <h2 className="text-2xl mb-4">
            Shipping Address
          </h2>

          <p className="text-gray-600 whitespace-pre-line">
            {order.shippingAddress}
          </p>

        </div>

        {/* Order Summary */}
        <div className="max-w-sm ml-auto">

          <h2 className="text-2xl mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Subtotal</span>
            <span>₹{order.totalAmount}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Shipping</span>
            <span>₹0</span>
          </div>

          <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-semibold">
            <span>Total</span>
            <span>₹{order.totalAmount}</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default OrderDetails;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyOrders } from "../Services/orderService";
import { Package } from "lucide-react";

function MyOrders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-zinc-950">
        <p className="text-gray-400">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Package className="text-[#9257c3] drop-shadow-[0_0_8px_#9257c3]" size={32} />
          <h1 className="text-4xl font-bold tracking-wide">
            My Orders
          </h1>
        </div>

        <p className="text-gray-400 mb-10 text-sm md:text-base">
          Your Wolsera journey — every order, every detail, all in one place.
        </p>

        {orders.length === 0 ? (
          <div className="text-center py-24">

            <p className="text-gray-400 mb-8 text-lg">
              You haven't placed any orders yet.
            </p>

            <button
              onClick={() => navigate("/home")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Start Shopping
            </button>

          </div>
        ) : (

          <div className="space-y-10">

            {orders.map((order) => (

              <div
                key={order.id}
                className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition"
              >

                {/* Order Header */}
                <div className="flex justify-between items-center mb-6">

                  <div className="flex items-center gap-6 text-sm text-gray-400">

                    <span className="font-semibold text-white text-base">
                      Order #{order.id}
                    </span>

                    <span>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>

                  </div>

                  <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                    {order.status}
                  </span>

                </div>

                {/* Order Items (Improved UI) */}
                <div
                  onClick={() => navigate(`/orders/${order.id}`)}
                  className="bg-zinc-900 p-4 rounded-xl space-y-4 cursor-pointer hover:bg-zinc-800 transition"
                >

                  {order.items.slice(0, 3).map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center gap-4 bg-zinc-950/60 p-3 rounded-xl hover:scale-[1.02] transition-transform"
                    >

                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        className="w-20 h-20 rounded-xl object-cover border border-gray-700 shadow-md"
                      />

                      <div className="flex flex-col flex-1">

                        <p className="font-semibold text-white text-sm">
                          {item.productName}
                        </p>

                        <div className="flex items-center gap-3 mt-1">

                          <span className="text-xs text-gray-400">
                            Size {item.size}
                          </span>

                          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-md">
                            Qty {item.quantity}
                          </span>

                        </div>

                      </div>

                    </div>

                  ))}

                  {/* Extra items */}
                  {order.items.length > 3 && (
                    <p className="text-xs text-gray-400">
                      +{order.items.length - 3} more items
                    </p>
                  )}

                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6">

                  <p className="font-semibold text-lg">
                    Total ₹{order.totalAmount}
                  </p>

                  <button
                    onClick={() => navigate(`/orders/${order.id}`)}
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                  >
                    View Details →
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default MyOrders;
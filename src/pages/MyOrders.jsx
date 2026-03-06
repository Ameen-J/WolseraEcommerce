import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyOrders } from "../Services/orderService";

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
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl mb-10">
          My Orders
        </h1>

        {orders.length === 0 ? (
            <div className="text-center py-20">

                <p className="text-gray-500 mb-6">
                    You haven't placed any orders yet.
                </p>

                <button
                    onClick={() => navigate("/home")}
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-zinc-800"
                >
                    Start Shopping
                </button>

            </div>
        ) : (

          <div className="divide-y divide-gray-200 ">

            {orders.map((order) => (

              <div key={order.id} className="py-8">

                {/* Order Header */}
                <div className="flex justify-between items-center mb-6">

                    <div className="flex items-center gap-6 text-sm text-gray-500">

                        <span className="font-semibold text-black">
                        Order #{order.id}
                        </span>

                        <span>
                        {new Date(order.createdAt).toLocaleDateString()}
                        </span>

                    </div>

                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        {order.status}
                    </span>

                </div>
                {/* Order Items Preview */}
                <div 
                  onClick = {() => navigate(`/orders/${order.id}`)}
                  className ="flex items-center gap-4 bg-zinc-50 p-3 rounded-lg hover:bg-zinc-100 transition duration-200 px-2 rounded-lg "
                >

                  {order.items.slice(0, 3).map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center gap-4"
                    >

                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        className= "w-32 h-32 rounded-md object-cover"
                      />

                    <div className="flex flex-col">

                        <p className="font-medium text-gray-900">
                            {item.productName}
                        </p>

                        <p className="text-sm text-gray-500">
                            Size {item.size} • Qty {item.quantity}
                        </p>

                    </div>

                    </div>

                  ))}

                  {/* Extra items indicator */}
                  {order.items.length > 3 && (
                    <p className="text-sm text-gray-500">
                      +{order.items.length - 3} more items
                    </p>
                  )}

                </div>

                {/* Order Footer */}
                <div className="flex justify-between items-center mt-6">

                  <p className="font-semibold text-lg">
                    Total ₹{order.totalAmount}
                  </p>

                  <button
                    onClick={() => navigate(`/orders/${order.id}`)}
                    className="text-sm font-medium text-black hover:translate-x-1 transition flex items-center gap-1"
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
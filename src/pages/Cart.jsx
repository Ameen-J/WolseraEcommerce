import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Cart() {
  const {
    cartItems,
    cartTotal,
    removeItem,
    updateQuantity,
    clearCart,
    checkout
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="pb-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl">
                Shopping Bag
             </h1>

            <p className="text-gray-500 mt-2">
                {cartItems.length} items added to your bag
             </p>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 mt-10">
            Your Bag is empty.
          </p>
        ) : (
          <>
            {/* Items */}
            <div className="divide-y divide-gray-200">

              {cartItems.map((item) => (
                <div
                  key={item.cartItemId}
                  className="py-10 flex justify-between items-start"
                >

                  {/* LEFT */}
                  <div className="flex gap-8">
                    <img
                      src={item.imageUrls?.[0]}
                      alt={item.productName}
                      className="w-36 h-44 object-cover rounded-xl"
                    />

                    <div>
                      <h2 className="text-2xl mb-3">
                        {item.productName}
                      </h2>

                      <p className="text-gray-500 mb-2">
                        Size: {item.size} | Color: {item.color}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-4 mt-6">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.cartItemId,
                              item.quantity > 1
                                ? item.quantity - 1
                                : 1
                            )
                          }
                          className="px-4 py-2 border border-black"
                        >
                          -
                        </button>

                        <span className="text-lg">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.cartItemId,
                              item.quantity + 1
                            )
                          }
                          className="px-4 py-2 border border-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-end gap-6">
                    <span className="text-xl font-semibold">
                      ₹{item.total}
                    </span>

                    <button
                      onClick={() =>
                        removeItem(item.cartItemId)
                      }
                      className="text-gray-500 hover:text-red-600 transition"
                    >
                      <Trash2 size={22} />
                    </button>
                  </div>

                </div>
              ))}

            </div>

            {/* Action Row */}
            <div className="mt-12 flex justify-between items-start">

                {/* LEFT ACTIONS */}
                <div className="flex flex-col gap-4">

                <button
                onClick={clearCart}
                className="bg-red-600 text-white px-8 py-3 rounded-lg
                            hover:bg-red-700 transition duration-300"
                >
                Clear Cart
                </button>

                <button
                onClick={() => navigate("/home")}
                className="border border-black px-8 py-3 rounded-lg
                            hover:bg-zinc-100 transition duration-300"
                >
                Continue Shopping
                </button>

                </div>

                {/* RIGHT ACTIONS */}
                <div className="flex flex-col items-end gap-6">

                <div className="text-2xl font-semibold">
                Subtotal ₹{cartTotal}
                </div>

                <button
                onClick={() => navigate("/checkout")}
                className="bg-black text-white px-10 py-3 rounded-lg
                            hover:bg-zinc-800 transition duration-300"
                >
                Proceed to Checkout
                </button>

                </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
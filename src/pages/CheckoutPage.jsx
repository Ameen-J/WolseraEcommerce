import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [shippingAddress, setShippingAddress] = useState("");
  const { checkout } = useCart();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!shippingAddress.trim()) {
      alert("Shipping address is required");
      return;
    }

    try {
      await checkout({
        shippingAddress
      });

      navigate("/orders/my-orders"); // or /order-success
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl mb-10">
          Shipping Address
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <textarea
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            placeholder="Enter your full shipping address"
            className="border border-gray-300 rounded-lg p-4 min-h-[120px]
                       focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-lg
                       hover:bg-zinc-800 transition duration-300"
          >
            Place Order
          </button>

        </form>

      </div>
    </div>
  );
}

export default Checkout;
import React, { useState } from "react";
import { User, ShoppingCart, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [open, setOpen] = useState(false);

  const cartCount = cartItems.length;

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setOpen(false);
    navigate("/home");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <img
          src={logo}
          alt="Wolsera Logo"
          className="h-16 md:h-20 object-contain cursor-pointer"
          onClick={() => navigate("/home")}
        />

        {/* Right Menu */}
        <div className="flex items-center gap-8 text-white text-sm font-medium">

          <button className="hover:text-gray-300 transition">
            Category
          </button>

          <button
            className="flex items-center gap-2 hover:text-gray-300 transition"
            onClick={() => navigate("/orders/my-orders")}
          >
            <Package size={18} />
            My Orders
          </button>

          {/* USER MENU */}
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="hover:text-gray-300 transition"
            >
              <User size={20} />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-36 bg-zinc-900 border border-gray-700 rounded-lg shadow-lg">

                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/signin");
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  >
                    Signin
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  >
                    Logout
                  </button>
                )}

              </div>
            )}

          </div>

          {/* CART */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-1.5 rounded-full font-semibold">
                {cartCount}
              </span>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
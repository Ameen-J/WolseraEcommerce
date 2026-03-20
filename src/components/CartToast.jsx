import { CheckCircle } from "lucide-react";

function CartToast({ show, message }) {
  return (
    <div
      className={`fixed top-6 right-6 z-50 transition-all duration-500
      ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
    >
      <div className="flex items-center gap-3 bg-zinc-900 border border-gray-700 
      px-5 py-3 rounded-xl shadow-lg">

        <CheckCircle className="text-green-400" size={20} />

        <p className="text-white text-sm font-medium">
          {message}
        </p>

      </div>
    </div>
  );
}

export default CartToast;
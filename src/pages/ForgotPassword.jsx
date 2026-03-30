import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartToast from "../components/CartToast";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:8080/auth/forgot-password",
      { email }
    );

    const token = res.data.split(": ")[1];

    navigate("/reset-password", {
      state: {
        token,
        message: "Reset token generated"
      }
    });

  } catch (err) {
    setToastMsg("Failed to send reset token");
    setShowToast(true);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] p-8 rounded-xl w-96"
      >
        <h2 className="text-2xl mb-6 font-semibold">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700">
          Send Reset Token
        </button>
      </form>
      <CartToast show={showToast} message={toastMsg} />
    </div>
  );
}

export default ForgotPassword;
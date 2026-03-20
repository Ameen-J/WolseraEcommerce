import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CartToast from "../components/CartToast";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const token = location.state?.token;

  useEffect(() => {
    if (location.state?.message) {
      setToastMsg(location.state.message);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Check password match
    if (password !== confirmPassword) {
      setToastMsg("Passwords do not match");
      setShowToast(true);

      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/auth/reset-password",
        {
          token: token,
          newPassword: password
        }
      );

      setToastMsg("Password reset successful");
      setShowToast(true);

      setTimeout(() => {
        navigate("/signin");
      }, 2000);

    } catch (err) {
      setToastMsg(err.response?.data || "Something went wrong");
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] p-8 rounded-xl w-96"
      >
        <h2 className="text-2xl mb-6 font-semibold">
          Reset Password
        </h2>

        {/* New Password */}
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-3 mb-4 bg-zinc-800 rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button className="w-full bg-green-600 py-3 rounded hover:bg-green-700">
          Reset Password
        </button>
      </form>

      <CartToast show={showToast} message={toastMsg} />

    </div>
  );
}

export default ResetPassword;
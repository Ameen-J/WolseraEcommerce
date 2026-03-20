import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, Phone } from "lucide-react";
import { signupUser } from "../Services/authService";
import signupImage from "../assets/signupImg5.png";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    try {
      const response = await signupUser(formData);

      setMessage(response.data);

      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
      });

      setTimeout(() => {
        navigate("/signin");
      }, 1500);

    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors(error.response.data);
      } else {
        setMessage("Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#020617]">

      {/* LEFT SIDE FORM */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center px-10 pt-12 pb-7"
      >

        <div className="w-full max-w-sm text-white">

          <h2 className="text-2xl font-bold mb-2">Get Started</h2>

          <p className="text-gray-400 mb-8 text-sm">
            Create your account to unlock premium features and faster checkout.
          </p>

          {message && (
            <p className="text-green-400 text-center mb-4">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-300">Full Name</label>

              <div className="relative mt-2">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 py-2.5 rounded-xl bg-[#0f172a] border border-[#1e293b]
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-300">Email Address</label>

              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 py-2.5 rounded-xl bg-[#0f172a] border border-[#1e293b]
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-300">Password</label>

              <div className="relative mt-2">

                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 py-2.5 rounded-xl bg-[#0f172a] border border-[#1e293b]
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>

              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="text-sm text-gray-300">Phone Number</label>

              <div className="relative mt-2">

                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 py-2.5 rounded-xl bg-[#0f172a] border border-[#1e293b]
                  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

              </div>

              {errors.phone && (
                <p className="text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-semibold text-white
                bg-gradient-to-r from-blue-500 to-purple-600
                hover:opacity-90
                active:scale-95
                transition duration-200"
            >
              Create Account
            </button>

          </form>

          <p className="text-sm text-center mt-6 text-gray-400">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </p>

        </div>

      </motion.div>


        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:block relative">

          <img
            src={signupImage}
            alt="Signup"
            className="absolute w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          {/* Animated Content Only */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative z-10 flex flex-col justify-end h-full p-16 text-white"
          >

            <h2 className="text-4xl font-bold mb-4">
              Create Your Wolsera Account.
            </h2>

            <p className="text-gray-300 max-w-md">
              Join thousands of others to discover premium products that elevate your everyday experience.
            </p>

          </motion.div>

        </div>

    </div>
  );
}

export default Signup;
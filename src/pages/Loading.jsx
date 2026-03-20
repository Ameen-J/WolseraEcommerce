import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import wolf from "../assets/LoadingWolf.png";

function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  // receive message + redirect path
  const { message, redirect } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirect || "/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, redirect]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="flex flex-col items-center text-center">

        {/* Wolf Logo */}
        <img
          src={wolf}
          alt="Wolsera"
          className="w-[220px] mb-10 animate-glow"
        />

        {/* Dynamic Text */}
        <p className="text-white text-base tracking-wide mb-8">
          {message || "Loading..."}
        </p>

        {/* Loading Line */}
        <div className="w-[250px] h-[2px] bg-gray-700 overflow-hidden rounded">
          <div className="h-full bg-white animate-loadingBar"></div>
        </div>

      </div>

    </div>
  );
}

export default Loading;
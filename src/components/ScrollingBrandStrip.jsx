import React from "react";
import "./marquee.css";

function ScrollingBrandStrip() {

  const text =
    "PREMIUM FABRICS • WOLSERA COLLECTION • FREE SHIPPING • MODERN STYLE • WOLSERA • ";

  return (
    <div className="relative w-full overflow-hidden border-y border-gray-800 bg-[#9257c3]">

      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#9257c3] to-transparent z-10"></div>

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#9257c3] to-transparent z-10"></div>

      {/* MOVING TEXT */}
      <div className="marquee-container">

        <div className="marquee-text">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>

      </div>

    </div>
  );
}

export default ScrollingBrandStrip;
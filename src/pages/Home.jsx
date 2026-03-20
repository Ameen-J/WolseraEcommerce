import React from "react";
import Navbar from "../components/Navbar";
import heroImage from "../assets/HeroImage.png";
import ProductSection from "../components/ProductSection";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollingBrandStrip from "../components/ScrollingBrandStrip";
import Footer from "../components/Footer";
import HomeSlider from "../components/HomeSlider";
import { searchProducts } from "../Services/productService";

function Home() {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search) => {
    try {
      setSearchTerm(search);
    }
    catch (err) {
      console.error("Search failed", err);
    }
  };

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-10 md:px-20 pt-24">

          <div className="max-w-xl text-white animate-fadeInLeft">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>

              <span className="text-sm font-medium text-white">
                New Collection 2026 is Live
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Elevate Your <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Everyday Style.
              </span>
            </h1>

            <p className="text-gray-300 mb-8 text-base md:text-lg">
              Discover meticulously curated apparel designed for modern living.
              Form meets function in our premium selection of tailored shirts,
              t-shirts, and pants.
            </p>

            {/* SEARCH BAR */}
            <div className="w-full max-w-lg relative">
              <input
                type="text"
                placeholder="Search for clothing, styles, collections..."
                className="w-full py-4 px-6 rounded-full bg-white text-black 
                           focus:outline-none text-lg shadow-xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 
                           bg-black text-white px-6 py-2 rounded-full 
                           hover:bg-zinc-800 transition duration-300 cursor-pointer"
                onClick={() => handleSearch(search)}
              >
                Search
              </button>
            </div>

          </div>

        </div>

      </div>
      {/* Moving Style Sentence */}
      <ScrollingBrandStrip />
      {/* Slider Here */}
      <HomeSlider />
      {/* PRODUCT SECTION */}
      <ProductSection searchTerm={searchTerm} />

      <Footer />
    </div>
  );
}

export default Home;
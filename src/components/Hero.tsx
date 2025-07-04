"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
// Removed Image import as it's not used with direct <img> tag and local paths don't work here.

export default function App() { // Renamed to App for direct rendering in Canvas environment
  return (
   
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden text-white font-inter"
      style={{ fontFamily: "Inter, sans-serif" }}
    > <Header/>
      {/* 🌄 Background Image (placed at z-index 0) */}
      <img
        src="\sunrise.jpg" // Using a generic placeholder
        alt="Sunrise background"
        className="w-full h-full mt-4 object-cover absolute inset-0 opacity-60 z-0" // Explicit z-index: 0
        onError={(e) => { // Removed TypeScript type annotation for broader compatibility
          const target = e.currentTarget;
          target.onerror = null;
          target.src = "https://placehold.co/1920x1080/0f172a/ffffff?text=Image+Load+Error";
        }}
      />

      {/* 🌈 Animated Gradient Overlay (placed at z-index 1, above image) */}
      <motion.div
        className="absolute inset-0 z-10" // Changed z-index to 10 to be above the image (z-0)
        initial={{ backgroundPosition: "0% 50%" }}
       
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "400% 400%", // Ensures the gradient has enough space to move
          backgroundImage: `
            linear-gradient(
              135deg,
              rgba(2, 6, 23, 0.95),    /* Very Dark Blue, almost black */
              rgba(15, 23, 42, 0.85),   /* Deep Navy, slightly lighter */
              rgba(30, 41, 59, 0.75)    /* Even lighter blue-gray */
            )
          `,
        }}
      />


      {/* ✨ Text Content (placed at z-index 20, above gradient) */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6 py-12 md:py-0">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Heal Your Mind, Embrace Your Light
        </motion.h1>

        <motion.h2
          className="text-lg md:text-2xl font-medium text-gray-300 mb-8 max-w-3xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Begin your journey to clarity, confidence, and inner peace with professional support.
        </motion.h2>

        <motion.a
          href="#contact"
          className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-full transition-all duration-300 shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
          whileHover={{ y: -3 }}
        >
          Book a Free Consult
        </motion.a>

        {/* 🌅 Floating Quote */}
        <motion.div
          className="mt-8 text-sm md:text-base text-gray-300 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          “Every sunrise is an invitation to brighten someone’s day — including yours.”
        </motion.div>
      </div>
    </section>
  );
}

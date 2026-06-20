import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroSlides = [
  {
    src: "/video/realesatesection.mp4",
    isVideo: true,
    headline: "BUILDING DREAM",
    highlight: "Spaces",
    sub: "Step into your own slice of paradise. We are committed to transforming your dream plot into a home that blends functionality, beauty, and harmony with your way of life.",
  },
];

const Herosection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/realesatesection.mp4"
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-300 mb-4 font-medium"
        >
          Trusted Real Estate Partner in Mysore
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif tracking-wide"
        >
          BUILDING <br /> DREAM{" "}
          <span className="text-amber-400 italic font-signature text-6xl md:text-8xl">
            Spaces
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-sm md:text-base text-gray-200 max-w-2xl leading-relaxed"
        >
          Step into your own slice of paradise. We are committed to transforming
          your dream plot into a home that blends functionality, beauty, and
          harmony with your way of life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/project"
            className="px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300"
            style={{ backgroundColor: "#1A3A5C", color: "white" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#142d47")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1A3A5C")}
          >
            Explore Projects
          </a>
          <a
            href="/contact"
            className="px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-full border border-white/60 text-white hover:bg-white/10 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Herosection;

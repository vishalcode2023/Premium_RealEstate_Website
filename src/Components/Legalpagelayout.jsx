import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const BLUE = "#1A3A5C";
const LIGHT_BG = "#F4F7FB";
const GREY = "#6B7280";
const DARK = "#1F2937";

/**
 * Shared layout for Privacy Policy / Terms of Service / Cookie Policy pages.
 * Keeps these legal pages visually consistent with the rest of the site
 * (Navbar + BLUE hero banner + Footer), instead of each page styling itself.
 */
const LegalPageLayout = ({ title, subtitle, lastUpdated, children }) => {
  return (
    <div style={{ backgroundColor: LIGHT_BG }} className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="pt-28 pb-14 text-center px-4" style={{ backgroundColor: BLUE }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-3"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <p className="text-base text-blue-100 max-w-xl mx-auto">{subtitle}</p>
        )}
        {lastUpdated && (
          <p className="text-xs text-blue-200 mt-4 uppercase tracking-wide">
            Last Updated: {lastUpdated}
          </p>
        )}
      </div>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 md:p-12 space-y-8"
          style={{ color: GREY }}
        >
          {children}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export const LegalSection = ({ title, children }) => (
  <div>
    <h2 className="text-xl md:text-2xl font-serif font-bold mb-3" style={{ color: DARK }}>
      {title}
    </h2>
    <div className="space-y-3 text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

export { BLUE, LIGHT_BG, GREY, DARK };
export default LegalPageLayout;
import React from "react";
import { motion } from "framer-motion";
import {
  LandPlot, DraftingCompass, DollarSign, Handshake,
  Briefcase, ShieldCheck, ChevronRight, Phone, MessageCircle
} from "lucide-react";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const BLUE = "#1A3A5C";
const LIGHT_BG = "#F4F7FB";
const WHITE = "#FFFFFF";
const GREY = "#6B7280";
const DARK = "#1F2937";

const SERVICES_DATA = [
  {
    icon: LandPlot,
    title: "Premium Land Acquisition",
    description: "Strategic identification and acquisition of high-potential, clear-title land parcels for future development projects across Mysore.",
    points: ["MUDA & RERA verified plots", "Clear legal title guarantee", "Best locations in Mysore"],
  },
  {
    icon: DraftingCompass,
    title: "Layout Planning & Design",
    description: "Innovative and sustainable project design, from master planning to detailed architectural blueprints for modern residential living.",
    points: ["Wide asphalted roads", "Planned green spaces", "Underground utility lines"],
  },
  {
    icon: DollarSign,
    title: "Financial & Loan Advisory",
    description: "Expert guidance on property investment, legal clearance, and tailored home loan assistance from leading banks at 80–85% funding.",
    points: ["80–85% home loan assistance", "Multiple bank tie-ups", "EMI & investment planning"],
  },
  {
    icon: Handshake,
    title: "Post-Sales Support",
    description: "Dedicated support for property registration, document handover, and facility management services even after purchase.",
    points: ["Registration assistance", "Document support", "Dedicated relationship manager"],
  },
  {
    icon: Briefcase,
    title: "Investment Consulting",
    description: "Data-driven real estate investment consulting helping you pick the right plot for maximum appreciation and long-term ROI.",
    points: ["Location ROI analysis", "Market trend insights", "Portfolio planning"],
  },
  {
    icon: ShieldCheck,
    title: "Legal & Compliance",
    description: "Complete RERA compliance and transparent documentation handling — from EC checks to sale deed registration.",
    points: ["RERA compliance", "EC & title verification", "Transparent process"],
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "Share your requirements and budget with our expert team." },
  { step: "02", title: "Site Visit", desc: "We arrange a guided visit to our projects at your convenience." },
  { step: "03", title: "Documentation", desc: "Clear title verification, RERA checks, and agreement preparation." },
  { step: "04", title: "Registration", desc: "Smooth registration process with full post-purchase support." },
];

const OurServices = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: LIGHT_BG }}>
      <Navbar />

      {/* Hero Banner */}
      <div className="pt-28 pb-14 text-center" style={{ backgroundColor: BLUE }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-3"
        >
          Our Services
        </motion.h1>
        <p className="text-base text-blue-100 max-w-xl mx-auto px-4">
          A commitment to excellence across the entire real estate lifecycle — from plot acquisition to post-sale support.
        </p>
      </div>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: DARK }}>What We Offer</h2>
          <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: BLUE }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col"
              style={{ borderTop: `3px solid ${BLUE}` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0" style={{ backgroundColor: LIGHT_BG }}>
                  <service.icon size={22} style={{ color: BLUE }} />
                </div>
                <h3 className="text-base font-bold leading-tight" style={{ color: DARK }}>{service.title}</h3>
              </div>

              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: GREY }}>{service.description}</p>

              <ul className="space-y-1.5 mb-5">
                {service.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs" style={{ color: GREY }}>
                    <ChevronRight size={13} style={{ color: BLUE }} /> {pt}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="text-xs font-semibold flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: BLUE }}
              >
                Enquire Now <ChevronRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section style={{ backgroundColor: WHITE }} className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: DARK }}>How It Works</h2>
            <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: BLUE }}></div>
            <p className="mt-3 text-sm" style={{ color: GREY }}>A simple, transparent process from inquiry to ownership.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-5"
              >
                <div
                  className="w-14 h-14 mx-auto flex items-center justify-center rounded-full text-white text-xl font-bold font-serif mb-4"
                  style={{ backgroundColor: BLUE }}
                >
                  {step}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: DARK }}>{title}</h3>
                <p className="text-sm" style={{ color: GREY }}>{desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ backgroundColor: BLUE }}>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">Ready to Get Started?</h2>
        <p className="text-blue-100 text-sm mb-7 max-w-md mx-auto">
          Whether you're investing, buying your first plot, or need expert advice — we're here.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="px-7 py-3 bg-white rounded-full text-sm font-bold transition-opacity hover:opacity-90"
            style={{ color: BLUE }}
          >
            Contact Our Experts
          </a>
          <a
            href="/project"
            className="px-7 py-3 border border-white/50 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;

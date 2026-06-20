import React from "react";
import { motion } from "framer-motion";
import { Building2, Leaf, Handshake, Scale, Users, Award, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const BLUE = "#1A3A5C";
const LIGHT_BG = "#F4F7FB";
const WHITE = "#FFFFFF";
const GREY = "#6B7280";
const DARK = "#1F2937";

const coreValues = [
  {
    icon: Leaf,
    title: "Sustainable Communities",
    description: "We design eco-conscious layouts that blend green spaces, wide roads, and natural landscapes to promote balanced living.",
  },
  {
    icon: Building2,
    title: "Innovative Designs",
    description: "Our developments reflect contemporary design thinking while staying rooted in Mysuru's rich architectural heritage.",
  },
  {
    icon: Handshake,
    title: "Customer Commitment",
    description: "Every client becomes part of the TrueValue family — we ensure transparency, trust, and genuine support at every step.",
  },
  {
    icon: Scale,
    title: "Ethical Practices",
    description: "Integrity is our foundation. We uphold fairness, clear legal processes, and honest communication in all we do.",
  },
];

const stats = [
  { icon: Award, value: "30+", label: "Years of Experience" },
  { icon: Users, value: "2000+", label: "Happy Families" },
  { icon: Building2, value: "10+", label: "Projects Completed" },
  { icon: TrendingUp, value: "5 Cities", label: "Locations in Mysore" },
];

const milestones = [
  { year: "1993", title: "Founded", desc: "TrueValue Developers & Promoters established by Mrs. Anitha R. R. in Mysuru." },
  { year: "2000", title: "First Major Layout", desc: "Successfully delivered My Nagar on Bannur Road — our flagship project." },
  { year: "2010", title: "Expanding Horizons", desc: "Launched JJ Enclave on Bogadi Road serving a growing residential demand." },
  { year: "2018", title: "RERA Compliance", desc: "All projects brought under RERA framework ensuring full transparency." },
  { year: "2024", title: "Growing Strong", desc: "5 active developments across Mysore with 2000+ satisfied families." },
];

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: LIGHT_BG }} className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <div className="pt-28 pb-14 text-center" style={{ backgroundColor: BLUE }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-3"
        >
          About TrueValue
        </motion.h1>
        <p className="text-base text-blue-100 max-w-xl mx-auto px-4">
          Building trust and transforming Mysuru's landscape since 1993 — led by the vision of Mrs. Anitha R. R.
        </p>
      </div>

      {/* Stats Row */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm p-5 text-center border border-gray-100"
          >
            <div className="flex justify-center mb-2">
              <Icon size={22} style={{ color: BLUE }} />
            </div>
            <p className="text-2xl font-bold font-serif" style={{ color: BLUE }}>{value}</p>
            <p className="text-xs mt-0.5" style={{ color: GREY }}>{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image placeholder with brand styling */}
          <motion.div
            className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/Img/Founder.jpg"
              alt="TrueValue Founder Mrs. Anitha R. R."
              className="w-full h-full object-cover object-center"
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="w-full h-full items-center justify-center flex-col text-white"
              style={{ backgroundColor: BLUE, display: 'none' }}
            >
              <Building2 size={60} className="mb-4 opacity-60" />
              <p className="text-lg font-serif opacity-80">Mrs. Anitha R. R.</p>
              <p className="text-sm opacity-60">Founder & Director</p>
            </div>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow">
              <p className="text-xs font-semibold" style={{ color: BLUE }}>Founder & Director</p>
              <p className="text-sm font-bold" style={{ color: DARK }}>Mrs. Anitha R. R.</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: BLUE }}>Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5" style={{ color: DARK }}>
              A Legacy of Trust & Excellence
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: GREY }}>
              <p>
                For over three decades, <strong style={{ color: DARK }}>TrueValue Developers & Promoters</strong> has been a trusted name in Mysuru's real estate story. Founded by <strong style={{ color: DARK }}>Mrs. Anitha R. R.</strong> in 1993, our journey began with a vision to create living spaces that blend the city's cultural charm with modern aspirations.
              </p>
              <p>
                What started as a humble initiative has evolved into a brand synonymous with integrity, quality, and long-term value — helping thousands of families and investors turn their dreams into reality.
              </p>
              <p>
                At TrueValue, owning land isn't just an investment — it's an emotional milestone. We focus on creating value-driven, sustainable communities that stand the test of time and foster belonging.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="mt-6 space-y-2">
              {["MUDA & RERA approved projects", "Transparent legal processes", "Expert loan guidance up to 85%", "30+ years of trusted service"].map((pt, i) => (
                <li key={i} className="flex items-center gap-2 text-sm" style={{ color: DARK }}>
                  <CheckCircle size={16} style={{ color: BLUE }} /> {pt}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="mt-7 inline-block px-7 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ backgroundColor: WHITE }} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: DARK }}>Our Core Values</h2>
            <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: BLUE }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderBottom: `3px solid ${BLUE}` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: LIGHT_BG }}>
                  <Icon size={24} style={{ color: BLUE }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: DARK }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: GREY }}>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20" style={{ backgroundColor: LIGHT_BG }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: DARK }}>Our Journey</h2>
            <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: BLUE }}></div>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: BLUE, opacity: 0.2 }}></div>
            <div className="space-y-8">
              {milestones.map(({ year, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex gap-6 md:gap-10 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Year pill */}
                  <div className="flex-shrink-0 w-16 md:w-24 text-right md:text-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: BLUE }}>
                      {year}
                    </span>
                  </div>
                  <div className="relative flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="absolute -left-2 top-4 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: BLUE }}></div>
                    <h3 className="font-bold text-base mb-1" style={{ color: DARK }}>{title}</h3>
                    <p className="text-sm" style={{ color: GREY }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ backgroundColor: BLUE }}>
        <h2 className="text-3xl font-serif font-bold text-white mb-3">Ready to Find Your Dream Plot?</h2>
        <p className="text-blue-100 text-sm mb-7 max-w-md mx-auto">Join 2000+ families who trusted TrueValue for their real estate journey in Mysore.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/project" className="px-7 py-3 bg-white rounded-full text-sm font-bold transition-opacity hover:opacity-90" style={{ color: BLUE }}>
            Explore Projects
          </a>
          <a href="/contact" className="px-7 py-3 border border-white/50 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, CheckCircle, ArrowRight, X, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const BLUE = "#1A3A5C";
const LIGHT_BG = "#F4F7FB";
const WHITE = "#FFFFFF";
const GREY = "#6B7280";
const DARK = "#1F2937";

const ONGOING_PROJECTS = [
  {
    id: 1,
    name: "My Nagar",
    subtitle: "Bannur Road, Mysore",
    type: "MUDA Approved",
    tagline: "Premium Residential Layout",
    highlights: ["30×40 | 30×50 | 40×60 sites", "80–85% loan available", "North, East & West facing"],
    features: ["Wide asphalted roads", "Water & electricity supply", "Underground drainage", "Children's play area", "Ready for immediate registration", "Excellent connectivity"],
    loan: "80% – 85%",
    approval: "MUDA Approved",
    image: "/Img/mynagar.png",
    link: "/project/mynagar",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Vaishakh Lake View",
    subtitle: "Yelawala, Mysore",
    type: "RERA Registered",
    tagline: "Premium Residential Plots",
    highlights: ["Lakeside environment", "Loan up to 85%", "Near industries & colleges"],
    features: ["Peaceful lake-view plots", "Close to major city conveniences", "Ideal for homes or investment", "Green surroundings"],
    loan: "Up to 85%",
    approval: "RERA: PRM/KA/RERA/1252/200/PR/170315/009123",
    image: "/Img/Lake.png",
    link: "/project/lakeview",
    badge: "New",
  },
  {
    id: 4,
    name: "Shivam Layout",
    subtitle: "Nanjangud Road, Mysore",
    type: "RERA Registered",
    tagline: "Flagship Residential Layout",
    highlights: ["80% loan available", "Mysore–Nanjangud Highway access", "Close to schools & hospitals"],
    features: ["Well-planned layout", "Easy road access", "High resale value", "Emerging residential corridor"],
    loan: "Up to 80%",
    approval: "RERA: PRM/KA/RERA/1253/600/PR/180520/010005",
    image: "/Img/shivma.png",
    link: "/project/shivam",
  },
];

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      <div className="relative h-52">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <button onClick={onClose} className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white rounded-full p-1.5 hover:bg-white/40 transition">
          <X size={18} />
        </button>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs font-semibold opacity-80">{project.type}</p>
          <h3 className="text-xl font-serif font-bold">{project.name}</h3>
          <p className="text-xs opacity-80">{project.subtitle}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs mb-3 px-3 py-1.5 rounded-lg inline-block font-medium" style={{ backgroundColor: LIGHT_BG, color: BLUE }}>
          {project.approval}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs" style={{ color: GREY }}>Loan Available</p>
            <p className="text-sm font-bold" style={{ color: DARK }}>{project.loan}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs" style={{ color: GREY }}>Status</p>
            <p className="text-sm font-bold" style={{ color: BLUE }}>Active</p>
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: BLUE }}>Features</p>
        <ul className="grid grid-cols-1 gap-1.5 mb-5">
          {project.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm" style={{ color: GREY }}>
              <CheckCircle size={13} style={{ color: BLUE }} /> {f}
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Link
            to={project.link}
            className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ backgroundColor: BLUE }}
          >
            Full Details
          </Link>
          <a
            href="tel:+918431263217"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border"
            style={{ borderColor: BLUE, color: BLUE }}
          >
            <Phone size={14} /> Call
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const OngoingProjects = () => {
  const [selected, setSelected] = useState(null);

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
          Our Projects
        </motion.h1>
        <p className="text-base text-blue-100 max-w-xl mx-auto px-4">
          Premium MUDA & RERA approved plotted developments across Mysore's finest locations.
        </p>
      </div>

      {/* Filter badges */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-2 flex flex-wrap gap-2">
        {["All Locations", "Bannur Road", "Bogadi Road", "Yelawala", "Nanjangud Road", "Jettihundi"].map((tag, i) => (
          <span
            key={i}
            className={`px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition ${i === 0 ? 'text-white' : 'text-gray-600 bg-white border border-gray-200 hover:border-blue-300'}`}
            style={i === 0 ? { backgroundColor: BLUE } : {}}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {ONGOING_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {project.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: project.badge === 'New' ? '#059669' : BLUE }}>
                    {project.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm" style={{ color: BLUE }}>
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-serif font-bold" style={{ color: DARK }}>{project.name}</h3>
                </div>
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin size={13} style={{ color: BLUE }} />
                  <span className="text-xs" style={{ color: GREY }}>{project.subtitle}</span>
                </div>

                <ul className="space-y-1.5 mb-4 flex-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs" style={{ color: GREY }}>
                      <CheckCircle size={12} style={{ color: BLUE }} /> {h}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => setSelected(project)}
                    className="flex-1 py-2 rounded-xl text-xs font-semibold text-white text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BLUE }}
                  >
                    Quick View
                  </button>
                  <Link
                    to={project.link}
                    className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors"
                    style={{ borderColor: BLUE, color: BLUE }}
                  >
                    Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 text-center" style={{ backgroundColor: BLUE }}>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
          Interested in a Plot?
        </h2>
        <p className="text-blue-100 text-sm mb-7 max-w-md mx-auto">
          Our team is available Mon–Sat, 9am–6pm. Call or WhatsApp us to schedule a site visit.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="tel:+918431263217" className="flex items-center gap-2 px-7 py-3 bg-white rounded-full text-sm font-bold transition-opacity hover:opacity-90" style={{ color: BLUE }}>
            <Phone size={16} /> Call Now
          </a>
          <a href="https://wa.me/918431263217" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-7 py-3 border border-white/50 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default OngoingProjects;

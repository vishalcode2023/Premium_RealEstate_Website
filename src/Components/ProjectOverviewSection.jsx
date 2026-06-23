import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Trees, Home, Building2, School, Route, Zap, X, ChevronRight } from "lucide-react";

const BLUE = "#1A3A5C";
const LIGHT_BG = "#F4F7FB";
const WHITE = "#FFFFFF";
const GREY = "#6B7280";
const DARK = "#1F2937";

const getFeatureIcon = (feature) => {
  const lower = feature.toLowerCase();
  if (lower.includes("water")) return <Droplet size={16} />;
  if (lower.includes("electric")) return <Zap size={16} />;
  if (lower.includes("road")) return <Route size={16} />;
  if (lower.includes("green") || lower.includes("lake")) return <Trees size={16} />;
  if (lower.includes("plot") || lower.includes("layout")) return <Home size={16} />;
  if (lower.includes("school") || lower.includes("college")) return <School size={16} />;
  if (lower.includes("connectivity") || lower.includes("hub")) return <Building2 size={16} />;
  return <Trees size={16} />;
};

const projects = [
  {
    area: "Bannur Road, Mysore",
    highlights: [
      "Near top schools, colleges, and resorts",
      "Surrounded by established residential layouts",
      "Peaceful environment with full amenities",
    ],
    approval: "MUDA Approved",
    loanAvailability: "80% – 85%",
    features: ["Wide roads", "Water & electricity", "Green surroundings"],
    imageUrl: "/Img/mynagar.png",
  },
  {
    area: "Bogadi Road, Mysore",
    highlights: [
      "Close to city colleges and upcoming IT hub",
      "Easy access to Mysore Ring Road",
      "Rapidly developing residential zone",
    ],
    approval: "RERA: PRM/KA/RERA/1251/450/PR/170101/008001",
    loanAvailability: "Up to 80%",
    features: ["Premium plots", "Good connectivity", "Ideal for investment"],
    imageUrl: "/Img/jjNagar.png",
  },
  {
    area: "Yelawala, Mysore",
    highlights: [
      "Near industries, colleges & temples",
      "Calm lakeside environment",
      "Excellent potential for growth",
    ],
    approval: "RERA: PRM/KA/RERA/1252/200/PR/170315/009123",
    loanAvailability: "Up to 85%",
    features: ["Lake-view plots", "Spacious roads", "Green zone locality"],
    imageUrl: "/Img/Lake.png",
  },
  {
    area: "Nanjangud Road, Mysore",
    highlights: [
      "Close to schools and hospitals",
      "Connected to Mysore-Nanjangud Highway",
      "Emerging residential corridor",
    ],
    approval: "RERA: PRM/KA/RERA/1253/600/PR/180520/010005",
    loanAvailability: "Up to 80%",
    features: ["Well-planned layout", "Easy road access", "High resale value"],
    imageUrl: "/Img/shivma.png",
  },
  {
    area: "Jettihundi, Mysore",
    highlights: [
      "Close to city colleges & public amenities",
      "Nature-friendly surroundings",
      "Ready-to-build plots with appreciation value",
    ],
    approval: "RERA: PRM/KA/RERA/1254/100/PR/190708/011011",
    loanAvailability: "Up to 85%",
    features: ["Modern amenities", "Peaceful setting", "Green landscapes"],
    imageUrl: "/Img/vana.png",
  },
];

// Featured project card (carousel)
const FeaturedCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section style={{ backgroundColor: LIGHT_BG }} className="py-16 md:py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: DARK }}>
            Our Projects
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 rounded-full" style={{ backgroundColor: BLUE }}></div>
          <p className="mt-3 text-base" style={{ color: GREY }}>
            Premium residential plots across Mysore's finest locations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img
                  src={projects[current].imageUrl}
                  alt={projects[current].area}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: BLUE }}>
                  {projects[current].approval}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-1" style={{ color: DARK }}>
                  {projects[current].area}
                </h3>
                <div className="w-12 h-0.5 mb-5 rounded-full" style={{ backgroundColor: BLUE }}></div>

                <ul className="space-y-2 mb-5">
                  {projects[current].highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: GREY }}>
                      <ChevronRight size={14} style={{ color: BLUE }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="space-y-1 text-sm mb-6">
                  <p>
                    <span className="font-semibold" style={{ color: DARK }}>Loan:</span>{" "}
                    <span style={{ color: GREY }}>{projects[current].loanAvailability}</span>
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => openModal(projects[current])}
                    className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BLUE }}
                  >
                    View Details
                  </button>
                  <a
                    href="/project"
                    className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors"
                    style={{ borderColor: BLUE, color: BLUE }}
                  >
                    All Projects →
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-white shadow transition-opacity hover:opacity-80"
            style={{ backgroundColor: BLUE }}
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-white shadow transition-opacity hover:opacity-80"
            style={{ backgroundColor: BLUE }}
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${current === i ? 'w-6' : 'w-2'}`}
              style={{ backgroundColor: current === i ? BLUE : '#CBD5E1' }}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <X size={22} />
              </button>
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.area}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />
              <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: DARK }}>
                {selectedProject.area}
              </h3>
              <div className="text-sm space-y-1 mb-4">
                <p><span className="font-semibold" style={{ color: DARK }}>Approval:</span> <span style={{ color: GREY }}>{selectedProject.approval}</span></p>
                <p><span className="font-semibold" style={{ color: DARK }}>Loan:</span> <span style={{ color: GREY }}>{selectedProject.loanAvailability}</span></p>
              </div>
              <p className="text-sm font-semibold mb-2" style={{ color: BLUE }}>Features</p>
              <ul className="space-y-1.5 text-sm" style={{ color: GREY }}>
                {selectedProject.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {getFeatureIcon(f)} {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-5 block text-center px-5 py-3 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: BLUE }}
              >
                Enquire Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedCarousel;
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  Building2,
  Route,
  Trees,
  Droplet, // Already used for water utility, and a good general water icon
  ShieldCheck,
  Star,
  Landmark,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Footprints,
  Utensils,
  Banknote,
  Hospital,
  CreditCard,
  School,
  Smile,
  Building,
  Briefcase,
  Lock,
  // Corrected/Confirmed Lucide icons for Lakeview theme amenities
  Waves, // Good for water bodies
  Cloud, // For sky/nature
  Sunrise, // For scenic views/sun
  Fish, // This one IS actually available in Lucide! My apologies for the earlier assumption it wasn't.
  Leaf, // Another good nature icon
} from "lucide-react";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const Lakeview = () => {
  // Features for "Why Invest in Mysore?" - same across all pages
  const features = [
    { icon: <Building2 size={24} />, title: "Growing IT Hub" },
    { icon: <Route size={24} />, title: "Improved Connectivity" },
    { icon: <Home size={24} />, title: "Affordable Housing" },
    { icon: <ShieldCheck size={24} />, title: "High Quality of Life" },
    {
      icon: <GraduationCap size={24} />,
      title: "Educational & Healthcare Hub",
    },
    { icon: <Trees size={24} />, title: "Tourism & Hospitality" },
    { icon: <Droplet size={24} />, title: "Infrastructure Development" },
    { icon: <Star size={24} />, title: "Appreciation Potential" },
    { icon: <Landmark size={24} />, title: "Planned Development" },
    { icon: <MapPin size={24} />, title: "Tier-II City Advantage" },
  ];

  // Corrected Amenities for Vaishakh Lake View Enclave - CUSTOMIZE THESE
  const lakeviewAmenities = [
    { title: "Scenic Lake View", icon: <Waves size={28} /> }, // Using Waves
    { title: "Green Landscape", icon: <Trees size={28} /> },
    { title: "Jogging & Walking Tracks", icon: <Footprints size={28} /> },
    { title: "Children's Play Area", icon: <Smile size={28} /> },
    { title: "Gated Community", icon: <Lock size={28} /> },
    { title: "24/7 Security", icon: <ShieldCheck size={28} /> },
    { title: "Underground Drainage", icon: <CheckCircle size={28} /> },
    { title: "Electricity & Water Supply", icon: <Droplet size={28} /> }, // Droplet is fine for water supply
  ];

  return (
    <div className="bg-[#F4F7FB] text-[#1F2937] font-sans overflow-hidden">
      <Navbar />
      {/* ✅ Hero Section - Adapted for Lakeview */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/Img/Lake.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
          >
            Vaishakh Lake View Enclave
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Premium Sites for Sale in{" "}
            <span className="text-[#7EA6D8] font-semibold">
              Yelawala, Mysore
            </span>
          </motion.p>
        </div>
      </section>

      {/* ✅ About Section (Left image + right text) - Adapted for Lakeview content */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto py-20 px-6 md:px-16 gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/Img/Lake.png" // NEW IMAGE PATH
            alt="Vaishakh Lake View Enclave Yelawala"
            className="rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937]">
            About{" "}
            <span className="text-[#1A3A5C]">Vaishakh Lake View Enclave</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Are you searching for a plot to build your dream home, a strategic
            investment opportunity, or a commercial site to establish your
            business? Look no further!
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We offer a diverse selection of sites for sale in{" "}
            <span className="text-[#1A3A5C] font-semibold">
              Yelawala, Mysore
            </span>
            , catering to a variety of needs and budgets. Explore our listing of{" "}
            <span className="text-[#1A3A5C] font-semibold">
              Vaishakh Lake View Enclave Yelawala, Mysore
            </span>
            .
          </p>
        </motion.div>
      </section>

      {/* ✅ Amenities Section - For Lakeview (Same attractive style) */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="relative text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-tight mb-4"
          >
            Vaishakh Lake View Enclave{" "}
            <span className="text-[#1A3A5C]">Amenities</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1.5 bg-[#1A3A5C] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {lakeviewAmenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 35px rgba(0,0,0,0.15)",
                y: -5,
              }}
              className="group flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-7 space-y-4
                         hover:bg-gradient-to-br hover:from-white hover:to-[#F4F7FB] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1A3A5C]"
            >
              <div
                className="w-20 h-20 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-[#1A3A5C] to-[#142d47] text-white text-4xl shadow-md
                               transform group-hover:scale-110 transition-transform duration-300"
              >
                {item.icon}
              </div>
              <p className="font-bold text-xl text-[#1F2937] leading-tight group-hover:text-[#1A3A5C] transition-colors duration-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Why Invest Section - Same as MyNagar & Jjenclave */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="relative text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1F2937] tracking-tight leading-tight mb-4"
          >
            Why Invest in <span className="text-[#1A3A5C]">Mysore?</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-[#1A3A5C] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
              }}
              className="flex items-center flex-col text-center bg-white rounded-xl shadow-lg p-6 space-y-4 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full bg-[#1A3A5C]/20 text-[#1A3A5C] text-3xl shadow-md transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <p className="font-semibold text-xl text-[#1F2937] leading-tight">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Lakeview;
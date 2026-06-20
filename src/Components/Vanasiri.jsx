import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  Building2,
  Route,
  Trees, // Great for Vanasiri (nature)
  Droplet,
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
  Lightbulb,
  // Other potential icons for layout specific amenities
  Leaf, // Another good nature icon
  Sun, // For open spaces, natural light
} from "lucide-react";

import Navbar from '../Router/Navbar'
import Footer from '../Components/Footer'

const Vanasiri = () => {
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

  // Placeholder Amenities for Vanasiri Layout - CUSTOMIZE THESE
  const vanasiriAmenities = [
    { title: "Lush Green Surroundings", icon: <Trees size={28} /> },
    { title: "Eco-Friendly Design", icon: <Leaf size={28} /> }, // Using Leaf for eco-friendly
    { title: "Wide Roads", icon: <Route size={28} /> },
    { title: "Underground Utilities", icon: <Droplet size={28} /> }, // Droplet for water/electricity lines
    { title: "24/7 Security", icon: <ShieldCheck size={28} /> },
    { title: "Children's Play Area", icon: <Smile size={28} /> },
    { title: "Clear Title Plots", icon: <CheckCircle size={28} /> },
    { title: "Serene Environment", icon: <Sun size={28} /> }, // Using Sun for serenity/openness
  ];

  return (
    <div className="bg-[#f8f6f1] text-[#1a1a1a] font-sans overflow-hidden">
        <Navbar/>
      {/* ✅ Hero Section - Adapted for Vanasiri Layout */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/Img/vana.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
          >
            Vanasiri Layout, Jettihundi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Plots for Sale in{" "}
            <span className="text-[#f4b860] font-semibold">
              Jettihundi, Mysore
            </span>{" "}
            - Modern Living with Nature's Serenity
          </motion.p>
        </div>
      </section>

      {/* ✅ About Section (Left image + right text) - Adapted for Vanasiri Layout content */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto py-20 px-6 md:px-16 gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/Img/vana.png" // NEW IMAGE PATH
            alt="Vanasiri Layout Jettihundi Mysore"
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
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a2e3d]">
            About <span className="text-[#f4b860]">Vanasiri Layout</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Looking for plots for sale in Jettihundi Mysore? Your search ends
            here! <span className="text-[#f4b660] font-semibold">Vanasiri</span>{" "}
            offers a harmonious blend of modern living and natural serenity,
            making it the perfect place to build your dream home.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Explore our website to discover more about Vanasiri layout,
            including plot sizes, pricing, amenities, and the benefits of
            investing in Jettihundi, Mysore. Contact us today to schedule a site
            visit and experience the future of living at Vanasiri by{" "}
            <span className="text-[#f4b860] font-semibold">SVP Developers</span>
            . We specialize in plotted developments in Mysore and are committed
            to providing our customers with the best investment opportunities.
            Bogadi is also well-connected by public transport with other parts
            of Mysore.
          </p>
        </motion.div>
      </section>

      {/* ✅ Amenities Section - For Vanasiri Layout (Same attractive style) */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="relative text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0a2e3d] tracking-tight leading-tight mb-4"
          >
            Vanasiri Layout <span className="text-[#f4b860]">Amenities</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1.5 bg-[#f4b860] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vanasiriAmenities.map((item, i) => (
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
                         hover:bg-gradient-to-br hover:from-white hover:to-[#f8f6f1] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#f4b860]"
            >
              <div
                className="w-20 h-20 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f4b860] to-[#e0a752] text-white text-4xl shadow-md
                               transform group-hover:scale-110 transition-transform duration-300"
              >
                {item.icon}
              </div>
              <p className="font-bold text-xl text-[#0a2e3d] leading-tight group-hover:text-[#f4b860] transition-colors duration-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Why Invest Section - Same as other pages */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="relative text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0a2e3d] tracking-tight leading-tight mb-4"
          >
            Why Invest in <span className="text-[#f4b860]">Mysore?</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-[#f4b860] mx-auto rounded-full"
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
              <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full bg-[#f4b860]/20 text-[#f4b860] text-3xl shadow-md transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <p className="font-semibold text-xl text-[#0a2e3d] leading-tight">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Vanasiri;

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  Building2,
  Route,
  Trees,
  Droplet,
  ShieldCheck,
  Star,
  Landmark,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Footprints, // Jogging Track
  Utensils, // Restaurants (better than Forklift)
  Banknote, // Banks
  Hospital, // Hospitals
  CreditCard, // ATMs
  School, // Schools
  Car, // Parking (for children's play area icon if needed, or stick to CheckCircle)
  Smile, // Another option for Children's Play Area
} from "lucide-react";

import Navbar from '../Router/Navbar'
import Footer from '../Components/Footer'

const MyNagar = () => {
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

  const amenities = [
    { title: "Jogging Track", icon: <Footprints size={28} /> }, // Increased icon size
    { title: "Children's Play Area", icon: <Smile size={28} /> }, // Using Smile for playful feel
    { title: "Restaurants", icon: <Utensils size={28} /> },
    { title: "Banks", icon: <Banknote size={28} /> },
    { title: "Hospitals", icon: <Hospital size={28} /> },
    { title: "ATMs", icon: <CreditCard size={28} /> },
    { title: "Schools", icon: <School size={28} /> },
  ];

  return (
    <div className="bg-[#f8f6f1] text-[#1a1a1a] font-sans overflow-hidden">
      <Navbar/>
      {/* ✅ Hero Section */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/Img/mynagar.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
          >
            My Nagar Layout, Mysore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            MUDA Approved Premium Residential Layout by{" "}
            <span className="text-[#f4b860] font-semibold">
              TrueValue Developers
            </span>
          </motion.p>
        </div>
      </section>

      {/* ✅ About Section (Left image + right text) - NOW SECOND CONTENT SECTION */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto py-20 px-6 md:px-16 gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/Img/mynagar.png"
            alt="My Nagar Layout Mysore"
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
            About <span className="text-[#f4b860]">My Nagar Layout</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Keeping the same ideology, we are presenting you{" "}
            <span className="text-[#f4b860] font-semibold">
              “My Nagar Layout”
            </span>
            , surrounded by well-known schools, colleges, resorts, and
            residential layouts. MUDA Approved ‘My Nagar Layout’ offers a rich
            green part of Mysore with wide roads, inclusive of all basic
            facilities like water, electricity, garden, CA sites, and security.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            You can choose from{" "}
            <span className="text-[#f4b860] font-semibold">
              North, East, and West-facing
            </span>{" "}
            sites in dimensions of{" "}
            <span className="text-[#f4b860] font-semibold">
              30×40 | 30×50 | 40×60
            </span>
            . My Nagar Layout blends nature and modern living — perfect for your
            dream home.
          </p>
          
        </motion.div>
      </section>

      {/* ✅ Amenities Section (NOW FIRST CONTENT SECTION & MORE ATTRACTIVE) */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="relative text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0a2e3d] tracking-tight leading-tight mb-4"
          >
            Premium <span className="text-[#f4b860]">Amenities</span>
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
          {amenities.map((item, i) => (
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
              <div className="w-20 h-20 mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f4b860] to-[#e0a752] text-white text-4xl shadow-md
                               transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="font-bold text-xl text-[#0a2e3d] leading-tight group-hover:text-[#f4b860] transition-colors duration-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Why Invest Section (Removed button, now third content section) */}
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
              whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.1)" }}
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
        {/* Removed the Contact Us button as requested */}
      </section>
      <Footer/>
    </div>
  );
};

export default MyNagar;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Handshake, ShieldCheck, Diamond, Zap } from 'lucide-react'; // Icons for features

// --- Define Colors for Consistency ---
const BACKGROUND_COLOR_GOLD = '#F4F7FB'; // Soft, light golden/creamy background
const PRIMARY_TEXT_COLOR = '#333333'; // Dark text for headings and main info
const SECONDARY_TEXT_COLOR = '#666666'; // Grayish text for descriptions
const ACCENT_COLOR_BROWN = '#1A3A5C'; // Brownish color for accents
const HIGHLIGHT_COLOR_LIGHT = '#BFCFDE'; // A lighter shade of brown for subtle highlights


// --- Data for Why Choose Us Features (Real Estate Focused) ---
const features = [
  {
    icon: Award,
    title: "30 Years of Proven Expertise",
    shortDescription: "Our experience is unparalleled. We understand the evolving needs of our customers and the unique dynamics of the Mysore real estate market.",
    description: "Our seasoned team brings unparalleled market knowledge and a proven track record of successful transactions, ensuring you always get the best outcome.",
  },
  {
    icon: TrendingUp,
    title: "Uncompromising Quality",
    shortDescription: "We are committed to delivering exceptional quality in every aspect of our projects, from meticulous planning and construction to meticulous finishing.",
    description: "We employ data-driven strategies and precise market analysis to ensure your real estate investments yield optimal growth and long-term value.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Approach",
    shortDescription: "Your satisfaction is our ultimate goal. We prioritize open communication, transparency, and personalized service throughout your site-buying journey..",
    description: "Your goals are our priority. We offer personalized service, building strong relationships based on unwavering trust and mutual success.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent Process",
    shortDescription: "Peace of mind with clear, compliant procedures.",
    description: "Experience complete peace of mind with our clear, secure, and fully compliant real estate procedures, from inquiry to closing.",
  },
  {
    icon: Diamond,
    title: "A Strong Foundation of Values",
    shortDescription: "Integrity, transparency, and customer satisfaction are the cornerstones of our business philosophy..",
    description: "Gain entry to a curated selection of off-market listings and premium properties not available anywhere else, giving you a competitive edge.",
  },
  {
    icon: Zap,
    title: "Building Sustainable Communities",
    shortDescription: "We are committed to creating eco-friendly and sustainable living spaces that minimize our environmental impact.",
    description: "From stunning virtual tours to targeted digital campaigns, our cutting-edge marketing attracts the right buyers and tenants efficiently.",
  },
];


// --- Motion Variants for Section Title and Description ---
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// --- Motion Variants for individual feature cards ---
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    }
  }
};


// --- Main Why Choose Us Component ---
const WhyChooseUsSection = () => {
  return (
    <section
      style={{ backgroundColor: BACKGROUND_COLOR_GOLD }}
      className="py-20 md:py-24 pb-10 md:pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: PRIMARY_TEXT_COLOR }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: ACCENT_COLOR_BROWN }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            Discover the core advantages that set us apart and empower your real estate journey.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative h-64 sm:h-72 md:h-80 group perspective-1000" // Added perspective for 3D effect
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Front Card (Always Visible) */}
              <motion.div
                className="absolute inset-0 bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center cursor-pointer transform-gpu backface-hidden"
                style={{ zIndex: 2 }}
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: -10, transition: { duration: 0.3 } }} // Subtle rotation on hover
              >
                {/* Icon */}
                <div
                  className="mb-4 p-3 rounded-full"
                  style={{ backgroundColor: ACCENT_COLOR_BROWN, color: BACKGROUND_COLOR_GOLD }}
                >
                  <feature.icon size={32} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: PRIMARY_TEXT_COLOR }}
                >
                  {feature.title}
                </h3>

                {/* Short Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: SECONDARY_TEXT_COLOR }}
                >
                  {feature.shortDescription}
                </p>
              </motion.div>

              {/* Back Card (Reveals on Hover) */}
              <motion.div
                className="absolute inset-0 p-6 rounded-lg flex flex-col items-center justify-center text-center transform-gpu backface-hidden"
                style={{ backgroundColor: ACCENT_COLOR_BROWN, color: BACKGROUND_COLOR_GOLD, zIndex: 1 }}
                initial={{ rotateY: 90, scale: 0.9 }} // Start rotated and slightly smaller
                whileHover={{ rotateY: 0, scale: 1, transition: { duration: 0.3, delay: 0.1 } }} // Rotate to front and scale up on hover
              >
                {/* Full Description */}
                <p
                  className="text-base leading-relaxed font-light"
                >
                  {feature.description}
                </p>
                {/* Optional: Add a small arrow or call to action */}
                <Award size={24} className="mt-4 opacity-70" />
              </motion.div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
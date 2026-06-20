import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BACKGROUND_COLOR_GOLD = "#F4F7FB";
const PRIMARY_TEXT_COLOR = "#333333";
const ACCENT_COLOR_GOLD_TEXT = "#B29272";
const ACCENT_COLOR_BROWN = "#7D5A4C";

const galleryImages = [
  {
    src: "/Img/mynagar.png",
    alt: "Global housing community statue",
    caption: "My Nagar Sites Mysore by SVP Developers",
    delay: 0.2,
    initialY: 0,
  },
  {
    src: "/Img/jjNagar.png",
    alt: "Community entrance with gate",
    caption: "JJ Enclave - Bogadi Road, Mysore",
    delay: 0.4,
    initialY: 30,
  },
  {
    src: "/Img/Lake.png",
    alt: "Billiards table in recreation room",
    caption: "Vaishakh Lake View Enclave - Yelawala, Mysore",
    delay: 0.6,
    initialY: 0,
  },
  {
    src: "/Img/shivma.png",
    alt: "Person jogging on a pathway",
    caption: "Shivam Layout - Nanjangud Road, Mysore",
    delay: 0.8,
    initialY: 30,
  },
  {
    src: "/Img/vana.png",
    alt: "Modern row houses at dusk",
    caption: "Vanasiri - Jettihundi, Mysore",
    delay: 1.0,
    initialY: 0,
  },
];

// --- Updated Motion Variants for Headline Text (Now slides from left) ---
const textVariants = {
  hidden: { opacity: 0, x: -80, y: 30 }, // Comes from left + slightly below
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const imageCardVariants = {
  hidden: (initialY) => ({ opacity: 0, y: initialY + 50, scale: 0.9 }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8,
    },
  },
};

const AboutUsStorySection = () => {
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const imageGridY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{ backgroundColor: BACKGROUND_COLOR_GOLD }}
      className="py-20 md:py-32 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headline Section - Comes from Left on Scroll */}
        <motion.div
          className="max-w-4xl mb-20 md:mb-28 lg:mb-36 mx-auto md:mx-0 text-center md:text-left"
          style={{ y: headlineY }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight"
            style={{ color: PRIMARY_TEXT_COLOR }}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Find your perfect plot <br />
            In thriving neighborhoods <br />
            And cities like Mysore & Bangalore{" "}
            <motion.span
              className="inline-block font-script italic relative z-10"
              style={{ color: ACCENT_COLOR_GOLD_TEXT, fontFamily: "serif" }}
              variants={textVariants}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            >
              Stories & history
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Image Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 justify-center items-end"
          style={{ y: imageGridY }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full overflow-hidden group cursor-pointer"
              style={{
                height: index % 2 === 0 ? "280px" : "320px",
                marginBottom: image.initialY,
              }}
              variants={imageCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={image.initialY}
              transition={{ delay: image.delay }}
              whileHover={{
                scale: 1.03,
                zIndex: 10,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50 transition-colors duration-200"
        style={{
          backgroundColor: ACCENT_COLOR_BROWN,
          color: BACKGROUND_COLOR_GOLD,
        }}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </section>
  );
};

export default AboutUsStorySection;

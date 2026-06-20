import React from "react";
import { motion } from "framer-motion";
import { Crown } from "lucide-react";

// --- Define Colors for Consistency ---
const BACKGROUND_COLOR_GOLD = "#F4F7FB"; // Soft, light golden/creamy background
const PRIMARY_TEXT_COLOR = "#333333"; // Dark text for headings and main info
const ACCENT_COLOR_BROWN = "#7D5A4C"; // Brownish color for accents
const HIGHLIGHT_COLOR_LIGHT = "#E0CCB8"; // A lighter shade of brown for the timeline line
const SECONDARY_TEXT_COLOR = "#666666"; // Grayish text for descriptions

// --- Define the single featured image ---
const FEATURED_IMAGE_URL = "/Img/Founder.jpg"; // A representative image for the entire timeline

// --- Data for the Leadership Timeline (Simplified) ---
const timelineEvents = [
  {
    year: "1995",
    title: "Foundational Vision",
    leader: "Mr. Gangadhar",
    role: "Founder",
    description:
      "Mr. Gangadhar, started the journey into real estate 30 years ago Established the firm with a commitment to quality housing and community-centric development, setting a new standard for urban living.",
  },
  {
    year: "2005",
    title: "Era of Expansion",
    leader: "Mr. Gangadhar",
    // role: "Chief Executive Officer",
    description:
      "Pioneered the firm's expansion into commercial and luxury segments, successfully managing the transition to a publicly listed company. SVP Developers has been a cornerstone of the Mysore real estate landscape. Founded in 1993",
  },
  {
    year: "Present",
    title: "Future of Digital Real Estate",
    leader: "Mr. Gangadhar",
    // role: "Current CEO",
    description:
      "Driving digital transformation across all processes, focusing on PropTech integration and expanding the firm's global investment portfolio.",
  },
];

// --- Animation Variants ---
const cardVariants = {
  hidden: {
    opacity: 0,
    x: 50, // Cards will slide in from the right
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 20, delay: 0.2 },
  },
};

const pointVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 15, delay: 0.1 },
  },
};

// --- Timeline Event Item (Reusable Component for the Right Column) ---
const TimelineEventItem = ({ event, isLast }) => {
  return (
    // Add padding-bottom to all but the last item to create vertical space
    <div className={`relative pl-12 ${!isLast ? "pb-16" : ""}`}>
      {/* Point on the timeline line */}
      <motion.div
        className="absolute w-6 h-6 rounded-full top-1 z-10 left-0 flex items-center justify-center"
        style={{ backgroundColor: ACCENT_COLOR_BROWN, marginLeft: "-11px" }} // Adjust to center on the line
        variants={pointVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <Crown size={14} color={BACKGROUND_COLOR_GOLD} />
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        style={{ borderLeft: `4px solid ${ACCENT_COLOR_BROWN}` }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p
          className="text-sm uppercase tracking-wider font-semibold mb-2"
          style={{ color: ACCENT_COLOR_BROWN }}
        >
          {event.year}
        </p>
        <h3
          className="text-2xl font-serif font-bold mb-3"
          style={{ color: PRIMARY_TEXT_COLOR }}
        >
          {event.title}
        </h3>
        <div className="mb-4">
          <p
            className="text-lg font-semibold"
            style={{ color: PRIMARY_TEXT_COLOR }}
          >
            {event.leader}
          </p>
          <p className="text-sm italic" style={{ color: SECONDARY_TEXT_COLOR }}>
            {event.role}
          </p>
        </div>
        <p
          className="text-base leading-relaxed"
          style={{ color: PRIMARY_TEXT_COLOR }}
        >
          {event.description}
        </p>
      </motion.div>
    </div>
  );
};

// --- Main Section Component ---
const LeadershipTimeline = () => {
  return (
    <section
      style={{ backgroundColor: BACKGROUND_COLOR_GOLD }}
      className="py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
            style={{ color: PRIMARY_TEXT_COLOR }}
          >
            A Legacy of Vision
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: ACCENT_COLOR_BROWN }}
          >
            Tracing the visionaries who built our legacy, decade by decade.
          </p>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Sticky Image */}
          {/* On large screens, this image will stick to the viewport as you scroll the text */}
          <div className="h-[300px] md:h-[400px] lg:h-auto lg:sticky top-32 mb-12 lg:mb-0">
            <motion.div
              className="w-full h-full lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={FEATURED_IMAGE_URL}
                alt="Leadership Legacy"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Right Column: Timeline Events */}
          <div className="relative">
            {/* The vertical timeline line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-1 -ml-2"
              style={{ backgroundColor: HIGHLIGHT_COLOR_LIGHT }}
            ></div>

            <div className="flex flex-col">
              {timelineEvents.map((event, index) => (
                <TimelineEventItem
                  key={index}
                  event={event}
                  isLast={index === timelineEvents.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTimeline;
